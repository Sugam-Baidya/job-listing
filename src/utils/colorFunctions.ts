export const getJobTypeBadgeColor = (jobType: string) => {
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

  