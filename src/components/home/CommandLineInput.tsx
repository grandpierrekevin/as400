import { RefObject, useState } from "react";

type CommandLineInputProps = {
  onCommand: (cmd: string) => void;
  inputRef?: RefObject<HTMLInputElement | null>; // ✅ ici
};

export default function CommandLineInput({ onCommand, inputRef }: CommandLineInputProps) {
  const [command, setCommand] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onCommand(command);
      setCommand("");
    }
  };

  return (
    <div className="border-t border-green-500 pt-2">
      <span className="inline-block w-32">==&gt;</span>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        className="bg-black border-b border-green-500 text-green-500 outline-none w-64 mb-10"
        placeholder="Entrez une option (ex: 1)"
      />
    </div>
  );
}
