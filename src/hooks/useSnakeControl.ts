import { useEffect } from "react";
import { Coord } from "@/types/snake"; 

type Props = {
  updateDirection: (dir: Coord) => void;
  resetGame: () => void;
  navigateHome: () => void;
};

export function useSnakeKeyboardControl({ updateDirection, resetGame, navigateHome }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          updateDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          updateDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          updateDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          updateDirection({ x: 1, y: 0 });
          break;
        case "F3":
          e.preventDefault();
          navigateHome();
          break;
        case "F12":
          e.preventDefault();
          resetGame();
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [updateDirection, resetGame, navigateHome]);
}
