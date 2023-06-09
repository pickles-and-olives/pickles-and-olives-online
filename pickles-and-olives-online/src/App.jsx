import { Routes, Route } from 'react-router-dom';
import '../src/index.css';
import HomePage from './pages/HomePage';
import CaesarCipherPage from './pages/CaesarCipherPage';
import MemeGeneratorPage from './pages/MemeGeneratorPage';
import AboutPage from './pages/AboutPage';
import GuessTheWordPage from './pages/GuessTheWordPage';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/caesar-cipher' element={<CaesarCipherPage />} />
        <Route path='/memes' element={<MemeGeneratorPage />} />
        <Route path='/guess-the-word' element={<GuessTheWordPage />} />
      </Routes>
    </>
  )
}

export default App
