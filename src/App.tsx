import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { HomePage, ActivePage, CompletedPage } from './pages';
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
