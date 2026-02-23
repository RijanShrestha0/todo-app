import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage';
import { ActivePage } from './pages/ActivePage';
import { CompletedPage } from './pages/CompletedPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="active" element={<ActivePage />} />
          <Route path="completed" element={<CompletedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
