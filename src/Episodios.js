import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Episodios = () => {
  const [episodios, setEpisodios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarEpisodios = async () => {
      try {
        const resposta = await axios.get('https://rickandmortyapi.com/api/episode');
        setEpisodios(resposta.data.results);
      } catch (erro) {
        console.error('Erro ao buscar episódios:', erro);
      } finally {
        setCarregando(false);
      }
    };

    buscarEpisodios();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#1e1e2f',
        minHeight: '100vh',
        color: '#fff',
        padding: '20px 40px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1
          style={{
            display: 'inline-block',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#fff', 
            textShadow: '0 0 8px #fff',
            backgroundColor: '#000',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.7)',
            margin: 0,
          }}
        >
          Episódios de Rick and Morty
        </h1>
      </div>

      {carregando ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Carregando episódios...</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
          }}
        >
          {episodios.map((ep) => (
            <div
              key={ep.id}
              style={{
                backgroundColor: '#2e2e3f',
                borderRadius: '10px',
                padding: '15px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <h2
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '10px',
                  color: '#fff',
                  textShadow: '0 0 5px #fff',
                }}
              >
                {ep.name}
              </h2>
              <p style={{ marginBottom: '6px', fontWeight: '500', color: '#bbb' }}>
                <strong>Episódio:</strong> {ep.episode}
              </p>
              <p style={{ fontWeight: '500', color: '#bbb' }}>
                <strong>Data de Lançamento:</strong> {ep.air_date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Episodios;
