import type { Job } from "@/assets/mockData";
import { Briefcase, Building2, MapPin } from "lucide-react";
import JobDetailsModal from "./JobDetailsModal";
import { useState } from "react";
import SuccessToast from "./SuccessToast";

interface JobCardProps {
  jobList: Job[];
  selectedJob: Job | null;
  setSelectedJob: (job: Job | null) => void;
}

const JobCard = ({ jobList, selectedJob, setSelectedJob }: JobCardProps) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const getJobTypeBadgeColor = (jobType: string) => {
    switch (jobType.toLowerCase()) {
      case "full-time":
        return "bg-blue-100 text-blue-700";
      case "internship":
        return "bg-purple-100 text-purple-700";
      case "remote":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleApply = () => {
    setSelectedJob(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
          >
            {/* Job Type Badge */}
            <div className="mb-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getJobTypeBadgeColor(job.jobType)}`}
              >
                {job.jobType}
              </span>
            </div>

            {/* Job Title */}
            <h3 className="mb-2 line-clamp-2">{job.title}</h3>

            {/* Company */}
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Building2 className="w-4 h-4 shrink-0" />
              <span className="truncate">{job.company}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="truncate">{job.location}</span>
            </div>

            {/* View Details Button */}
            <button
              onClick={() => setSelectedJob(job)}
              className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              View Details
            </button>
          </div>
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

export default JobCard;
