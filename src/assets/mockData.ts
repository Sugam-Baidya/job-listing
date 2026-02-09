export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  description: string;
  skills: string[];
}

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    jobType: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for building scalable web applications using modern JavaScript frameworks. The ideal candidate has a strong understanding of UI/UX principles and experience with React, TypeScript, and modern build tools.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'GraphQL']
  },
  {
    id: '2',
    title: 'Product Design Intern',
    company: 'Creative Studios',
    location: 'New York, NY',
    jobType: 'Internship',
    description: 'Join our award-winning design team as a Product Design Intern. You will work on real projects, collaborate with senior designers, and gain hands-on experience in user research, wireframing, prototyping, and visual design. This is a great opportunity to learn and grow in a supportive environment.',
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Adobe Creative Suite']
  },
  {
    id: '3',
    title: 'Full Stack Engineer',
    company: 'StartupXYZ',
    location: 'Remote',
    jobType: 'Remote',
    description: 'We are seeking a talented Full Stack Engineer to help build our platform from the ground up. You will work across the entire stack, from database design to frontend implementation. We value ownership, creativity, and the ability to ship quality code quickly.',
    skills: ['Node.js', 'React', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: '4',
    title: 'Marketing Manager',
    company: 'GrowthLabs',
    location: 'Austin, TX',
    jobType: 'Full-time',
    description: 'Lead our marketing efforts and drive growth for our B2B SaaS product. You will be responsible for developing and executing marketing strategies, managing campaigns, analyzing metrics, and building our brand presence. Experience in digital marketing and content creation is essential.',
    skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics', 'Social Media']
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudSystems',
    location: 'Seattle, WA',
    jobType: 'Full-time',
    description: 'Join our infrastructure team to build and maintain scalable cloud solutions. You will work on automation, CI/CD pipelines, monitoring, and ensuring high availability of our services. Strong experience with cloud platforms and infrastructure as code is required.',
    skills: ['Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Python']
  },
  {
    id: '6',
    title: 'UX Researcher',
    company: 'UserFirst Design',
    location: 'Remote',
    jobType: 'Remote',
    description: 'Help us understand our users better through qualitative and quantitative research. You will conduct user interviews, usability tests, surveys, and analyze data to inform product decisions. Strong communication skills and experience with research methodologies are essential.',
    skills: ['User Research', 'Usability Testing', 'Data Analysis', 'Figma', 'Survey Design']
  },
  {
    id: '7',
    title: 'Frontend Developer',
    company: 'CodeFusion Nepal',
    location: 'Kathmandu, Nepal',
    jobType: 'Full-time',
    description: 'Work with our agile team to build modern web applications for local and international clients. You will collaborate with designers and backend engineers to deliver responsive, user-friendly interfaces.',
    skills: ['React', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'REST APIs']
  },
  {
    id: '8',
    title: 'Digital Marketing Specialist',
    company: 'Nepal Digital Hub',
    location: 'Pokhara, Nepal',
    jobType: 'Full-time',
    description: 'Drive online campaigns for tourism and e-commerce businesses. You will manage SEO, social media, and paid ads to increase brand visibility and customer engagement.',
    skills: ['SEO', 'Google Ads', 'Social Media Marketing', 'Analytics', 'Content Creation']
  },
  {
    id: '9',
    title: 'Mobile App Developer',
    company: 'AppNepal',
    location: 'Kathmandu, Nepal',
    jobType: 'Full-time',
    description: 'Develop Android and iOS apps for startups and NGOs. You will work on cross-platform solutions and integrate APIs for real-world impact projects.',
    skills: ['Flutter', 'Dart', 'Kotlin', 'Firebase', 'REST APIs']
  },
  {
    id: '10',
    title: 'UI/UX Designer',
    company: 'Design Studio Nepal',
    location: 'Lalitpur, Nepal',
    jobType: 'Full-time',
    description: 'Create intuitive and visually appealing designs for web and mobile applications. You will collaborate with developers and product managers to deliver user-centered solutions.',
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Testing']
  },
  {
    id: '11',
    title: 'Data Analyst',
    company: 'Analytics Nepal',
    location: 'Kathmandu, Nepal',
    jobType: 'Full-time',
    description: 'Analyze datasets from NGOs and enterprises to provide actionable insights. You will prepare dashboards and reports to support decision-making.',
    skills: ['SQL', 'Python', 'Power BI', 'Excel', 'Data Visualization']
  }
];
