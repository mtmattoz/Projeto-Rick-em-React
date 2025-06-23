import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import bgImage from './assets/rick.webp';
import emailjs from '@emailjs/browser';

function Login(props) {
  const [form, setForm] = useState({ login: "", senha: "", email: "" });
  const navigate = useNavigate();

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const hanldeSubmitForm = (event) => {
    event.preventDefault();

    if (form.login === "mateus" && form.senha === "123") {
      alert("Logado com sucesso!");
      localStorage.setItem("auth", "true");
      localStorage.setItem("userEmail", form.email);

      const templateParams = {
        user_name: form.login,
        from_email: form.email,
        message: ` "${form.login}" acabou de fazer login.`,
      };

      emailjs
        .send(
          "service_luqnkbv",
          "template_fvel4hj",
          templateParams,
          "3FzkE4FlUgKmq3F9L"
          
        )
        .then(() => {
          console.log("E-mail de login enviado!");
        })
        .catch((error) => {
          console.error("Erro ao enviar e-mail de login:", error);
        });

      navigate("/Personagens");
    } else {
      alert("Usuário e senha inválidos!");
    }
  };

  if (props.menu === "0") {
    return <h1> Sem acesso a essa pagina.... </h1>;
  } else {
    return (
      <div
        className="login-container"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <h1 className="portal-title text-center">
          Portal de Acesso Interdimensional
        </h1>

        <Form className="login-form" onSubmit={hanldeSubmitForm}>
          <Form.Group className="mb-3">
            <Form.Label>Login</Form.Label>
            <Form.Control
              onChange={handleChangeForm}
              value={form.login}
              type="text"
              placeholder="Entre com login"
              name="login"
            />
            <Form.Text className="text-muted">Digite seu login...</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              onChange={handleChangeForm}
              value={form.senha}
              type="password"
              placeholder="Senha"
              name="senha"
            />
            <Form.Text className="text-muted">Digite sua senha...</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email para rastreamento</Form.Label>
            <Form.Control
              onChange={handleChangeForm}
              value={form.email}
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <Form.Text className="text-muted">
              Informe seu e‑mail para receber alertas de navegação
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Logar
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
