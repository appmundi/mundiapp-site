import { PdfViewer } from './components/pdfViewer';
import Home from './pages/home';
import './styles/global.css';
import './styles/theme.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pdf/:file' element={<PdfViewer />} />
    </Routes>
  );
}

export default App;
