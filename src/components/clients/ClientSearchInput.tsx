type ClientSearchInputProps = {
    value: string;
    onChange: (value: string) => void;
  };
  
  export default function ClientSearchInput({ value, onChange }: ClientSearchInputProps) {
    return (
      <div className="mb-4">
        <label className="block mb-1">Recherche client :</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-black border-b border-green-500 text-green-500 outline-none w-96"
          placeholder="Nom du client"
          autoFocus
        />
      </div>
    );
  }
  