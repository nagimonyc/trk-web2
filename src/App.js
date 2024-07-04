import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Membership from './Membership';
import { AuthProvider } from './AuthContext';


function App() {
  // console.log('App component mounted');
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/membership" element={<Membership />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
