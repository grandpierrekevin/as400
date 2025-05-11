type BreakCodeInputProps = {
  guess: string;
  setGuess: (val: string) => void;
  submit: () => void;
  disabled: boolean;
};

export function BreakCodeInput({ guess, setGuess, submit, disabled }: BreakCodeInputProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="flex space-x-2"
    >
      <span>==&gt;</span>
      <input
        type="text"
        maxLength={4}
        inputMode="numeric"
        value={guess}
        onChange={(e) => setGuess(e.target.value.replace(/[^0-9]/g, ""))}
        className="bg-black border-b border-green-500 text-green-500 outline-none w-24 text-center"
        disabled={disabled}
      />
      <button
        type="submit"
        className="border border-green-500 px-2 hover:bg-green-500 hover:text-black"
        disabled={disabled}
      >
        OK
      </button>
    </form>
  );
}
