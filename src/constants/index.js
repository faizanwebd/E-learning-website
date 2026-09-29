import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
// import Login from "../Login";
// import Login from "./Login";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Upskill",
    url: "#features",
  },
  {
    id: "2",
    title: "Careers",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Services",
    url: "#pricing",
  },
  // {
  //   id: "3",
  //   title: "Pricing",
  //   url: "#roadmap",
  // },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "5",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  // {
  //   id: "6",
  //   title: "Sign in",
  //   url: "#login",
  //   // action: Login
  //   // onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "You’ll learn essential design principles, like color, typography, and composition, while building a portfolio through hands-on projects. Ideal for both beginners and experienced designers, these courses help you develop skills to succeed in the design industry.";

export const collabContent = [
  {
    id: "0",
    title: "Learn to use popular design software",
    // text: collabText,
  },
  {
    id: "1",
    title: "Experienced designers to improve skills.",
  },
  {
    id: "2",
    title: "Build a portfolio with hands-on projects.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Industry Training",
    description: "Our industry training programs are designed to bridge the gap between academic knowledge and practical skills. We offer specialized courses for professionals in Full Stack Development, Cloud Computing, and Data Science. These programs are tailored to boost productivity, ensuring your team stays ahead in today’s competitive landscape.",
    // price: "0",
    features: [
      "Develop Practical Training Programmes",
      "Facilitate Real-World Project Experience",
      "Ensure Skill Application Beyond Theory",
      "Foster Long-Term Collaborative Relationships",
    ],
  },
  {
    id: "1",
    title: "Software Development",
    description: "Our software development services deliver custom, innovative solutions that fuel business success. We specialize in creating scalable web applications, cutting-edge mobile apps, and robust software systems tailored to diverse needs across industries. Our goal is to empower your business with technology that drives growth and efficiency.",
    // price: "9.99",
    features: [
      "Innovative Design",
      "Quality Assurance",
      "Agile Development Processes",
      "Continuous Support and Maintenance",
    ],
  },
  {
    id: "2",
    title: "HR Solutions",
    description: "Our HR solutions simplify talent acquisition and boost employee retention through robust training and development programs. We bridge the gap between academia and industry, equipping interns with essential skills for smooth transitions into full-time roles, fostering a prepared and committed workforce for your organization.",
    price: null,
    features: [
      "Enhance Cost Efficiency",
      "Develop a Sustainable Talent Pipeline",
      "Foster Long-Term Employee Retention",
      "Strengthen Organisational Culture",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Software Development",
    text: "Attain advanced expertise in software development focusing on designing scalable architectures, writing efficient code, and implementing high-performance solutions tailored to complex real-world challenges in diverse domains.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Web Applications Development",
    text: "Develop proficiency in crafting sophisticated web applications focusing on seamless interfaces, robust architecture, and efficient integration. ",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Mobile Applications Development ",
    text: "Acquire mastery in mobile application development specializing in creating feature-rich high-performing solutions for iOS and Android platforms. ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Software Testing",
    text: "Gain specialized skills in software testing focusing on rigorous methodologies for quality assurance, debugging, and optimizing performance to deliver reliable.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "AI Applications Development",
    text: "Delve into AI applications development mastering advanced techniques to create intelligent systems, from predictive models to automation solutions tailored for transformative industry.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Data Analyst",
    text: "Delve into AI applications development mastering advanced techniques to create intelligent systems, from predictive models to automation solutions tailored for transformative industry.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "AWS Cloud Computing",
    text: "Gain advanced proficiency in AWS Cloud Computing, mastering cloud architecture deployment and scalable solutions. Learn to efficiently manage cloud infrastructure, optimize performance, and implement secure, high-availability environments.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "C Programming",
    text: "Master C programming focusing on efficient memory management, low-level operations, and algorithmic problem-solving. Develop a deep understanding of system-level programming essential for building high-performance applications.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "8",
    title: "C++ Programming",
    text: "Excel in C++ programming, mastering object-oriented design, advanced memory management, and performance optimization. Build expertise in creating robust applications, system software, and real-time solutions using industry-relevant techniques.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "9",
    title: "LLM Applications",
    text: "Gain proficiency in Large Language Model (LLM) applications focusing on natural language processing, AI-driven insights, and custom model integration to revolutionize automation, customer engagement, and decision-making processes.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "10",
    title: "Blockchain and De-Fi Apps",
    text: "Specialize in Blockchain and De-Fi applications, delving into decentralized ecosystems, immutable ledger technologies, and trustless financial solutions to transform digital transactions and foster financial autonomy.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "11",
    title: "System Software",
    text: "Develop expertise as a Data Analyst, mastering the art of extracting insights, interpreting complex datasets, and driving data-informed decisions enabling impactful strategies and solutions in a data-driven world.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: benefitImage2,
  },
  

];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/gokboru.in/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
