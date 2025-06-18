import React from "react";

const Sobre = () => {
  return (
    <div
      style={{
        backgroundColor: "#0b0c10",
        minHeight: "100vh",
        color: "#66fcf1",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem 3rem",
        textShadow: "1px 1px 8px #000",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <section
        style={{
          backgroundColor: "#1e1e2f",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 0 15px #45a29e",
        }}
      >
        <h2
          style={{
            marginBottom: "12px",
            textShadow: "0 0 10px #45a29e",
          }}
        >
          Sobre o Projeto
        </h2>
        <p style={{ lineHeight: "1.6" }}>
          Este projeto é uma aplicação React que consome a API do Rick and Morty,
          permitindo a navegação pelos personagens, episódios e outras informações
          do universo da série.
        </p>
      </section>

      <section
        style={{
          backgroundColor: "#1e1e2f",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 0 15px #45a29e",
        }}
      >
        <h2
          style={{
            marginBottom: "12px",
            textShadow: "0 0 10px #45a29e",
          }}
        >
          Tecnologias Utilizadas
        </h2>
        <ul style={{ lineHeight: "1.6", paddingLeft: "1.5rem" }}>
          <li>React</li>
          <li>Axios</li>
          <li>React Router</li>
          <li>CSS-in-JS (estilos inline)</li>
          <li>API Rick and Morty</li>
        </ul>
      </section>

      <section
        style={{
          backgroundColor: "#1e1e2f",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 0 15px #45a29e",
        }}
      >
        <h2
          style={{
            marginBottom: "12px",
            textShadow: "0 0 10px #45a29e",
          }}
        >
          Sobre a Dupla
        </h2>
        <p style={{ lineHeight: "1.6" }}>
          Somos dois desenvolvedores web e fãs da série Rick and Morty.
          Este projeto foi feito com muito empenho para unir diversão e aprendizado.
        </p>
      </section>

      <section
        style={{
          backgroundColor: "#1e1e2f",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 0 15px #45a29e",
        }}
      >
        <h2
          style={{
            marginBottom: "12px",
            textShadow: "0 0 10px #45a29e",
          }}
        >
          Redes Sociais
        </h2>
        <ul style={{ lineHeight: "1.6", paddingLeft: "1.5rem" }}>
          <li>
            <strong>Mateus:</strong>{" "}
            <a
              href="https://github.com/seuGitMateus"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#66fcf1", textDecoration: "underline" }}
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/seuLinkedinMateus"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#66fcf1", textDecoration: "underline" }}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <strong>Seu Parceiro:</strong>{" "}
            <a
              href="https://github.com/seuGitParceiro"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#66fcf1", textDecoration: "underline" }}
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/seuLinkedinParceiro"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#66fcf1", textDecoration: "underline" }}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sobre;
