import type { Job } from "@/assets/mockData";
import { getJobTypeBadgeColor } from "@/lib/utils";
import { X, MapPin, Building2, Briefcase } from "lucide-react";

interface JobDetailsModalProps {
  job: Job;
  onClose: () => void;
  onApply: () => void;
}

export default function JobDetailsModal({
  job,
  onClose,
  onApply,
}: JobDetailsModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-start justify-between">
          <div className="flex-1 pr-4">
            <h2 className="mb-2">{job.title}</h2>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-6">
          {/* Job Type Badge */}
          <div className="mb-6">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${getJobTypeBadgeColor(job.jobType)}`}
            >
              <Briefcase className="w-4 h-4" />
              {job.jobType}
            </span>
          </div>

          {/* Job Description */}
          <div className="mb-6">
            <h3 className="mb-3">Job Description</h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Required Skills */}
          <div className="mb-6">
            <h3 className="mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-white text-gray-700 border border-gray-300 py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onApply}
            className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
