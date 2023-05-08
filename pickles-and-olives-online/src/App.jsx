import { Routes, Route } from 'react-router-dom';
import '../src/index.css';
import HomePage from './pages/HomePage';
import CaesarCipherPage from './pages/CaesarCipherPage';
import MemeGeneratorPage from './pages/MemeGeneratorPage';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/caesar-cipher' element={<CaesarCipherPage />} />
        <Route path='/memes' element={<MemeGeneratorPage />} />
      </Routes>
    </>
  )
}

export default App
