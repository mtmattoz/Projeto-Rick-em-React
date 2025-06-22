import React, { useState } from "react";
import ReactLogo from "./assets/react-logo.png";
import MortyIcon from "./assets/morty-icon.png";
import emailjs from '@emailjs/browser';

const Sobre = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_luqnkbv",
        "template_fvel4hj",
        {
          user_name: name,
          from_email: email,
          message: mensagem,
        },
        "3FzkE4FlUgKmq3F9L"
      )
      .then(
        (response) => {
          alert("Mensagem enviada com sucesso!");
          setEnviado(true);
          setName("");
          setEmail("");
          setMensagem("");
        },
        (error) => {
          alert("Erro ao enviar mensagem. Por favor, tente novamente.");
          console.error(error);
        }
      );
  };

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
          Fizemos esse projeto em React para praticar e entender melhor como consumir dados de uma API. Usamos a API do Rick and Morty para mostrar as listas de personagens, 
          episódios e locais da série. Dá pra ver nome, status, episódio, data de lançamento e detalhes de cada lugar. Organizamos tudo com o React Router para navegar entre 
          as páginas e usamos o Axios para buscar as informações direto da API. A ideia foi montar algo simples, mas que funcionasse direito e tivesse uma cara parecida com 
          o clima de Rick and Morty. Foi uma boa prática para melhorar nossas habilidades em React, trabalhar com componentes e mexer com integração de dados.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={cardTitle}>Tecnologias Utilizadas</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
              width: "200px",
              height: "200px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 10px #39ff14)",
            }}
          />
        </div>
      </div>

      <div style={cardStyle}>
        <h2 style={cardTitle}>Contato por E‑mail</h2>
        {enviado ? (
          <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#39ff14" }}>
            Sua mensagem foi enviada com sucesso!
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>
              Nome:
              <input
                style={inputStyle}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label style={labelStyle}>
              E‑mail:
              <input
                style={inputStyle}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label style={labelStyle}>
              Mensagem:
              <textarea
                style={textAreaStyle}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              />
            </label>
            <button style={submitButtonStyle} type="submit">
              Enviar
            </button>
          </form>
        )}
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

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "500px",
  margin: "0 auto",
};

const labelStyle = {
  fontSize: "1.1rem",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #00ffcc",
  backgroundColor: "#1c1c2e",
  color: "#aaffcc",
  width: "100%",
  boxSizing: "border-box",
};

const textAreaStyle = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #00ffcc",
  backgroundColor: "#1c1c2e",
  color: "#aaffcc",
  minHeight: "100px",
  width: "100%",
  boxSizing: "border-box",
};

const submitButtonStyle = {
  padding: "12px",
  fontSize: "1.1rem",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#00ffcc",
  color: "#1c1c2e",
  fontWeight: "bold",
  boxShadow: "0 0 8px #00ffcc",
};

export default Sobre;
