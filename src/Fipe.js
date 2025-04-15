// src/components/DDDService.js
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const DDDService = () => {
  const [ddd, setDdd] = useState('');
  const [data, setData] = useState(null);
  const [erro, setErro] = useState('');

  const buscarDDD = async () => {
    try {
      const response = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
      setData(response.data);
      setErro('');
    } catch (err) {
      setErro('DDD inválido ou erro na requisição.');
      setData(null);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Consulta por DDD</h3>
      <Form.Group>
        <Form.Label>Digite o DDD:</Form.Label>
        <Form.Control
          type="text"
          value={ddd}
          onChange={(e) => setDdd(e.target.value)}
        />
      </Form.Group>
      <Button className="mt-2" onClick={buscarDDD}>Buscar</Button>

      {erro && <Alert variant="danger" className="mt-3">{erro}</Alert>}
      {data && (
        <pre className="mt-3 bg-light p-3 border rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default DDDService;
