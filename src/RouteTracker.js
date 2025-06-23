import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_g9o96dl';
const TEMPLATE_ID = 'template_o4e4cz9';
const USER_ID = 'nUPVm_K_diUSz8nb7';

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
   
    const routesToNotify = ['/mapa', '/episodios', '/personagens', '/sobre'];

    if (!routesToNotify.includes(location.pathname.toLowerCase())) {
      return;
    }

    const templateParams = {
      name: 'Visitante',
      message: `A rota ${location.pathname} foi acessada em ${new Date().toLocaleString()}`
    };
    
    console.log("[RouteTracker] Disparando e‑mail para: Visitante");
    console.log("[RouteTracker] Dados:", templateParams);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log("[RouteTracker]  E‑mail enviado:", response.status, response.text);
      })
      .catch((err) => {
        console.error("[RouteTracker]  Erro ao enviar e‑mail:", err);
      });
  }, [location]);

  return null;
}

export default RouteTracker;
