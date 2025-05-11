import { useNavigate } from "react-router-dom";
import { useAS400KeyboardNav } from "@/hooks/useAS400KeyboardNav";
import { useBreakCodeGame } from "@/hooks/useBreakCodeGame";
import { BreakCodeHistory } from "@/components/breakcode/BreakCodeHistory";
import { BreakCodeInput } from "@/components/breakcode/BreakCodeInput";
import FooterNavigation from "@/components/FooterNavigation";

export default function BreakCodePage() {
  const navigate = useNavigate();
  const {
    guess,
    setGuess,
    submit,
    history,
    result,
    tries,
    restart,
  } = useBreakCodeGame();

  useAS400KeyboardNav({
    onF3: () => navigate("/home"),
    onF12: restart,
  });

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono text-sm flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-2">🔐 Break the Code</h1>
      <p className="italic mb-4">Trouve le code secret à 4 chiffres</p>

      <div className="w-full max-w-md bg-black border border-green-500 p-4">
        <BreakCodeHistory history={history} />

        {result ? (
          <p className={`text-xl ${result === "win" ? "text-green-400" : "text-red-500"} mt-2`}>
            {result === "win" ? "🎉 Bravo, tu as réussi !" : "❌ Échec. Partie terminée."}
          </p>
        ) : (
          <BreakCodeInput
            guess={guess}
            setGuess={setGuess}
            submit={submit}
            disabled={!!result}
          />
        )}

        <p className="text-xs italic mt-2">Essai {tries} / 10</p>

        <button
          onClick={restart}
          className="mt-4 px-4 py-1 border border-green-500 hover:bg-green-500 hover:text-black transition"
        >
          Rejouer
        </button>
      </div>
      <FooterNavigation />
    </div>
  );
}
