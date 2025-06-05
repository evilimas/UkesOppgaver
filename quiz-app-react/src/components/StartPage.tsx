import React, { useState, useEffect } from 'react';
import type { QuizCategory } from '../types';
import { TriviaApiService } from '../services/triviaApi';

interface StartPageProps {
  onCategorySelect: (categoryId: number) => void;
}

/**
 * StartPage component for category selection
 * 
 * Design choices:
 * - Clean, simple interface focusing on category selection
 * - Loading states for better UX
 * - Error handling with retry functionality
 * - Responsive grid layout for categories
 */
export const StartPage: React.FC<StartPageProps> = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState<QuizCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await TriviaApiService.getCategories();
      setCategories(response.trivia_categories);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load categories';
      
      // Show a more helpful message for rate limiting
      if (errorMessage.includes('Rate limit') || errorMessage.includes('429')) {
        setError('The quiz API is temporarily busy. Please wait a moment and try again.');
      } else {
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryClick = (categoryId: number) => {
    onCategorySelect(categoryId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading quiz categories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchCategories}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">🧠 Quiz Challenge</h1>
          <p className="text-xl text-gray-600">Choose a category to test your knowledge!</p>
          <p className="text-sm text-gray-500 mt-2">You'll get 3 questions to answer</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-gray-200 hover:border-indigo-300 text-left group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {category.name}
                </h3>
                <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                  {getCategoryEmoji(category.name)}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Click to start quiz</p>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Powered by{' '}
            <a
              href="https://opentdb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700"
            >
              Open Trivia Database
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Helper function to get appropriate emoji for category
 * Makes the UI more visually appealing and easier to scan
 */
const getCategoryEmoji = (categoryName: string): string => {
  const name = categoryName.toLowerCase();
  
  if (name.includes('general')) return '🌟';
  if (name.includes('books')) return '📚';
  if (name.includes('film') || name.includes('movie')) return '🎬';
  if (name.includes('music')) return '🎵';
  if (name.includes('television') || name.includes('tv')) return '📺';
  if (name.includes('video games')) return '🎮';
  if (name.includes('board games')) return '🎲';
  if (name.includes('science') && name.includes('nature')) return '🔬';
  if (name.includes('computers')) return '💻';
  if (name.includes('mathematics')) return '🔢';
  if (name.includes('mythology')) return '⚡';
  if (name.includes('sports')) return '⚽';
  if (name.includes('geography')) return '🌍';
  if (name.includes('history')) return '📜';
  if (name.includes('politics')) return '🏛️';
  if (name.includes('art')) return '🎨';
  if (name.includes('celebrities')) return '⭐';
  if (name.includes('animals')) return '🐾';
  if (name.includes('vehicles')) return '🚗';
  if (name.includes('comics')) return '💥';
  if (name.includes('anime') || name.includes('manga')) return '🎌';
  if (name.includes('cartoon')) return '🎪';
  
  return '❓'; // Default emoji
};
