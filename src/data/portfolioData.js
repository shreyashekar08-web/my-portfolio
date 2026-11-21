export const profile = {
  name: 'Shreya T C',
  roles: [
    'Java Developer',
    'Full Stack Developer',
    'React Developer',
    'AI Enthusiast',
  ],
  location: 'Puttur, Karnataka, India',
  email: 'shreyashekar08@gmail.com',
  phone: '+91 8277046502',
  github: 'https://github.com/shreyashekar08-web',
  linkedin: 'https://linkedin.com/in/shreya-t-c-b5164935b',
  resumeUrl: '/Shreya_TC_Resume.pdf',
  tagline:
    'Aspiring Java Developer passionate about building reliable software, full-stack web applications, and AI-powered solutions.',
  summary:
    'Computer Science and Engineering student aspiring to become a Java Developer, with an interest in object-oriented programming, data structures and algorithms, backend development, and full-stack web technologies. Building practical projects using Java, JavaScript, React, Node.js, Python, and SQL. Eager to strengthen problem-solving skills and contribute to developing reliable, maintainable software.',
};

export const stats = [
  { label: 'Projects Shipped', value: 2, suffix: '+' },
  { label: 'Technologies', value: 18, suffix: '+' },
  { label: 'Certifications', value: 4, suffix: '' },
  { label: 'TryHackMe Points', value: 80, suffix: '+' },
];

export const education = {
  degree: 'Bachelor of Engineering, Computer Science',
  university: 'Visvesvaraya Technological University, Belagavi, Karnataka',
  period: '2023 – 2027 (Expected)',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java/C++)',
    'Database Management Systems (MySQL)',
    'Computer Networking',
    'Cloud Computing',
    'Web Development',
  ],
  previousEducation: [
    {
      level: 'Pre-University Course (PUC)',
      institution: 'Nehru Memorial Pre University College, Aranthodu',
      score: '82%',
    },
    {
      level: 'SSLC (10th Standard)',
      institution: 'Nehru Memorial Junior High School, Aranthodu',
      score: '91.04%',
    },
  ],
};
export const skillGroups = [
  {
    category: 'Frontend',
    command: 'ls ./frontend',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 82 },
    ],
  },
  {
    category: 'Backend',
    command: 'ls ./backend',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Node.js', level: 70 },
      { name: 'Express', level: 68 },
    ],
  },
  {
    category: 'Database & Cloud',
    command: 'ls ./infra',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Cloud Architecture', level: 60 },
    ],
  },
  {
    category: 'AI / ML',
    command: 'ls ./ai',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'TensorFlow', level: 74 },
      { name: 'Keras', level: 72 },
    ],
  },
];

export const projects = [
  {
    id: 'vcet-grievance-hub',
    title: 'VCET Grievance Hub',
    subtitle: 'Web Security Focus · Mini Project',
    date: 'September 2026',
    description:
      'A secure, role-based grievance management system built for a five-tier college hierarchy — students up to the Principal — engineered to close off the exact vulnerability classes that make internal tools risky.',
    highlights: [
      'Reduced manual grievance processing overhead by 40% across 5 role tiers',
      'Mitigated OWASP Top 10 risks — Broken Access Control & IDOR — with zero permission bypasses',
      'Monitored active session data with Wireshark to verify secure transmission of complaints',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL', 'OWASP Top 10'],
    github: 'https://github.com/shreyashekar08-web',
    demo: '#',
    accent: 'primary',
  },
  {
    id: 'vision-care',
    title: 'Vision Care',
    subtitle: 'AI Eye Disease Detector · Major Project',
    date: 'January 2026',
    description:
      'An AI-based diagnostic tool that classifies retinal images to flag eye disease, wrapped in a Flask web app with secured endpoints for handling sensitive medical uploads — built with a 4-member team.',
    highlights: [
      'Achieved 94.5% classification accuracy using a CNN built with TensorFlow/Keras',
      'Reduced inference latency by 25% via optimized Flask API endpoints',
      'Secured user upload endpoints against unauthorized access',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Flask', 'REST APIs'],
    github: 'https://github.com/shreyashekar08-web',
    demo: '#',
    accent: 'accent',
  },
  {
  id: 'job-finder',
  title: 'Job Finder Website',
  subtitle: 'Job Search Platform · Web Development Project',
  date: '2026',
  description:
    'A responsive job search website built with HTML, CSS, and JavaScript that integrates a REST API to fetch and display job listings. Users can explore opportunities, search for relevant positions, and view job details through a simple, user-friendly interface.',
  highlights: [
    'Integrated a REST API to retrieve and display job listings dynamically',
    'Implemented job search and filtering by keywords and location',
    'Designed a responsive interface for browsing job opportunities across devices',
  ],
  tech: ['HTML5', 'CSS3', 'JavaScript', 'REST API'],
  github: 'https://github.com/shreyashekar08-web',
  demo: '#',
  accent: 'primary',
},
];
export const timeline = [
  {
    year: '2026',
    title: 'Software Engineer Intern',
    org: 'HackerRank',
    type: 'certification',
    description:
      'Completed the Software Engineer Intern certification on HackerRank.',
  },
  {
    year: '2024',
    title: 'Data Structures & Algorithms',
    org: 'Infosys Springboard',
    type: 'certification',
    description:
      'Learned data structures, algorithms, and problem-solving concepts.',
  },
  {
    year: '2024',
    title: 'Python Workshop',
    org: 'SkillRemark',
    type: 'certification',
    description:
      'Participated in a workshop focused on Python programming.',
  },
  {
    year: '2025',
    title: 'React Frontend Specialization',
    org: 'Prep With Harshith',
    type: 'certification',
    description:
      'Learned React concepts and modern frontend development techniques.',
  },
  {
    year: '2024',
    title: 'Web Development Certification',
    org: 'Internshala',
    type: 'certification',
    description:
      'Completed training in web development fundamentals.',
  },
  {
    year: '2025',
    title: 'C Programming',
    org: 'QSpiders Campus',
    type: 'certification',
    description:
    'Learned the fundamentals of C programming, including variables, data types, operators, conditional statements, loops, arrays, functions, and basic problem-solving techniques.',
  },
  {
    year: '2026',
    title: 'MongoDB Concepts',
    org: 'QSpiders Campus',
    type: 'certification',
    description:
    'Learned the fundamentals of MongoDB, including NoSQL database concepts, document-based data storage, collections, CRUD operations, and basic database queries.',
  },
];
export const services = [
  {
    title: 'Frontend Development',
    description: 'Responsive, accessible interfaces built with modern HTML5, CSS3 and JavaScript.',
    icon: 'layout',
  },
  {
    title: 'Backend Development',
    description: 'Server-side logic and APIs in Java and Flask, designed with security as a default, not an afterthought.',
    icon: 'server',
  },
  {
    title: 'React Development',
    description: 'Component-driven React applications with clean state management and smooth interactions.',
    icon: 'code',
  },
  {
    title: 'UI Design',
    description: 'Interfaces that stay clear under real use — sensible hierarchy, motion with purpose, no decoration for its own sake.',
    icon: 'design',
  },
];

export const internships = [
  {
    year: '2024',
    title: 'Web Development Internship',
    org: 'SkillRemark',
    type: 'internship',
    description:
      'Developed a dress-purchasing e-commerce website using HTML, CSS, JavaScript, PHP, and SQL. Implemented user registration and password-based login, allowing users to create accounts and access the application. Built the interface for browsing dresses, with PHP handling server-side operations and SQL managing application data.',
  },
  {
    year: '2025',
    title: 'Data Analytics Internship',
    org: 'Wheeltrix',
    type: 'internship',
    description:
      'Gained practical exposure to data collection, data cleaning, data organization, and exploratory data analysis. Learned to examine datasets, identify patterns and trends, interpret results, and present meaningful insights for data-driven decision-making.',
  },
  {
    year: '2025',
    title: 'Face Duplication Data Collection Project',
    org: 'TELUS Digital',
    type: 'freelance',
    description:
      'Worked as a freelance contributor on a face duplication data collection project. Participated in collecting and organizing facial image data according to project guidelines, with attention to data accuracy and quality.',
  },
];


export const achievements = [
  {
    year: 'Ongoing',
    title: 'NSS & Red Cross Volunteer',
    org: 'Community Service',
    type: 'achievement',
    description:
      'Active volunteer contributing to campus and community initiatives.',
  },
  { label: 'HackerRank', value: '5567 points' },
  { label: 'LeetCode', value: '548 points' },
  { label: 'TryHackMe', value: '80+ points — Web Fundamentals, Network Security, Kali Linux' },
];
