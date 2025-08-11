import Home from './pages/home';
import PrivacyPolicies from './pages/privacy-policies';
import Terms from './pages/terms';
import './styles/global.css';
import './styles/theme.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pdf/politica-de-privacidade' element={<PrivacyPolicies />} />
      <Route path='/pdf/termos-de-servico' element={<Terms />} />
    </Routes>
  );
}

export default App;
