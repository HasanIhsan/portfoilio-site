// scripts/portfolio.js
export const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      img: "../assets/images/legato_logo.png", 
      style: { color: "#F79F1B" },
      profileLink: "https://leetcode.com/yourusername/"
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      img: "../assets/images/legato_logo.png", 
      style: { color: "#2EC866" },
      profileLink: "https://www.hackerrank.com/yourprofile"
    }
    // Add more as needed
  ]
};

export const degrees = {
  degrees: [
    {
      title: "Your University Name",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "microsoft_logo.png", 
      alt_name: "University Short Name",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Relevant coursework: Data Structures, Algorithms, Database Systems",
        "⚡ Achievements: Dean's List, Academic Scholarships",
        "⚡ Activities: Coding Club President, Hackathon Organizer"
      ],
      website_link: "https://universitywebsite.com"
    }
    // Add more degrees if needed
  ]
};

// We'll add certifications later when you're ready
export const certifications = {
  certifications: [
    {
      title: "Example Certification",
      subtitle: "Issued by Example Org",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://example.com/certificate",
      alt_name: "Example Org",
      color_code: "#2EC866"
    }
    // Add more certifications as needed
  ]
};

export const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "../assets/images/legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description: "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf"
        },
       //add more work experiences as needed
      ]
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "../assets/images/delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description: "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26"
        },
       //add more internship experiences as needed
      ]
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "../assets/images/google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description: "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4"
        },
         {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "../assets/images/google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description: "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4"
        }, 
       //add more volunteership experiences as needed
      ]
    }
  ]
};