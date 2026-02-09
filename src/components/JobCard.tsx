import type { Job } from "@/assets/mockData"
import { getJobTypeBadgeColor } from "@/lib/utils";
import { Building2, MapPin } from "lucide-react";

interface JobCardProps {
  job: Job;
  setSelectedJob: (job: Job | null) => void;
}


const JobCard = ({job,setSelectedJob}:JobCardProps) => {
  return (
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
  )
}

export default JobCard
