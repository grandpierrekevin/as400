import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAS400KeyboardNav } from "@/hooks/useAS400KeyboardNav";
import { useMemoryGame } from "@/hooks/useMemoryGame";
import MemoryPrompt from "@/components/memory/MemoryPrompt";
import MemoryResult from "@/components/memory/MemoryResult";
import FooterNavigation from "@/components/FooterNavigation";

export default function MemoryPage() {
  const navigate = useNavigate();
  const { sequence, visible, input, result, handleInput, initGame } = useMemoryGame();

  useAS400KeyboardNav({
    onF3: () => navigate("/home"),
    onF12: initGame,
  });

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono text-center flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">🧠 Memory ASCII</h1>

      {result ? (
        <MemoryResult result={result} sequence={sequence} />
      ) : (
        <MemoryPrompt
          visible={visible}
          sequence={sequence}
          input={input}
          onInput={handleInput}
        />
      )}

      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-1 border border-green-500 hover:bg-green-500 hover:text-black transition"
      >
        Rejouer
      </button>

      <FooterNavigation />
    </div>
  );
}
