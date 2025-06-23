import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_g9o96dl";
const TEMPLATE_ID = "template_o4e4cz9";
const USER_ID = "nUPVm_K_diUSz8nb7";

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    const routeMap = {
      "/localizacao": "Mapa",
      "/episodios": "Episódios",
      "/personagens": "Personagens",
      "/sobre": "Sobre",
    };

    const currentPath = location.pathname.toLowerCase();
    const routeName = routeMap[currentPath];

    if (!routeName) return;

    const storageKey = `emailSent:${currentPath}`;
    if (sessionStorage.getItem(storageKey) === "true") {
      return;
    }

    sessionStorage.setItem(storageKey, "true");

    const templateParams = {
      name: "Visitante",
      message: `A rota ${routeName} (${location.pathname}) foi acessada em ${new Date().toLocaleString()}`
    };

    console.log("[RouteTracker] Enviando e‑mail para:", currentPath);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log("[RouteTracker] E‑mail enviado com sucesso:", response.status, response.text);
      })
      .catch((err) => {
        console.error("[RouteTracker] Erro ao enviar e‑mail:", err);
      });
  }, [location]);

  return null;
}

export default RouteTracker;
