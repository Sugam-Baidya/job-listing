import type { Job } from "@/assets/mockData";
import { Briefcase} from "lucide-react";
import JobDetailsModal from "./JobDetailsModal";
import { useState } from "react";
import SuccessToast from "./SuccessToast";
import JobCard from "./JobCard";

interface JobListProps {
  jobList: Job[];
  selectedJob: Job | null;
  setSelectedJob: (job: Job | null) => void;
}

const JobList = ({ jobList, selectedJob, setSelectedJob }: JobListProps) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleApply = () => {
    setSelectedJob(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.map((job) => (
          <JobCard job={job} setSelectedJob={setSelectedJob} />
        ))}
      </div>
      {/* No Results */}
      {jobList.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">
            No jobs found matching your search
          </p>
          <p className="text-gray-400 mt-2">
            Try adjusting your search criteria
          </p>
        </div>
      )}

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetailsModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onApply={handleApply}
        />
      )}

      {/* Success Toast */}
      {showSuccess && <SuccessToast />}
    </div>
  );
};

export default JobList;
