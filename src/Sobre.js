import React from "react";
import ReactLogo from "./assets/react-logo.png";
import MortyIcon from "./assets/morty-icon.png";

const Sobre = () => {
  const integrantes = [
    {
      nome: "Mateus de Mattos",
      github: "https://github.com/mtmattoz",
      whatsapp: "(32) 98865-3876",
    },
    {
      nome: "Lucas Diniz",
      github: "https://github.com/Lucasdinis2",
      whatsapp: "(32) 98512-5335",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #0f0f1b, #1c1c2e)",
        minHeight: "100vh",
        color: "#aaffcc",
        padding: "30px 5vw",
        fontFamily: "'Orbitron', 'Segoe UI', sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          backgroundColor: "transparent",
          color: "#7df9ff",
          marginBottom: "40px",
          textShadow: "2px 2px #00ffcc",
        }}
      >
        Sobre o Projeto Rick & Morty
      </h1>

      <div style={cardStyle}>
        <h2 style={cardTitle}>Descrição</h2>
        <p style={cardText}>
          Esse projeto foi desenvolvido usando <strong>React</strong> e a{" "}
          <strong>API oficial de Rick and Morty</strong>. Ele exibe
          personagens, episódios e localizações do multiverso, tudo com uma
          pegada futurista e estilizada. A ideia é colocar em prática o consumo
          de APIs, roteamento e componentização moderna.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={cardTitle}>Tecnologias Utilizadas</h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "1.1rem",
              color: "#aaffcc",
              marginRight: "20px",
            }}
          >
            <li>React</li>
            <li>React Router DOM</li>
            <li>Axios</li>
            <li>API Rick and Morty</li>
            <li>React-Bootstrap</li>
          </ul>
          <img
            src={ReactLogo}
            alt="React Logo"
            style={{
              width: "200px",
              height: "auto",
              filter: "drop-shadow(0 0 10px #00ffcc)",
            }}
          />
        </div>
      </div>

      <div style={cardStyle}>
        <h2 style={cardTitle}>Integrantes</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              flex: 1,
            }}
          >
            {integrantes.map((int, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#202030",
                  border: "2px solid #39ff14",
                  borderRadius: "10px",
                  padding: "15px",
                  boxShadow: "0 0 15px #39ff14aa",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "8px",
                  minHeight: "140px",
                  color: "#fff",
                }}
              >
                <h3 style={{ marginBottom: "8px" }}>{int.nome}</h3>
                <p style={{ margin: 0, whiteSpace: "nowrap" }}>
                  <strong>GitHub: </strong>
                  <a
                    href={int.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#00ffe0",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {int.github.replace("https://", "")}
                  </a>
                </p>
                <p style={{ margin: 0, whiteSpace: "nowrap", marginTop: "5px" }}>
                  <strong>WhatsApp: </strong> {int.whatsapp}
                </p>
              </div>
            ))}
          </div>

          <img
            src={MortyIcon}
            alt="Morty Icon"
            style={{
              width: "200px 80%",
              height: "200px 80%",
              objectFit: "contain",
              filter: "drop-shadow(0 0 10px #39ff14)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "#2c2c3c",
  border: "2px solid #00ffcc",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "30px",
  boxShadow: "0 0 12px #00ffcc88",
  width: "100%",
};

const cardTitle = {
  textAlign: "center",
  marginBottom: "15px",
  color: "#7df9ff",
  fontSize: "1.8rem",
  textShadow: "1px 1px #00ffc3",
};

const cardText = {
  fontSize: "1.1rem",
  lineHeight: "1.7",
  textAlign: "justify",
};

export default Sobre;
