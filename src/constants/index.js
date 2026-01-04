import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hackthon,
  hack,
  leetcode,
  leet,
  Enigma,
  enig,
  open,
  opc,
  cart,
  jobit,
  tripguide,
  threejs,
  yogu,
  sparsh,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Problems Solver",
    company_name: "Leetcode",
    icon: leetcode,
    iconBg: "#383E56",
    date: "July 2023 - OnGoing",
    image: leet,
    points: [
      "Solved over 500 problems on Leetcode, covering a wide range of topics including data structures, algorithms, and system design.",
      "Achieved a high ranking in the Leetcode community through consistent problem solving and participation in contests.",
  ],  },
  {
    title: "Enigma Tech Club",
    icon: Enigma,
    iconBg: "#E6DEDD",
    date: "Jan 2024- OnGoing",
   image: enig,
   points: [
      "Active member of Enigma Tech Club, participating in various tech-related events and workshops.",
      "Collaborated with fellow members on projects and hackathons, enhancing teamwork and technical skills.",
    ],
  },
  {
    title: "Open Source Contributor",
    icon: open,
    iconBg: "#383E56",
    date: " 15|Aug|2025 - 30|Aug|2025",
    image: opc,
    points: [
      "Contributed to open source projects on GitHub, focusing on bug fixes and feature enhancements.",
      "Engaged with the open source community, participating in discussions and code reviews.",
    ],
  },
  {
    title: "Raisina Hackthon",
    icon: hackthon,
    iconBg: "#E6DEDD",
    date: "Feb 2025",
    image: hack,
    points: [
      "Participated in the Raisina Hackathon, collaborating with a team to develop innovative solutions to real-world problems.",
      "Gained experience in rapid prototyping, teamwork, and presenting ideas under time constraints.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rick is a fantastic developer who delivers high-quality work on time. Their attention to detail and problem-solving skills are top-notch.",
    name: "Yogesh",
    designation: "Web Developer",
    company: "MPCL",
    image: yogu,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does. He goes above and beyond to ensure that the project exceeds expectations.",
    name: "Sparsh Mishra",
    designation: "OutReaching Lead",
    company: "Alltrip",
    image: sparsh,
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Blogging Platform",
    description:
      "A full-stack blogging platform that allows users to create, edit, and publish blog posts, as well as comment on and like posts from other users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cart,
    source_code_link: "https://github.com/Vishal202-rgb",
  },
  {
    name: "Saas Ai Landing Page",
    description:
      "A responsive landing page for a SaaS AI product, featuring modern design elements and smooth animations to enhance user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Vishal202-rgb",
  },
  {
    name: "Hotel Booking Platform",
    description:
      "A hotel booking platform that allows users to search for hotels, view room details, and make reservations online with secure payment options.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Vishal202-rgb",
  },
];

export { services, technologies, experiences, testimonials, projects };
