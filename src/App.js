import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>E-commerce App</h1>
        </header>
        <main className="container">
          <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/" element={<ProductList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
