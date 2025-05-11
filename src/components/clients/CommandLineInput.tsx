type CommandLineInputProps = {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (command: string) => void;
  };
  
  export default function CommandLineInput({ value, onChange, onSubmit }: CommandLineInputProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSubmit(value);
      }
    };
  
    return (
      <div className="border-t border-green-500 pt-2 mt-6 mb-10">
        <span className="inline-block w-32">==&gt;</span>
        <input
          type="text"
          placeholder="Entrez commande (ex: 1, CLIENTS)"
          className="bg-black border-b border-green-500 text-green-500 outline-none w-64"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }
  