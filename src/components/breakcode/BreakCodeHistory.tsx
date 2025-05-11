type BreakCodeHistoryProps = {
  history: string[];
};

export function BreakCodeHistory({ history }: BreakCodeHistoryProps) {
  return (
    <div className="h-48 overflow-auto mb-2">
      {history.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}
