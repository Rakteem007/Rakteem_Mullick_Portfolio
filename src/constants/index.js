import { crop, quiz, sharespace, twitterbot } from "../assets";

export const HERO_CONTENT = `I am a Computer Science graduate specializing in web development and machine learning. I’ve created a crop recommendation system, a hotel reservation platform, and a Twitter automation bot. Skilled in Java, Python, and the MERN stack, I excel in problem-solving and coding. I contribute to open-source projects and have ranked highly in Leetcode contests, integrating complex data into actionable insights for innovative tech solutions.`;

export const ABOUT_TEXT = `I am proficient in Java, Python, JavaScript, C++, HTML, and CSS, and experienced with frameworks like MERN, Selenium, and Flask. I developed a crop recommendation system using Random Forest and a Flask app, a hotel reservation system with MERN stack, and a Twitter automation bot with Selenium. My skills include problem-solving, coding, web development, and API integration. Notably, I contributed to Digital Ocean HacktoberFest and ranked 2373 out of 27133 in a Leetcode contest. My work aims to optimize farming, enhance user experience, and ensure efficient communication and issue resolution in tech solutions.`;

export const EXPERIENCES = [
  {
    year: "2022-2022",
    role: "Open Source Contributer",
    company: "Digital Ocean",
    description: `I participated in the contest of HacktoberFest 2022 organized by digital Ocean. I was responsible for solving complex algorithms specially searching algorithms using Logical Regressiona and Statistics.`,
    technologies: ["Java", "Python"],
  },
  {
    year: "2020 - 2024",
    role: "Full Stack Developer",
    company: "Megatronix",
    description: `This is the official Computer Science club of Techo India University. I was mainly responsible for maintaining building websites for various events and competitions organized by the club`,
    technologies: ["HTML", "CSS", "React", "MERN"],
  },
  {
    year: "2023 - 2023",
    role: "Participant",
    company: "Leetcode",
    description: ` Achieved a rank of 2373 out of 27,133 in Leetcode's weekly contest 359, showcasing my strong problem-solving abilities, coding proficiency, and competitive programming skills in a highly challenging environment.`,
    technologies: ["Java", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Crop Prediction System",
    image: crop,
    description:
      "I developed a crop recommendation system using Random Forest and Flask, optimizing farming with meteorological and soil data for sustainable agriculture.",
    technologies: ["HTML", "CSS", "Python", "Flask", "Jupyter NoteBook"],
    link: "https://github.com/Rakteem007/Crop_Prediction_System",
  },
  {
    title: "Share Space",
    image: sharespace,
    description:
      "An social media application where user can perform CRUD operations dynamically with authentication and authorization.",
    technologies: ["HTML", "CSS", "React", "MERN"],
    link: "https://github.com/Rakteem007/ShareSpace_Client",
  },
  {
    title: "Twitter Bot",
    image: twitterbot,
    description:
      "A automated bot which performs network speed testing and posts a anonymous tweet in twitter if there is any network issue.",
    technologies: ["Python", "Selenium"],
    link: "https://github.com/Rakteem007/Twitter_bot",
  },
  {
    title: "Quiz App",
    image: quiz,
    description:
      "A quiz app which generates 10 questions using OpenTrivia API with each questions having a loader timer of 10s with UI.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/Rakteem007/Quiz_App",
  },
];

export const CONTACT = {
  address: "Sukia's Street, Kolkata-700009, India",
  phoneNo: "+91 9842308577",
  email: "rakteemmullick01@gmail.com",
};
