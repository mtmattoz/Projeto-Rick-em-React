import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Localizacao = () => {
  const [localizacoes, setLocalizacoes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarLocalizacoes = async () => {
      try {
        const resposta = await axios.get('https://rickandmortyapi.com/api/location');
        setLocalizacoes(resposta.data.results);
      } catch (erro) {
        console.error('Erro ao buscar localizações:', erro);
      } finally {
        setCarregando(false);
      }
    };

    buscarLocalizacoes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Localizações do Rick and Morty</h1>

      {carregando ? (
        <p className="text-center">Carregando localizações...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {localizacoes.map((loc) => (
            <div key={loc.id} className="bg-white rounded-lg shadow p-4 border">
              <h2 className="text-xl font-semibold">{loc.name}</h2>
              <p><strong>Tipo:</strong> {loc.type}</p>
              <p><strong>Dimensão:</strong> {loc.dimension}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Localizacao;
