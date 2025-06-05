import { BrowserRouter as Router, Routes, Route, useSearchParams, useNavigate } from 'react-router-dom';
import { StartPage } from './components/StartPage';
import { QuizPage } from './components/QuizPage';

// Wrapper component for StartPage to handle navigation
const StartPageWrapper = () => {
  const navigate = useNavigate();
  
  const handleCategorySelect = (categoryId: number) => {
    navigate(`/quiz?category=${categoryId}`);
  };

  return <StartPage onCategorySelect={handleCategorySelect} />;
};

// Wrapper component for QuizPage to handle parameters
const QuizPageWrapper = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryId = parseInt(searchParams.get('category') || '9');

  const handleQuizComplete = () => {
    navigate('/');
  };

  return <QuizPage categoryId={categoryId} onQuizComplete={handleQuizComplete} />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Routes>
          <Route path="/" element={<StartPageWrapper />} />
          <Route path="/quiz" element={<QuizPageWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
