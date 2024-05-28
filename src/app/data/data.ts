export const data = {
    header: {
      name: ["samuel", "osoata"],
      links: [
          {
              name: "about",
              link_to: "/",
          },
          {
              name: "projects",
              link_to: "/projects",
          },
          {
              name: "services",
              link_to: "/services",
          },
          
          {
              name: "contact",
              link_to: "/contact",
          },
      ]
    },
    about: {
      image: '/assets/sam.jpeg',
      name: ['Samuel', 'Osoata'],
      profession: 'Hello, I am Samuel, a second-year Software Engineering student at Centennial College. My journey into the world of software development has been both challenging and rewarding, as I continue to build upon my foundational knowledge and skills in this dynamic field.',
      cv: '/assets/resume.pdf'
    },
    projects: [
        {
            title: "project1",
            description: 'This project is aabout centennial college application form for new student intending to study in the college.',
            img: "/assets/project1.jpg",
            link: "../src/assignment4/index.html",
           
            technologies: "React-Navtive & Firebase",
        },
      {
          title: "Project2",
          description: 'This project is about protected areas of the world. Protected area is a designated location that has been preserved for its ecological, natural and/or cultural values.  ',
          img: "/assets/project2.jpg",
          link: "../src/assignment2/index.html",
         
          technologies: "TypeScript, NextJS, & TailwindCSS",
      },
      {
          title: "Project3",
          description: 'This project is aabout DELL 12.3" Latitude 5290 Multi-Touch 2-in-1 Laptop PC Windows 10 Pro (No Keyboard).',
          img: "/assets/project3.jpg",
          link: "../src/assignment3/index.html",
          
          technologies: "React Native, Firebase, & TailwindCSS",
      },
    ],
    services: [
        {
            service_title: 'Custom Software Development',
            description: 'I design and build tailored software solutions to meet the unique requirements of businesses.',
        },
        {
            service_title: 'Web Development',
            description: 'This involves creating and maintaining websites and web applications',
        },
        {
            service_title: 'Mobile App Development',
            description: 'develop mobile applications for iOS, Android, and other platforms..',
        },
        {
            service_title: 'Software Maintenance and Support',
            description: 'Post-development, software engineers provide ongoing maintenance.',
        },
        {
            service_title: 'System Integration',
            description: ' I integrate different software systems and applications to work together seamlessly.',
        },
        {
            service_title: 'Cloud Computing Services',
            description: 'I help businesses transition to and utilize cloud platforms such as AWS, Google Cloud, or Azure.',
        },
    ],
    
    contact: [
      {
          type: "Email",
          link: "com2samy112@gmail.com",
          username: "com2samy112@gamil.com",
      },
      {
          type: "X (FKA Twitter)",
          link: "https://x.com/ehis_samy",
          username: "Samuel Osoata"
      },
      {
          type: "LinkedIn",
          link: "https://www.linkedin.com/in/samuel-osoata-0157b0253/",
          username: "Samuel Osoata"
      },
    ],
    socials: [
      {
          type: "linkedin",
          link: "https://www.linkedin.com/samuel-osoata",
      },
      {
          type: "twitter",
          link: "https://x.com/ehis_samy",
      },
      {
          type: "github",
          link: "https://github.com/samcent112/portfolio_project_react",
      },
      {
          type: "instagram",
          link: "https://instagram.com/selandrealestate",
      },
    ]
  };