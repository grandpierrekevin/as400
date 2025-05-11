import { useEffect, useState } from "react";

function generateCode(length = 4): string {
  const digits = "0123456789";
  return Array.from({ length }, () => digits[Math.floor(Math.random() * digits.length)]).join("");
}

function getFeedback(code: string, guess: string): string {
  return guess
    .split("")
    .map((digit, i) =>
      code[i] === digit ? "✓" : code.includes(digit) ? "~" : "✗"
    )
    .join(" ");
}

export function useBreakCodeGame(length = 4, maxTries = 10) {
  const [code, setCode] = useState("");
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [tries, setTries] = useState(0);
  const [result, setResult] = useState<"win" | "lose" | null>(null);

  useEffect(() => {
    setCode(generateCode(length));
  }, [length]);

  useEffect(() => {
    if (tries >= maxTries && result !== "win") {
      setResult("lose");
      setHistory((h) => [...h, `💥 Trop d'essais. Le code était : ${code}`]);
    }
  }, [tries, result, maxTries, code]);

  const submit = () => {
    if (guess.length !== length || result) return;
    setTries((t) => t + 1);

    if (guess === code) {
      setResult("win");
      setHistory((h) => [...h, `${guess} → ✅ Code trouvé !`]);
    } else {
      const feedback = getFeedback(code, guess);
      setHistory((h) => [...h, `${guess} → ${feedback}`]);
    }

    setGuess("");
  };

  const restart = () => {
    setCode(generateCode(length));
    setGuess("");
    setHistory([]);
    setTries(0);
    setResult(null);
  };

  return {
    guess,
    setGuess,
    submit,
    history,
    result,
    code,
    tries,
    restart,
  };
}
