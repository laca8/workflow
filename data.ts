import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiChartdotjs,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiSqlite,
} from "react-icons/si";
export const about = {
  image: "./public/Picsart_24-09-16_07-52-55-897.jpg",
  name: "Ahmed.S.Ragab",
  job: "MERN STACK",
  age: "25",
  birhday: "1/25/2000",
  education: `
  Bachelor of Computer Science   Helwan University  2018-2022   Cairo,Egypt                                                                                                  
  A computer science graduate from helwan university 
  and a mern stack developer with one year experiance in developing
   high performance web applications,
   i specialize in mongodb, nodeJS, expressJs,reactJS, and i enjoy working on both frontend and backend, 
   over the past year i have worked on multiple projects
      `,
  experiance: `
Vision Company is a programming company development and innovative solutions for demanding projects 
I work as a full Stack developer here responsible for building deploying and maintaining internal web 
applications, Developed indexed database architecture using Mongo worked with NodeJS to develop 
automated solutions to include web interface using Html,CSS , JavaScript web services 
      `,
  title:
    "Iam a MERN Stack developer with experience in building end-to-end web applications using MongoDB, Express, React, and Node.js.",
  summary:
    "Full Stack developer with 1 year experience in NodeJS and ReactJS, a motivated, adaptable, and responsible web developer seeking a position in a company, which will utilize the professional and technical skills developed through 1 year of experience in this field. I have a methodical customer-focused approach to work and a strong drive to see things through to completion. I can work under pressure and  within budget and time.",
};
export const skills = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "bg-orange-500" },
      { name: "CSS", icon: SiCss3, color: "bg-blue-500" },
      { name: "JS", icon: SiJavascript, color: "bg-yellow-400" },
      { name: "TS", icon: SiTypescript, color: "bg-blue-600" },
      { name: "ReactJS", icon: SiReact, color: "bg-cyan-400" },
      { name: "Redux", icon: SiRedux, color: "bg-purple-600" },
      { name: "Tailwind", icon: SiTailwindcss, color: "bg-cyan-500" },
      { name: "NextJS", icon: SiNextdotjs, color: "bg-black" },
      { name: "ChartJS", icon: SiChartdotjs, color: "bg-pink-500" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "NodeJS", icon: SiNodedotjs, color: "bg-green-600" },
      { name: "ExpressJS", icon: SiExpress, color: "bg-gray-600" },
      { name: "WebSocket", icon: SiSocketdotio, color: "bg-blue-400" },
      { name: "JWT", icon: SiJsonwebtokens, color: "bg-pink-400" },
      { name: "REST API", icon: "🌐", color: "bg-indigo-500" }, // Using an emoji as an icon
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "bg-green-500" },
      { name: "MySQL", icon: SiMysql, color: "bg-blue-800" },
      { name: "SQLite", icon: SiSqlite, color: "bg-blue-400" },
    ],
  },
];
export const projects = [
  {
    category: "Fullstack",
    name: "🛒 Proshop",
    link: "https://proshop-gpt7.onrender.com",
    "Project Overview": `ProShop is a fully functional e-commerce platform that allows users to browse products,
        add items to the cart, checkout, and leave reviews.Built using MERN Stack, featuring pagination, Redux state management, authentication, and shipping integration.`,
    "Key Responsibilities": `
        ✅ Frontend Development (React.js)
            Developed a responsive and dynamic UI using React.js and Bootstrap.
            Implemented pagination for better product browsing.
            Used Redux Toolkit for efficient state management.
            Added Placeholder Loading for a seamless user experience while fetching data.

        ✅ Backend Development (Node.js & Express.js)
            Designed and developed RESTful APIs using Express.js and MongoDB.
            Implemented product reviews and rating system.
            Developed cart management system (Add to Cart, Remove Items).
            Integrated order processing and shipping management with secure transactions.

        ✅ Performance Optimization & Security
            Implemented JWT authentication for secure login and user data protection.
            Optimized database queries with Mongoose Query Optimization.
            Hosted the project on Render for smooth deployment and scalability
        `,
    "Tech Stack": `
        🛠 Backend: Node.js, Express.js, MongoDB, Mongoose
        🛠 Frontend: React.js, Redux.js, Botstrap
        🛠 Authentication: JWT, bcrypt.js, Express-Validator
        🛠 Deployment: Render, MongoDB Atlas
        🛠 Tools & DevOps: Postman, Git, GitHub`,
  },
  {
    category: "Fullstack",
    name: "👥 ConnectHub",
    link: "https://social-media-tgss.onrender.com",
    "Project Overview": `
        Social Media Platform built using MERN Stack with authentication and user profile management.
        Allows users to create and update profiles, add experiences, and education details.
        Developed secure authentication system and CRUD operations for user profiles
       `,
    "Key Responsibilities": `
       ✅ Frontend Development (React.js)
        Developed a responsive and interactive UI using React.js.
        Integrated form validation and state management for user input.
        ✅ Backend Development (Node.js & Express.js)

        Designed and implemented RESTful APIs for profile and authentication management.
        Used JWT authentication for secure user login.
        Developed CRUD functionalities for user profiles, experience, and education.
        ✅ Database & Deployment

        Managed MongoDB database for storing user data.
        Deployed the project on Render for live access.
       `,
    "Tech Stack": `
       🛠 Backend: Node.js, Express.js, MongoDB, Mongoose
       🛠 Frontend: React.js, Redux.js, Botstrap
       🛠 Authentication: JWT, bcrypt.js, Express-Validator
       🛠 Deployment: Render, MongoDB Atlas
       🛠 Tools & DevOps: Postman, Git, GitHub
`,
  },
  {
    category: "Backend",
    name: "🏡 Real Estate Management API",
    link: "https://github.com/laca8/Real-Estate-managment",
    "Project Overview": `
            The Real Estate Management API is a backend system that enables users to manage real estate listings,
            agents, and user authentication. It provides functionalities for property listing, agent management, 
            user authentication, and property filtering.
`,
    "Key Responsibilities": `
            ✅ User Authentication & Authorization (JWT-based)
            ✅ CRUD Operations for Properties & Agents
            ✅ Advanced Property Search & Filtering
            ✅ Security Implementations (Rate Limiting, Helmet, XSS Protection)
            ✅ Role-based Access Control (Admin & User)
            ✅ RESTful API Design with Secure Endpoints
`,
    "Tech Stack": `
            Tech Stack Used
            🛠 Backend: Node.js, Express.js, MongoDB, Mongoose
            🛠 Authentication: JWT, bcrypt.js, Express-Validator
            🛠 Security: Helmet, XSS-Clean, Rate Limiting, CORS
            🛠 Deployment: MongoDB Atlas
            🛠 Tools & DevOps: Postman, Git, GitHub
`,
  },
  {
    category: "Backend",
    name: "🏥 Hospital Management System API",
    link: "https://github.com/laca8/hosbital-managment",
    "Project Overview": `
            The Hospital Management System API is a backend solution that facilitates hospital operations, 
            including patient records, doctor scheduling, medical appointments, and staff management.
             The system ensures secure access control, role-based permissions, and efficient data retrieval.
`,
    "Key Responsibilities": `
            ✅ User Authentication & Authorization (JWT-based)
            ✅ CRUD Operations for Patients, Doctors, and Appointments
            ✅ Role-Based Access Control (RBAC) for Admin, Doctors, and Patients
            ✅ Doctor Scheduling & Appointment Booking
            ✅ Medical Records & Prescriptions Management
            ✅ Security Implementations (Rate Limiting, Helmet, XSS Protection)
            ✅ RESTful API Design with Secure Endpoints

`,
    "Tech Stack": `
            Tech Stack Used
            🛠 Backend: Node.js, Express.js, MongoDB, Mongoose
            🛠 Authentication: JWT, bcrypt.js, Express-Validator
            🛠 Security: Helmet, XSS-Clean, Rate Limiting, CORS
            🛠 Deployment: MongoDB Atlas
            🛠 Tools & DevOps: Postman, Git, GitHub
`,
  },
  {
    category: "Backend",
    name: "🎓 Courses Management API",
    link: "https://github.com/laca8/hosbital-managment",
    "Project Overview": `
            The Courses Management API is a backend system designed to manage courses, instructors, and student enrollments.
             It provides functionalities for course creation, student enrollment, progress tracking, and authentication.
`,
    "Key Responsibilities": `
            ✅ User Authentication & Role-Based Access (Admin, , User)
            ✅ CRUD Operations for Courses, Quizez, and Orders
            ✅ Student Enrollment & Progress Tracking
            ✅ Course Categories & Filtering
            ✅ Secure RESTful API with JWT Authentication
            ✅ Performance Optimizations with Pagination 

`,
    "Tech Stack": `
            Tech Stack Used
            🛠 Backend: Node.js, Express.js, MongoDB, Mongoose
            🛠 Authentication: JWT, bcrypt.js, Express-Validator
            🛠 Security: Helmet, XSS-Clean, Rate Limiting, CORS
            🛠 Deployment: MongoDB Atlas
            🛠 Tools & DevOps: Postman, Git, GitHub
`,
  },

  {
    category: "Backend",
    name: "🎟️ Event Ticketing Management API",
    link: "https://github.com/laca8/hosbital-managment",
    "Project Overview": `
          The Event Ticketing Management API is a backend system designed to manage events, tickets, and user authentication.
           It provides functionalities for event creation, ticket booking, user authentication, and event tracking.
`,
    "Key Responsibilities": `
            ✅ User Authentication & Role-Based Access (Admin, Organizer, User)
            ✅ CRUD Operations for Events, Tickets, and Users
            ✅ Ticket Booking & Event Management
            ✅ Secure RESTful API with JWT Authentication
            ✅ Performance Optimizations with Pagination & Indexing

`,
    "Tech Stack": `
            Tech Stack Used
            🛠 Backend: Node.js, Express.js, MongoDB, Mongoose
            🛠 Authentication: JWT, bcrypt.js, Express-Validator
            🛠 Security: Helmet, XSS-Clean, Rate Limiting, CORS
            🛠 Deployment: MongoDB Atlas
            🛠 Tools & DevOps: Postman, Git, GitHub
`,
  },

  {
    category: "Fullstack",
    name: "📂 File Sharing Management",
    link: "https://github.com/laca8/file-sharing-managment-api",
    "Project Overview": `
        A Node.js application for managing files and folders with features for uploading, downloading, and organizing files securely.
        Features
`,
    "Key Responsibilities": `
            ✅ User Authentication & Role-Based Access (Admin, Organizer, User)
            ✅ File upload using Multer
            ✅  Folder creation and management
            ✅ File download capabilities
            ✅ Secure file handling
            ✅ File deletion
            ✅ Folder navigation

`,
    "Tech Stack": `
            Tech Stack Used
            🛠 Backend: Node.js, Express.js, MongoDB, Mongoose
            🛠 Frontend: React.js, Redux.js, Tailwindcss,Shadcn ui
            🛠 Authentication: JWT, bcrypt.js, Express-Validator
            🛠 Security: Helmet, XSS-Clean, Rate Limiting, CORS
            🛠 Deployment: MongoDB Atlas
            🛠 Tools & DevOps: Postman, Git, GitHub
`,
  },
  {
    category: "Fullstack",
    name: "💬 Real-Time Chat API (WebSockets)",
    link: "https://github.com/laca8/chat-ws",
    "Project Overview": `
        The Real-Time Chat API is a backend system that allows users to send and receive messages instantly using WebSockets (Socket.io).
         The system supports user authentication, private messaging, group chats, and message history storage.
`,
    "Key Responsibilities": `
            ✅ Real-Time Messaging using WebSockets 
            ✅ User Authentication with JWT
            ✅ One-on-One (Private) and Group Chat Support
            ✅ Online/Offline User Status
            ✅ Message History Stored in MongoDB
            ✅ Secure API with Rate Limiting and XSS Protection

`,
    "Tech Stack": `
            Tech Stack Used
            🛠 Backend: Node.js, Express.js, MongoDB, Mongoose
            🛠 Frontend: React.js, Redux.js, Tailwindcss,Shadcn ui
            🛠 Authentication: JWT, bcrypt.js, Express-Validator
            🛠 Security: Helmet, XSS-Clean, Rate Limiting, CORS
            🛠 Deployment: MongoDB Atlas
            🛠 Tools & DevOps: Postman, Git, GitHub
`,
  },
  {
    category: "Frontend",
    name: "🏡 Real-Estate Frontend",
    link: "https://precious-tiramisu-5b6f2c.netlify.app/",
    "Project Overview": `
      A modern web application built using React.js and deployed on Netlify.
`,
    "Key Responsibilities": `
            ✅ Tech Stack: (React, Redux, Tailwind, etc.)
            ✅ Features: (Authentication, API integration, WebSockets, etc.)
            ✅ Backend API Link: (If available)
            ✅ Installation Steps: (if you want setup instructions)

`,
    "Tech Stack": `
        🛠 Frontend: React.js, React Router, Redux Toolkit 
        🎨 Styling: Tailwind CSS  / CSS Modules
        🚀 Deployment: Netlify
`,
  },
  {
    category: "Frontend",
    name: "🎓 Udemy Clone",
    link: "https://musical-kangaroo-05c000.netlify.app/",
    "Project Overview": `
      A modern web application built using React.js and deployed on Netlify.
`,
    "Key Responsibilities": `
            ✅ Tech Stack: (React, Redux, Tailwind, etc.)
            ✅ Features: (Authentication, API integration, WebSockets, etc.)
            ✅ Backend API Link: (If available)
            ✅ Installation Steps: (if you want setup instructions)

`,
    "Tech Stack": `
         
        🛠 Frontend: React.js, React Router, Redux Toolkit 
        🎨 Styling: Tailwind CSS  / CSS Modules
        🚀 Deployment: Netlify
`,
  },

  {
    category: "Frontend",
    name: "🎬 IMDb Clone",
    link: "https://imdb-bice-tau.vercel.app/",
    "Project Overview": `
      A modern web application built using React.js and deployed on Netlify.
`,
    "Key Responsibilities": `
            ✅ Tech Stack: (React, Redux, Tailwind, etc.)
            ✅ Features: (Authentication, API integration, WebSockets, etc.)
            ✅ Backend API Link: (If available)
            ✅ Installation Steps: (if you want setup instructions)

`,
    "Tech Stack": `
         
        🛠 Frontend: React.js, React Router, Redux Toolkit 
        🎨 Styling: Tailwind CSS  / CSS Modules
        🚀 Deployment: Netlify
`,
  },
  {
    category: "Frontend",
    name: "📝 React Quiz App",
    link: "https://quiz-seven-livid.vercel.app/",
    "Project Overview": `
      A modern web application built using React.js and deployed on Netlify.
`,
    "Key Responsibilities": `
            ✅ Tech Stack: (React, Redux, Tailwind, etc.)
            ✅ Features: (Authentication, API integration, WebSockets, etc.)
            ✅ Backend API Link: (If available)
            ✅ Installation Steps: (if you want setup instructions)

`,
    "Tech Stack": `
         
        🛠 Frontend: React.js, React Router, Redux Toolkit 
        🎨 Styling: Tailwind CSS  / CSS Modules
        🚀 Deployment: Netlify
`,
  },
  {
    category: "Frontend",
    name: "📖 React Note App",
    link: "https://react-notes-app-three.vercel.app/",
    "Project Overview": `
      A modern web application built using React.js and deployed on Netlify.
`,
    "Key Responsibilities": `
            ✅ Tech Stack: (React, Redux, Tailwind, etc.)
            ✅ Features: (Authentication, API integration, WebSockets, etc.)
            ✅ Backend API Link: (If available)
            ✅ Installation Steps: (if you want setup instructions)

`,
    "Tech Stack": `
         
        🛠 Frontend: React.js, React Router, Redux Toolkit 
        🎨 Styling: Tailwind CSS  / CSS Modules
        🚀 Deployment: Netlify
`,
  },
  {
    category: "Frontend",
    name: "🌤️ React Weather App",
    link: "https://the-weather-forecasting.netlify.app/",
    "Project Overview": `
      A modern web application built using React.js and deployed on Netlify.
`,
    "Key Responsibilities": `
            ✅ Tech Stack: (React, Redux, Tailwind, etc.)
            ✅ Features: (Authentication, API integration, WebSockets, etc.)
            ✅ Backend API Link: (If available)
            ✅ Installation Steps: (if you want setup instructions)

`,
    "Tech Stack": `
         
        🛠 Frontend: React.js, React Router, Redux Toolkit 
        🎨 Styling: Tailwind CSS  / CSS Modules
        🚀 Deployment: Netlify
`,
  },
  {
    category: "Frontend",
    name: "🍔 React Restaurant Managment",
    link: "https://restaurant-client-pied.vercel.app/",
    "Project Overview": `
      A modern web application built using React.js and deployed on Netlify.
`,
    "Key Responsibilities": `
            ✅ Tech Stack: (React, Redux, Tailwind, etc.)
            ✅ Features: (Authentication, API integration, WebSockets, etc.)
            ✅ Backend API Link: (If available)
            ✅ Installation Steps: (if you want setup instructions)

`,
    "Tech Stack": `
         
        🛠 Frontend: React.js, React Router, Redux Toolkit 
        🎨 Styling: Tailwind CSS  / CSS Modules
        🚀 Deployment: Netlify
`,
  },
  {
    category: "Frontend",
    name: "🚗  React Car Rental",
    link: "https://rental-car-two-chi.vercel.app/",
    "Project Overview": `
      A modern web application built using React.js and deployed on Netlify.
`,
    "Key Responsibilities": `
            ✅ Tech Stack: (React, Redux, Tailwind, etc.)
            ✅ Features: (Authentication, API integration, WebSockets, etc.)
            ✅ Backend API Link: (If available)
            ✅ Installation Steps: (if you want setup instructions)

`,
    "Tech Stack": `
         
        🛠 Frontend: React.js, React Router, Redux Toolkit 
        🎨 Styling: Tailwind CSS  / CSS Modules
        🚀 Deployment: Netlify
`,
  },
  {
    category: "Frontend",
    name: "📋 React Task  Managment",
    link: "https://task-managment-topaz.vercel.app/tasks?",
    "Project Overview": `
      A modern web application built using React.js and deployed on Netlify.
`,
    "Key Responsibilities": `
            ✅ Tech Stack: (React, Redux, Tailwind, etc.)
            ✅ Features: (Authentication, API integration, WebSockets, etc.)
            ✅ Backend API Link: (If available)
            ✅ Installation Steps: (if you want setup instructions)

`,
    "Tech Stack": `
         
        🛠 Frontend: React.js, React Router, Redux Toolkit 
        🎨 Styling: Tailwind CSS  / CSS Modules
        🚀 Deployment: Netlify
`,
  },
];
