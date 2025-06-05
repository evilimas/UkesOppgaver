# React Quiz App with TypeScript

A modern quiz application built with React, TypeScript, and Vite that fetches random trivia questions from the Open Trivia Database API.

## ✅ Status

**Project Complete!** - The quiz app is fully functional and ready to use at http://localhost:5173

## 🚀 Features

- **Category Selection**: Choose from 30+ quiz categories
- **Dynamic Questions**: 3 random multiple-choice questions per quiz  
- **Real-time Scoring**: Track your progress with instant feedback
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, gradient-based design with animations

## 🛠️ Technology Stack

- **React** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **Open Trivia Database API** for quiz questions

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server  
npm run dev

# Build for production
npm run build
```

## 🏗️ Architecture & Implementation

### **Project Structure**
```
src/
├── components/          # React components
│   ├── StartPage.tsx   # Category selection with emoji icons
│   └── QuizPage.tsx    # Quiz questions and results
├── hooks/
│   └── useQuiz.ts      # Custom hook for quiz state management
├── services/
│   └── triviaApi.ts    # API service with rate limiting & retry logic
├── types/
│   └── index.ts        # TypeScript interfaces and types
├── App.tsx             # Main app with React Router
└── main.tsx            # Application entry point
```

### **Key Features Implemented**

#### 🔄 **Custom State Management**
- **useQuiz Hook**: Centralized quiz state management
- **Type-safe state**: Full TypeScript integration
- **Separation of concerns**: Business logic separate from UI

#### 🛡️ **API Rate Limiting Solution**
- **Automatic retry logic** with exponential backoff (5s, 10s, 20s delays)
- **Request throttling**: 5-second minimum between API calls
- **429 error handling**: Graceful degradation with user-friendly messages
- **Smart error recovery**: Automatic retries with increasing delays

#### 🎨 **Modern UI/UX**
- **Responsive design** with Tailwind CSS utility classes
- **Category icons**: Emoji-based visual category identification
- **Loading states**: Smooth transitions and feedback
- **Error boundaries**: Comprehensive error handling and recovery

### **API Integration Details**

The app integrates with the **Open Trivia Database (OpenTDB)** API:
- **Categories endpoint**: Fetches 30+ quiz categories
- **Questions endpoint**: Retrieves 3 multiple-choice questions per quiz
- **HTML entity decoding**: Automatically decodes special characters
- **Error code mapping**: Converts API error codes to user-friendly messages

### **Rate Limiting Strategy**

To handle API rate limits (HTTP 429 errors):

1. **Request Spacing**: Minimum 5-second intervals between requests
2. **Exponential Backoff**: Automatic retries with increasing delays
3. **User Feedback**: Clear messaging when rate limits are encountered
4. **Graceful Degradation**: Fallback behavior for failed requests

## 🧠 Learning Outcomes

This project demonstrates modern React development patterns:

- **TypeScript Integration**: Full type safety across the application
- **Custom Hooks**: Reusable state management logic
- **Service Layer Pattern**: API abstraction and error handling
- **Component Architecture**: Clean separation of UI and business logic
- **Error Boundary Patterns**: Comprehensive error handling strategies
- **Modern CSS**: Utility-first styling with Tailwind CSS
- **React Router**: Client-side routing with URL parameters

## 🚨 Troubleshooting

### Rate Limiting (HTTP 429)
If you encounter "Too Many Requests" errors:
1. **Wait 2-3 minutes** before trying again
2. **Use the retry button** - it includes automatic rate limiting
3. **Try different categories** - some may be less busy

### Development Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Restart development server
npm run dev
```
