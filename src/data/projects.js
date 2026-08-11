const projects = [
  {
    id: 1,
    featured: true,
    category: "Web",

    title: "Mantoux Management System",

    description:
      "Aplikasi manajemen pasien Tuberkulosis berbasis React yang memiliki Dashboard, Authentication, Data Pasien, serta integrasi REST API.",

    image:`${import.meta.env.BASE_URL}projects/mantoux.png`,

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "REST API",
    ],

    github: "https://github.com/Dhani009/mantoux_app",

    demo: "#",

    status: "Completed",
  },

  {
    id: 2,
    featured: false,
    category: "Web",

    title: "Personal Portfolio",

    description:
      "Website portfolio modern menggunakan React, Framer Motion, dan Tailwind CSS dengan animasi interaktif.",

    image:`${import.meta.env.BASE_URL}projects/portfolio.png`,

    technologies: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
    ],

    github: "https://github.com/Dhani009/Portfolio",

    demo: "#",

    status: "In Progress",
  },

  {
    id: 3,
    featured: false,
    category: "Game",

    title: "Kebo Blayon",

    description:
      "Game edukasi Android berbasis Unity dengan Voice Recognition untuk membantu pembelajaran bahasa Jawa.",

    image: `${import.meta.env.BASE_URL}projects/kebo.png`,

    technologies: [
      "Unity",
      "C#",
      "Android",
    ],

    github: "https://github.com/Dhani009/kebo_blayon",

    demo: "#",

    status: "Completed",
  },

  {
    id: 4,
    featured: false,
    category: "Web",

    title: "CRUD Data Mahasiswa",

    description:
      "Website CRUD menggunakan React dan REST API untuk mengelola data mahasiswa.",

    image: `${import.meta.env.BASE_URL}projects/crud.png`,

    technologies: [
      "React",
      "NodeJS",
      "MySQL",
    ],

    github: "#",

    demo: "#",

    status: "Completed",
  },

  {
    id: 5,
    featured: false,
    category: "Mobile",

    title: "Laundry App",

    description:
      "Aplikasi mobile untuk mengelola transaksi laundry dengan tampilan sederhana dan responsif.",

    image: "/projects/laundry.png",

    technologies: [
      "Flutter",
      "Firebase",
    ],

    github: "#",

    demo: "#",

    status: "Completed",
  },

  {
    id: 6,
    featured: false,
    category: "Web",

    title: "Company Profile",

    description:
      "Website company profile modern dengan desain responsive dan SEO friendly.",

    image: "/projects/company.png",

    technologies: [
      "React",
      "Tailwind",
    ],

    github: "#",

    demo: "#",

    status: "Completed",
  },
];

export default projects;