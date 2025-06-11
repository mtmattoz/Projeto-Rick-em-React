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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Episódios de Rick and Morty</h1>

      {carregando ? (
        <p className="text-center">Carregando episódios...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {episodios.map((ep) => (
            <div key={ep.id} className="bg-white rounded-lg shadow p-4 border">
              <h2 className="text-xl font-semibold">{ep.name}</h2>
              <p><strong>Episódio:</strong> {ep.episode}</p>
              <p><strong>Data de Lançamento:</strong> {ep.air_date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Episodios;