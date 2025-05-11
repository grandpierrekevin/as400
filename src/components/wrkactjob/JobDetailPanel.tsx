import { Job } from "@/hooks/useActiveJobs";
import { useState } from "react";

type JobDetailPanelProps = {
  job: Job;
  onClose: () => void;
};

export default function JobDetailPanel({ job, onClose }: JobDetailPanelProps) {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const submitResponse = (e: React.FormEvent) => {
    e.preventDefault();
    const r = response.trim().toUpperCase();
    const valid = ["G", "R", "RR", "D", "C"];
    if (!valid.includes(r)) {
      setError("❌ Réponse invalide. Codes valides : G, R, RR, D, C");
      return;
    }
    alert(`✅ Réponse \"${r}\" envoyée au job ${job.name}`);
    onClose();
  };

  return (
    <div
      className="absolute top-8 right-8 bg-black border border-green-500 p-4 w-96 shadow-xl cursor-pointer"
      onClick={onClose}
    >
      <h2 className="text-lg font-bold mb-2">Détail du job : {job.name}</h2>
      <ul className="space-y-1 text-sm mb-3">
        <li><strong>Utilisateur :</strong> {job.user}</li>
        <li><strong>Statut :</strong> {job.status}</li>
        <li><strong>Type :</strong> {job.type}</li>
        <li><strong>% CPU :</strong> {job.cpu}</li>
        <li><strong>Programme :</strong> {job.function}</li>
        <li><strong>Threads :</strong> {job.threadCount}</li>
        <li><strong>Pool mémoire :</strong> {job.memory} Mo</li>
      </ul>

      {job.status === "MSGW" && (
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={submitResponse}
          className="space-y-2"
        >
          <label className="block text-sm">Répondre au message :</label>
          <input
            type="text"
            required
            maxLength={2}
            className="w-full bg-black border-b border-green-500 text-green-500 outline-none uppercase"
            value={response}
            onChange={(e) => setResponse(e.target.value.toUpperCase())}
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            className="border border-green-500 px-2 py-1 hover:bg-green-500 hover:text-black"
          >
            Répondre
          </button>
        </form>
      )}
    </div>
  );
}
