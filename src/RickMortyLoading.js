import React from 'react';
import './RickMortyLoading.css';

const RickMortyLoading = () => {
  return (
    <div className="loading-container">
      <img src="/rick-loading.gif" alt="Carregando Rick and Morty" className="rick-gif" />
      <div className="loading-text">Carregando dimensões...</div>
    </div>
  );
};

export default RickMortyLoading;
