import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Membership from './Membership';
import { AuthProvider } from './AuthContext';
import Membership2 from './Membership2';
import ScrollToTop from './components/ScrollToTop';


function App() {
  // console.log('App component mounted');
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/join" element={<Membership />} />
          <Route path="/membership" element={<Membership2 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
