import { useEffect, useState } from "react";

export function useMemoryGame(length = 5, timeout = 3000) {
  const [sequence, setSequence] = useState("");
  const [visible, setVisible] = useState(true);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"win" | "lose" | null>(null);

  const generateSequence = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  const initGame = () => {
    const seq = generateSequence();
    setSequence(seq);
    setVisible(true);
    setInput("");
    setResult(null);

    const timer = setTimeout(() => {
      setVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const cleanup = initGame();
    return () => cleanup();
  }, []);

  const handleInput = (val: string) => {
    const upper = val.toUpperCase();
    setInput(upper);
    if (upper.length === sequence.length) {
      setResult(upper === sequence ? "win" : "lose");
    }
  };

  return {
    sequence,
    visible,
    input,
    result,
    handleInput,
    initGame,
  };
}
