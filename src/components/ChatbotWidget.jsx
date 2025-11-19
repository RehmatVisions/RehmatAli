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
        <div className="fixed bottom-2 right-4 sm:right-6 md:right-8 w-[90vw] sm:w-96 h-[100vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden ">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                <img src={chatIcon} alt="Chat" className="w-full h-full object-contain" />
              </div>
             
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300 text-2xl font-bold"
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
        className={`fixed bottom-22 right-6 sm:right-6 md:right-4 w-20 h-20 sm:w-16 sm:h-16 rounded-full 
                    bg-white
                    shadow-lg hover:shadow-2xl 
                    flex items-center justify-center 
                    transition-all duration-300 
                    hover:scale-110 active:scale-95
                    z-50 cursor-pointer p-3
                    ${isOpen ? 'rotate-0' : 'animate-pulse'}`}
        aria-label="Open Chat"
      >
        {isOpen ? (
          <span className="text-purple-500 text-3xl font-bold">×</span>
        ) : (
          <img src={chatIcon} alt="Chat" className="w-full h-full object-contain" />
        )}
      </button>
    </>
  );
};

export default ChatbotWidget;
