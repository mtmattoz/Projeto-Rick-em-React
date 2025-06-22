import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com"; // Garanta que esta biblioteca esteja instalada!

const SERVICE_ID = "service_luqnkbv";
const TEMPLATE_ID = "template_fvel4hj";
const USER_ID = "3FzkE4FlUgKmq3F9L";

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail"); // ✅ Pega direto do localStorage
    if (!userEmail) {
      console.log("[RouteTracker] Nenhum e‑mail encontrado no localStorage.");
      return;
    }

    const templateParams = {
      from_email: userEmail,
      message: `Você acessou a rota ${location.pathname} em ${new Date().toLocaleString()}`
    };
    
    console.log("[RouteTracker] Disparando e‑mail para:", userEmail);
    console.log("[RouteTracker] Dados:", templateParams);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log("[RouteTracker] ✅ E‑mail enviado:", response.status, response.text);
      })
      .catch((err) => {
        console.error("[RouteTracker] ❌ Erro ao enviar e‑mail:", err);
      });
  }, [location]);

  return null;
}

export default RouteTracker;
