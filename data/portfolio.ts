export const portfolio = {
  name: "Anshuman Giri",
  role: "Full Stack Developer",
  taglines: ["Builder", "Problem Solver", "CS Undergrad", "Full-Stack Dev"],
  bio: "CS undergrad at KIIT (2023–2027) building full-stack systems that are fast, clean, and actually ship.",
  about: "I'm a full-stack developer who enjoys working across the entire product — from designing APIs to wiring up UIs. I care about clean code, fast systems, and shipping things that work. Currently open to internships and collaborations.",
  location: "Bhubaneswar, India",
  availability: "Open to work",
  twitter: "https://twitter.com/anshumangiri",
  email: "anshumangiriofficial@gmail.com",
  github: "https://github.com/Anshu-09",
  linkedin: "https://linkedin.com/in/anshuman-giri",
  cvUrl: "/cv.pdf",

  projects: [
    {
      id: "bugtrack",
      name: "Bug Track",
      date: "Jan 2025",
      description:
        "Collaborative bug tracker with team workspaces, GitHub branch linking, and priority sorting.",
      stack: ["Java", "Spring Boot", "PostgreSQL", "React"],
      href: "https://github.com/Anshu-09",
    },
    {
      id: "smartbunks",
      name: "SmartBunks",
      date: "Feb 2025",
      description:
        "Attendance automation tool with REST APIs. 150–300ms response time on cloud.",
      stack: ["Python", "Flask", "MongoDB", "HTML/CSS"],
      href: "https://github.com/Anshu-09",
    },
    {
      id: "kiitpost",
      name: "KiitPost",
      date: "Jan 2026",
      description:
        "KIIT placement portal with 4 opportunity types, bookmark system, and admin roles.",
      stack: ["React", "Spring Boot", "PostgreSQL", "JWT"],
      href: "https://github.com/Anshu-09",
    },
  ],

  skills: {
    Languages: ["Java", "Python", "C"],
    Backend: ["Spring Boot", "Node.js", "Express.js", "Flask"],
    Frontend: ["React.js", "Next.js", "HTML/CSS"],
    Databases: ["PostgreSQL", "MongoDB"],
    Tools: ["AWS EC2", "Git", "REST APIs", "JWT"],
  },

  experience: [
    {
      company: "Schrodinger Ideas Pvt. Ltd.",
      role: "App & Content Dev Intern",
      period: "Jul – Aug 2022",
      points: [
        "Built Retool dashboards and redesigned content pipelines.",
        "Applied SEO and analytics strategies to improve reach.",
      ],
    },
    {
      company: "Konnexions Club",
      role: "Graphic Team Lead",
      period: "Mar 2024 – Present",
      points: [
        "Standardized design systems across cross-team campaigns.",
        "Reduced design turnaround time by 20%.",
      ],
    },
  ],
  competitive: [
    {
      platform: "LeetCode",
      handle: "Anshu507",
      href: "https://leetcode.com/u/Anshu507/",
      rating: 1450,
      rank: "~150,000",
      stats: [
        { label: "Solved", value: "250" },
        { label: "Easy", value: "120" },
        { label: "Medium", value: "100" },
        { label: "Hard", value: "30" },
      ],
      color: "#f5a623",
    },
    {
      platform: "CodeChef",
      handle: "@username",
      href: "https://www.codechef.com",
      rating: null,
      rank: "--",
      stats: [
        { label: "Rating", value: "00" },
        { label: "Stars", value: "--" },
        { label: "Contests", value: "--" },
        { label: "Global Rank", value: "--" },
      ],
      color: "#818cf8",
    },
    {
      platform: "Codeforces",
      handle: "@username",
      href: "https://codeforces.com",
      rating: null,
      rank: "--",
      stats: [
        { label: "Rating", value: "00" },
        { label: "Rank", value: "--" },
        { label: "Contests", value: "--" },
        { label: "Problems", value: "--" },
      ],
      color: "#34d399",
    },
    {
      platform: "GeeksForGeeks",
      handle: "@username",
      href: "https://www.geeksforgeeks.org",
      rating: null,
      rank: "--",
      stats: [
        { label: "Problems", value: "180" },
        { label: "Institute Rank", value: "45" },
        { label: "Score", value: "--" },
        { label: "Streak", value: "--" },
      ],
      color: "#4ade80",
    },
  ],
} as const;

export type Project = (typeof portfolio.projects)[number];
export type Experience = (typeof portfolio.experience)[number];
export type CPProfile = (typeof portfolio.competitive)[number];
