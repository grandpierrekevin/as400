import { Job } from "@/hooks/useActiveJobs";

type ActiveJobsTableProps = {
  jobs: Job[];
  onSelect: (job: Job) => void;
};

export default function ActiveJobsTable({ jobs, onSelect }: ActiveJobsTableProps) {
  const getRowStyle = (job: Job) => {
    if (job.status === "MSGW") return "bg-red-800/50 text-white";
    if (job.cpu > 20) return "bg-yellow-700/30";
    return "";
  };

  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr className="border-b border-green-500">
          <th className="text-left p-2">Nom</th>
          <th className="text-left p-2">Utilisateur</th>
          <th className="text-left p-2">Statut</th>
          <th className="text-left p-2">% CPU</th>
          <th className="text-left p-2">Type</th>
          <th className="text-left p-2">Programme</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr
            key={job.name}
            className={`${getRowStyle(job)} hover:bg-green-800/10 cursor-pointer`}
            onClick={() => onSelect(job)}
          >
            <td className="p-2">{job.name}</td>
            <td className="p-2">{job.user}</td>
            <td className="p-2">{job.status}</td>
            <td className="p-2">{job.cpu}%</td>
            <td className="p-2">{job.type}</td>
            <td className="p-2">{job.function}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
