// src/components/IBGEService.js
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const IBGEService = () => {
  const [uf, setUf] = useState('');
  const [data, setData] = useState(null);
  const [erro, setErro] = useState('');

  const buscarMunicipios = async () => {
    try {
      const response = await axios.get(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`);
      setData(response.data);
      setErro('');
    } catch (err) {
      setErro('UF inválida ou erro na requisição.');
      setData(null);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Municípios por UF</h3>
      <Form.Group>
        <Form.Label>Digite a sigla do estado (ex: SP):</Form.Label>
        <Form.Control
          type="text"
          value={uf}
          onChange={(e) => setUf(e.target.value.toUpperCase())}
        />
      </Form.Group>
      <Button className="mt-2" onClick={buscarMunicipios}>Buscar</Button>

      {erro && <Alert variant="danger" className="mt-3">{erro}</Alert>}
      {data && (
        <pre className="mt-3 bg-light p-3 border rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default IBGEService;
