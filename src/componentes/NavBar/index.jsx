// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./style.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="nav-logo" src="src/assets/Ativo 7.png" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Página Inicial</a>
        <a href="/about">Catálogo</a>
        <a href="/service">Meus Cursos</a>
        <a href="/contact">Fórum</a>
        <a href="#">Favoritos</a>
        <a href="#">Planos</a>
        <a href="#">Perfil</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
