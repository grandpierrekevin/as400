type MemoryResultProps = {
    result: "win" | "lose";
    sequence: string;
  };
  
  export default function MemoryResult({ result, sequence }: MemoryResultProps) {
    return result === "win" ? (
      <p className="text-xl text-green-400">✅ Bravo, tu as bien retenu !</p>
    ) : (
      <p className="text-xl text-red-500">❌ Mauvais ! La séquence était : {sequence}</p>
    );
  }
  