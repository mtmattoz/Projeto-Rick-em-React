import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function Personagens() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonagens(data.results));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Personagens de Rick and Morty</h2>
      <Row>
        {personagens.map((personagem) => (
          <Col key={personagem.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={personagem.image} />
              <Card.Body>
                <Card.Title>{personagem.name}</Card.Title>
                <Card.Text>
                  <strong>Status:</strong> {personagem.status}<br />
                  <strong>Espécie:</strong> {personagem.species}<br />
                  <strong>Origem:</strong> {personagem.origin.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Personagens;
