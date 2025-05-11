import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IndexIntro() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      navigate("/home");
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center text-xl text-center p-4">
      {step === 0 && <p>⏳ Initialisation du terminal...</p>}
      {step === 1 && <p>🔒 Connexion sécurisée à IBM i...</p>}
      {step === 2 && <p>📂 Chargement de l’environnement utilisateur...</p>}
      {step >= 3 && <p>✅ Système prêt. Chargement du menu...</p>}

      <p className="mt-4 text-sm text-green-400 italic">Veuillez patienter...</p>
    </div>
  );
}
