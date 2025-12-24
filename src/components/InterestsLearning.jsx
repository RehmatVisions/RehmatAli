import { useState, useEffect } from 'react';

const InterestsLearning = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Interests data with modern AI tools and technologies
  const interests = [
    {
      id: 'generative-ai',
      title: 'Generative AI',
      description: 'Exploring cutting-edge AI technologies, large language models, and their practical applications in modern development workflows.',
      icon: '🤖',
      gradient: 'from-blue-500 to-purple-600',
      certificateLink: 'https://simpli-web.app.link/e/U5GEIcKmbZb',
      skills: ['ChatGPT', 'Claude', 'Gemini', 'AI Integration', 'LLM Applications']
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering',
      description: 'Mastering the art of crafting effective prompts for AI systems to maximize output quality and achieve desired results.',
      icon: '✨',
      gradient: 'from-purple-500 to-pink-600',
      certificateLink: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MjgzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTYyNTIyNV85ODg1MDEwXzE3NjY0MzQwNzczNjYucG5nIiwidXNlcm5hbWUiOiJSZWhtYXQgQWxpIn0&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion',
      skills: ['Advanced Prompting', 'Chain-of-Thought', 'Few-Shot Learning', 'Prompt Optimization']
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      description: 'Building intelligent automation workflows using modern tools to streamline processes and enhance productivity.',
      icon: '⚡',
      gradient: 'from-green-500 to-blue-600',
      certificateLink: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODcyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTYxNzE5OV85ODgxMzE1MTc2NjMwNzU5NTg1My5wbmciLCJ1c2VybmFtZSI6IlJlaG1hdCBBbGkifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion',
      skills: ['N8N Workflows', 'Process Automation', 'API Integration', 'Workflow Design']
    },
    {
      id: 'modern-ai-tools',
      title: 'Modern AI Tools',
      description: 'Leveraging cutting-edge AI-powered development tools to enhance coding efficiency and project quality.',
      icon: '🛠️',
      gradient: 'from-orange-500 to-red-600',
      certificateLink: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODcyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTYxNzE5OV85ODgxMzE1MTc2NjMwNzU5NTg1My5wbmciLCJ1c2VybmFtZSI6IlJlaG1hdCBBbGkifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion',
      skills: ['Cursor IDE', 'Kiro AI', 'GitHub Copilot', 'AI-Assisted Development']
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % interests.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, interests.length]);

  const handleCertificateClick = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % interests.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + interests.length) % interests.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-8">
      {/* Header */}
      <div 
        className="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Interests & Learning
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          I am deeply interested in AI Automation, Generative AI, and modern development tools. 
          Currently in the learning stage but actively exploring and building projects in these areas.
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Carousel */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {interests.map((interest, index) => (
              <div
                key={interest.id}
                className="w-full flex-shrink-0 relative"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-90`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Animated Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-20 left-20 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
                    <div className="absolute bottom-10 right-10 w-2 h-2 bg-white/25 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8 sm:p-12 text-white min-h-[400px] flex flex-col justify-center">
                  <div className="text-center">
                    {/* Icon with Animation */}
                    <div className="text-6xl sm:text-8xl mb-6 animate-bounce">
                      {interest.icon}
                    </div>

                    {/* Learning Stage Badge */}
                    <div className="mb-6">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30 animate-pulse">
                        Learning Stage
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
                      {interest.title}
                    </h4>

                    {/* Description */}
                    <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto opacity-90">
                      {interest.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="mb-8">
                      <div className="flex flex-wrap justify-center gap-3">
                        {interest.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${skillIndex * 100}ms` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate Button */}
                    <button
                      onClick={() => handleCertificateClick(interest.certificateLink)}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"
                    >
                      🏆 <span>View Certificate</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {interests.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-purple-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-all duration-300"
          >
            {isAutoPlaying ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Play
              </>
            )}
          </button>
        </div>
      </div>

      {/* Learning Journey Section */}
      <div 
        className="mt-16 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="600"
        data-aos-once="true"
      >
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 max-w-4xl mx-auto">
          <h4 className="text-xl font-bold text-gray-900 mb-3">
            🚀 Continuous Learning Journey
          </h4>
          <p className="text-gray-600 text-sm">
            Actively expanding expertise through hands-on projects, online courses, and practical implementations. 
            Each interest area represents an active learning path with real-world applications and ongoing skill development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterestsLearning;