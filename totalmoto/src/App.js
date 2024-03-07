import React from 'react';
import './App.css';
import NavBar from './components/NavBar/navBar';
import { Home } from './components/Home/home';
import {  Productos } from './components/Productos/productos';
import { Nosotros } from './components/Nosotros/nosotros';
import AgregarProducto from './components/AgregarProducto/agregarproducto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/productos" element={<Productos />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route path="/" element={<AgregarProducto />} Productos/> {/* Ruta para CrearProducto */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;