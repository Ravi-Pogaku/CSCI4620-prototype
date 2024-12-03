import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AIAssistant from './pages/AIAssistant';

function App() {
  const currentPath = window.location.pathname; // Get the current URL path

  const renderPage = () => {
    switch (currentPath) {
      case '/AIAssistant.jsx': // If the path is /AIAssistant.jsx, render AIAssistant
        return <AIAssistant />;
      default: // Default to Home for any other path
        return <Home />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
