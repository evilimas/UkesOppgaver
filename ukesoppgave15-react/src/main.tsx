import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.tsx';
import QuizDetail from './QuizDetail.tsx';
import { quizzes } from './data/quizzes.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz/:id" element={<QuizDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
