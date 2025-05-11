import { useActiveJobs } from "@/hooks/useActiveJobs";
import { useAS400KeyboardNav } from "@/hooks/useAS400KeyboardNav";
import { useNavigate } from "react-router-dom";
import ActiveJobsTable from "@/components/wrkactjob/ActiveJobsTable";
import JobDetailPanel from "@/components/wrkactjob/JobDetailPanel";
import FooterNavigation from "@/components/FooterNavigation";

export default function WRKACTJOBPage() {
  const navigate = useNavigate();
  const {
    jobs,
    selectedJob,
    refreshJobs,
    selectJob,
    clearSelection,
  } = useActiveJobs();

  useAS400KeyboardNav({
    onF3: () => navigate("/home"),
    onF12: clearSelection,
  });

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 text-sm relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">📊 Supervision des Jobs Actifs (WRKACTJOB)</h1>
        <button
          onClick={refreshJobs}
          className="border border-green-500 px-4 py-1 hover:bg-green-500 hover:text-black transition"
        >
          🔄 Rafraîchir
        </button>
      </div>

      <ActiveJobsTable jobs={jobs} onSelect={selectJob} />


      {selectedJob && <JobDetailPanel job={selectedJob} onClose={clearSelection} />}
      <FooterNavigation />
    </div>
  );
}
