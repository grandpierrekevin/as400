import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAS400KeyboardNav } from "@/hooks/useAS400KeyboardNav";
import { useAvailableRoutes } from "@/hooks/useAvailableRoutes";
import { useMenuCommandRouter } from "@/hooks/useMenuCommandRouter";
import CommandLineInput from "@/components/home/CommandLineInput";
import HomeMenuOptions from "@/components/home/HomeMenuOptions";
import FooterNavigation from "@/components/FooterNavigation";

export default function HomePage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const routes = useAvailableRoutes();
  const execute = useMenuCommandRouter(routes);

  useAS400KeyboardNav({
    onF3: () => alert("F3 = Quitter l'application"),
    onF12: () => navigate(-1),
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 text-sm flex flex-col">
      
      <div className="flex-1 flex flex-col justify-center text-center mt-20">
        <h1 className="text-lg font-bold mb-2">Menu principal</h1>
        <p>Sélectionnez une option :</p>
        <HomeMenuOptions routes={routes} />
      </div>


      <CommandLineInput onCommand={execute} inputRef={inputRef} />

      <FooterNavigation />
    </div>
  );
}
