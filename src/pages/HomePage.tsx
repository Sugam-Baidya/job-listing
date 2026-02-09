import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { MOCK_JOBS, type Job } from "@/assets/mockData";
import JobList from "@/components/JobList";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const filteredJobs = MOCK_JOBS.filter((job) => {
    const query = searchQuery.toLowerCase();
    return (
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.jobType.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-6 text-2xl font-semibold text-gray-800">Available Jobs</h1>

          {/* Search Bar */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        {/* Results Count */}
        <p className="text-gray-600 mb-4">
          {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"}{" "}
          found
        </p>
        <JobList jobList={filteredJobs} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
      </div>
    </div>
  );
};

export default HomePage;
