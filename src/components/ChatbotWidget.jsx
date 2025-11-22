import { useState } from 'react';
import chatIcon from '../images/chat.png';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 md:right-6 lg:right-8 
                        w-full h-full sm:w-[400px] sm:h-[600px] md:w-[420px] md:h-[650px] lg:w-[440px] lg:h-[700px]
                        sm:max-h-[85vh] sm:rounded-2xl
                        bg-white shadow-2xl z-[9999] flex flex-col overflow-hidden
                        animate-[slideUp_0.3s_ease-out]">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white 
                          p-3 sm:p-4 flex items-center justify-between
                          shadow-md">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center p-1.5 sm:p-2
                              shadow-sm ring-2 ring-white/30">
                <img src={chatIcon} alt="Chat" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-semibold">Chat Assistant</span>
                <span className="text-xs text-white/80">Online</span>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white/20 rounded-full 
                         w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center
                         transition-all duration-300 text-2xl sm:text-3xl font-bold
                         hover:rotate-90"
              aria-label="Close Chat"
            >
              ×
            </button>
          </div>

          {/* Chat iframe */}
          <div className="flex-1 ">
            <iframe
              src="https://app.rubikchat.com/chat/YAPer2MrlHASNtGpjbNGPn5N"
              className="w-full h-full border-0"
              title="Rehmat Ali Chatbot"
              allow="microphone"
            />
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`fixed 
                    bottom-4 right-4 
                    sm:bottom-5 sm:right-5 
                    md:bottom-6 md:right-6 
                    lg:bottom-8 lg:right-8
                    w-14 h-14 
                    sm:w-16 sm:h-16 
                    md:w-[68px] md:h-[68px]
                    lg:w-[72px] lg:h-[72px]
                    rounded-full 
                    bg-white
                    shadow-lg hover:shadow-2xl 
                    flex items-center justify-center 
                    transition-all duration-300 
                    hover:scale-110 active:scale-95
                    z-[9998] cursor-pointer 
                    group
                    ${isOpen ? 'rotate-0' : 'animate-bounce'}
                    ring-4 ring-purple-200/50 hover:ring-purple-300/70`}
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        {isOpen ? (
          <span className="text-purple-600 text-3xl sm:text-4xl font-bold 
                           transition-transform duration-300 group-hover:rotate-90">
            ×
          </span>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center p-2.5 sm:p-3 md:p-3.5">
            <img 
              src={chatIcon} 
              alt="Chat" 
              className="w-full h-full object-contain
                         transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-green-400 rounded-full 
                             border-2 border-white animate-pulse"></span>
          </div>
        )}
      </button>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default ChatbotWidget
