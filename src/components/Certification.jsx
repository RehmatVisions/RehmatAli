import CertificateCard from './subcomponents/CertificateCard';

// Import certificate images
import zaff from '../images/zaff.png';
import rehmatGenAI from '../images/rehmatGenAI.png';
import eduGemini from '../images/eduGemini.png';
import automation from '../images/automation.png';
import navttac from '../images/nsis.png';
import webAI from '../images/webAI.png';
import prompt from '../images/prompt.png';

const Certification = () => {
  // Certificate data
  const certificates = [
    {
      img: zaff,
      title: "Zaff Institute - MERN Stack",
      subtitle: "Full Stack Web Development Certification",
      description: "A skill-based MERN Stack program focused on practical web development using MongoDB, Express, React, and Node.js.",
      date: "2025",
      certificateCode: "ZAFF2025",
      downloadName: "zaff-certificate.jpg"
    },
    {
      img: rehmatGenAI,
      title: "Google Cloud - Generative AI",
      subtitle: "Introduction to Generative AI",
      description: "Successfully completed Google Cloud's Introduction to Generative AI course demonstrating commitment to AI skills.",
      date: "December 2025",
      certificateCode: "9600701",
      link: "https://simpli-web.app.link/e/U5GEIcKmbZb",
      downloadName: "google-cloud-generative-ai-certificate.png"
    },
    {
      img: webAI,
      title: "Simplilearn - Web AI Development",
      subtitle: "Artificial Intelligence for Web Development",
      description: "Successfully completed Web AI Development course from Simplilearn and built several projects using Cursor AI and Kiro AI tools to create intelligent websites with AI-powered features.",
      date: "December 2025",
      certificateCode: "9617199",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODcyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTYxNzE5OV85ODgxMzE1MTc2NjMwNzU5NTg1My5wbmciLCJ1c2VybmFtZSI6IlJlaG1hdCBBbGkifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion",
      downloadName: "simplilearn-web-ai-certificate.png"
    },
    {
      img: prompt,
      title: "Simplilearn - Prompt Engineering",
      subtitle: "Advanced Prompt Engineering Techniques",
      description: "Mastered advanced prompt engineering techniques for AI systems, including prompt optimization, chain-of-thought reasoning, and effective AI communication strategies.",
      date: "December 2025",
      certificateCode: "9625225",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MjgzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTYyNTIyNV85ODg1MDEwXzE3NjY0MzQwNzczNjYucG5nIiwidXNlcm5hbWUiOiJSZWhtYXQgQWxpIn0&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion",
      downloadName: "simplilearn-prompt-engineering-certificate.png"
    },
    {
      img: eduGemini,
      title: "Gemini University Student Certificate",
      subtitle: "Google for Education",
      description: "Completed Gemini University Student certification covering Generative AI fundamentals, responsible AI use, and practical applications.",
      date: "December 2025",
      certificateCode: "AP42f9d8",
      link: "https://edu.google.accredible.com/35b59369-a60f-4d2d-aba9-371a2045bac3#acc.AP42f9d8",
      downloadName: "gemini-university-student-certificate.png"
    },
    {
      img: automation,
      title: "AI Automation & Chatbot Development",
      subtitle: "Idyllic Youth Society Recognition",
      description: "Recognized for learning AI automation and chatbot development through workshops. Built and integrated chatbot into portfolio.",
      date: "2025",
      certificateCode: "IYS2025",
      downloadName: "idyllic-youth-society-recognition.png"
    },
    {
      img: navttac,
      title: "NAVTTC - Web Development",
      subtitle: "Certificate in Progress",
      description: "Government-recognized training program focused on MERN stack technologies and professional workflow training.",
      date: "2025",
      downloadName: "navttc-certificate.jpg"
    }
  ];

  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div 
        className="text-center mb-8 sm:mb-16"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Professional Certifications
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Showcasing my commitment to continuous learning and professional development
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="space-y-4 sm:space-y-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 150}
            data-aos-once="true"
          >
            <CertificateCard {...cert} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
