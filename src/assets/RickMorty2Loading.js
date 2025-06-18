// src/RickMorty2Loading.js
import React from 'react';
import './RickMortyLoading.css';

const RickMorty2Loading = () => {
  return (
    <div className="loading-container">
      <img src="/morty-dancing.gif" alt="Morty dançando enquanto carrega" className="rick-gif" />
      <div className="loading-text">Morty está preparando a próxima dimensão...</div>
    </div>
  );
};

export default RickMorty2Loading;
