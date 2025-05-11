import { useState } from "react";
import { Job } from "@/types/jobs"


const STATUSES = ["MSGW", "RUN", "DEQW", "DSPW"];
const TYPES = ["BATCH", "INTERACTIVE"];

function generateFakeJobs(): Job[] {
  return Array.from({ length: 30 }, (_, i) => ({
    name: `JOB${1000 + i}`,
    user: `USER${i % 5}`,
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
    type: TYPES[Math.floor(Math.random() * TYPES.length)],
    cpu: Math.floor(Math.random() * 100),
    function: `PGM${i % 10}`,
    memory: Math.floor(Math.random() * 500) + 100,
    threadCount: Math.floor(Math.random() * 10) + 1,
  }));
}

export function useActiveJobs() {
  const [jobs, setJobs] = useState<Job[]>(generateFakeJobs());
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const refreshJobs = () => {
    setJobs(generateFakeJobs());
    setSelectedJob(null);
  };

  const selectJob = (job: Job) => {
    setSelectedJob(job);
  };

  const clearSelection = () => setSelectedJob(null);

  return {
    jobs,
    selectedJob,
    refreshJobs,
    selectJob,
    clearSelection,
  };
}
