import React from 'react';
import { Link } from 'react-router-dom';

const Erro404Rick = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#000',
        backgroundImage: 'url("/rick-404.png")',
        backgroundSize: '80%',
        backgroundPosition: 'center 40px',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#66fcf1',
        textShadow: '2px 2px 8px black',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        paddingBottom: '4rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '6rem',
          marginBottom: '0.5rem',
          backgroundColor: 'transparent',
          border: 'none',
          padding: 0,
          color: '#66fcf1',
          textShadow: '2px 2px 10px #000',
        }}
      >
        404
      </h1>
      <h2 style={{ marginBottom: '1rem' }}>
        Oops! Você entrou num portal errado...
      </h2>
      <p style={{ maxWidth: '500px', margin: '0 auto' }}>
        Essa dimensão não existe no multiverso de Rick and Morty. <br />
        Que tal voltar para a aventura?
      </p>
      <Link
        to="/personagens"
        style={{
          marginTop: '2rem',
          padding: '1rem 3rem',
          backgroundColor: '#45a29e',
          color: '#0b0c10',
          fontWeight: 'bold',
          textDecoration: 'none',
          borderRadius: '10px',
          boxShadow: '0 4px 10px #45a29e',
          transition: 'background-color 0.3s ease',
          fontSize: '1.2rem',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = '#66fcf1')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = '#45a29e')
        }
      >
        Voltar para o Menu Principal
      </Link>
    </div>
  );
};

export default Erro404Rick;
