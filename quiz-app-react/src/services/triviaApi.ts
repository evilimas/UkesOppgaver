import type { CategoriesResponse, QuizResponse } from '../types';
import { ResponseCode } from '../types';

const API_BASE_URL = 'https://opentdb.com';

/**
 * Service class for interacting with the Open Trivia Database API
 * 
 * Why a class instead of plain functions?
 * - Encapsulation: All API-related logic is contained
 * - Error handling: Centralized error handling patterns
 * - Future extensibility: Easy to add caching, retry logic, etc.
 */
export class TriviaApiService {
  private static lastRequestTime = 0;
  private static readonly MIN_REQUEST_INTERVAL = 5000; // 5 seconds between requests

  /**
   * Delays execution to respect rate limits
   */
  private static async respectRateLimit(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < this.MIN_REQUEST_INTERVAL) {
      const waitTime = this.MIN_REQUEST_INTERVAL - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    this.lastRequestTime = Date.now();
  }

  /**
   * Retry logic with exponential backoff for rate limited requests
   */
  private static async fetchWithRetry(url: string, maxRetries = 3): Promise<Response> {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        await this.respectRateLimit();
        
        const response = await fetch(url);
        
        if (response.status === 429) {
          if (attempt === maxRetries) {
            throw new Error('Rate limit exceeded. Please wait a few minutes and try again.');
          }
          
          // Exponential backoff: wait 2^attempt * 5 seconds
          const waitTime = Math.pow(2, attempt) * 5000;
          console.log(`Rate limited, waiting ${waitTime/1000} seconds before retry...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
          continue;
        }
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response;
      } catch (error) {
        if (attempt === maxRetries) {
          throw error;
        }
        
        // Wait before retrying on other errors
        const waitTime = Math.pow(2, attempt) * 1000;
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
    
    throw new Error('Max retries exceeded');
  }
  /**
   * Fetches all available quiz categories
   * @returns Promise with array of categories
   */
  static async getCategories(): Promise<CategoriesResponse> {
    try {
      const response = await this.fetchWithRetry(`${API_BASE_URL}/api_category.php`);
      const data: CategoriesResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch quiz categories. Please check your internet connection and try again.');
    }
  }

  /**
   * Fetches quiz questions for a specific category
   * @param categoryId - The category ID from OpenTDB
   * @param amount - Number of questions to fetch (default: 3)
   * @param difficulty - Question difficulty (optional)
   * @returns Promise with quiz questions
   */
  static async getQuestions(
    categoryId: number, 
    amount: number = 3, 
    difficulty?: 'easy' | 'medium' | 'hard'
  ): Promise<QuizResponse> {
    try {
      // Build query parameters
      const params = new URLSearchParams({
        amount: amount.toString(),
        category: categoryId.toString(),
        type: 'multiple' // Only multiple choice questions for simplicity
      });

      if (difficulty) {
        params.append('difficulty', difficulty);
      }

      const response = await this.fetchWithRetry(`${API_BASE_URL}/api.php?${params}`);
      const data: QuizResponse = await response.json();
      
      // Handle API-specific error codes
      if (data.response_code !== ResponseCode.SUCCESS) {
        throw new Error(this.getErrorMessage(data.response_code));
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching questions:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to fetch quiz questions. Please try again.');
    }
  }

  /**
   * Converts API response codes to user-friendly error messages
   * @param code - Response code from the API
   * @returns User-friendly error message
   */
  private static getErrorMessage(code: number): string {
    switch (code) {
      case ResponseCode.NO_RESULTS:
        return 'No questions found for this category. Please try a different category.';
      case ResponseCode.INVALID_PARAMETER:
        return 'Invalid request parameters. Please try again.';
      case ResponseCode.TOKEN_NOT_FOUND:
      case ResponseCode.TOKEN_EMPTY:
        return 'Session error. Please refresh the page.';
      case ResponseCode.RATE_LIMIT:
        return 'Too many requests. Please wait a moment and try again.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  /**
   * Utility function to decode HTML entities in question text
   * OpenTDB returns questions with HTML entities that need to be decoded
   * @param text - Text with HTML entities
   * @returns Decoded text
   */
  static decodeHtmlEntities(text: string): string {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
}
