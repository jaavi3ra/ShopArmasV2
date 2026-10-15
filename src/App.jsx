import './App.css';
import './styles/global.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/organism/header';
import { Footer } from './components/organism/footer';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Stash } from './pages/stash';
import { Product } from './pages/product';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stash" element={<Stash />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;