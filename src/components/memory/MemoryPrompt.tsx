type MemoryPromptProps = {
    visible: boolean;
    sequence: string;
    input: string;
    onInput: (value: string) => void;
  };
  
  export default function MemoryPrompt({ visible, sequence, input, onInput }: MemoryPromptProps) {
    return (
      <>
        {visible ? (
          <p className="text-3xl tracking-widest">{sequence}</p>
        ) : (
          <input
            autoFocus
            type="text"
            maxLength={sequence.length}
            value={input}
            onChange={(e) => onInput(e.target.value)}
            className="text-green-500 bg-black border-b border-green-500 text-center outline-none text-2xl tracking-widest"
          />
        )}
      </>
    );
  }
  