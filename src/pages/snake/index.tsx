import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SnakeCanvas from "@/components/snake/SnakeCanvas";
import { useSnakeGame } from "@/hooks/useSnakeGame";
import FooterNavigation from "@/components/FooterNavigation";
import { useSnakeKeyboardControl } from "@/hooks/useSnakeControl";

export default function SnakePage() {
  const navigate = useNavigate();
  const { snake, food, updateDirection, resetGame } = useSnakeGame();

  useSnakeKeyboardControl({
    updateDirection,
    resetGame,
    navigateHome: () => navigate("/home"),
  });

  return (
    <div className="bg-black text-green-500 font-mono text-sm min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">🐍 Snake - Mode AS/400</h1>
      <p className="italic">Utilise les flèches pour te déplacer. F3=Quitter, F12=Redémarrer</p>
      <SnakeCanvas snake={snake} food={food} />
      <FooterNavigation />
    </div>
  );
}
