const CertificateCard = ({ 
  img, 
  title, 
  subtitle, 
  description, 
  date, 
  certificateCode, 
  link,
  downloadName 
}) => {
  const isCompleted = !!certificateCode;

  return (
    <div className="bg-white border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:transform hover:-translate-y-2">
      <div className="flex flex-col sm:flex-row min-h-[320px]">
        
        {/* Image Section */}
        <div 
          className="relative w-full sm:w-96 bg-gray-50"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="relative h-56 sm:h-full overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            
            {/* Status Badge */}
            <div 
              className="absolute top-4 right-4"
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:scale-110 ${
                isCompleted ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'
              }`}>
                {isCompleted ? 'Certified' : 'In Progress'}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div 
          className="flex-1 p-8 flex flex-col justify-between"
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <div className="space-y-4">
            {/* Title & Subtitle */}
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                {title}
              </h3>
              {subtitle && (
                <p className="text-lg text-gray-600 font-medium">{subtitle}</p>
              )}
            </div>

            {/* Date */}
            {date && (
              <div 
                className="inline-flex items-center px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
                data-aos-once="true"
              >
                📅 {date}
              </div>
            )}

            {/* Description */}
            <p 
              className="text-gray-600 leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="600"
              data-aos-once="true"
            >
              {description}
            </p>
          </div>

          {/* Bottom Section */}
          <div 
            className="space-y-4 mt-6"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="700"
            data-aos-once="true"
          >
            {/* Certificate ID */}
            {certificateCode && (
              <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-300">
                <span className="text-sm text-gray-500 font-mono">
                  Certificate ID: {certificateCode}
                </span>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                >
                  🔗 View Certificate
                </a>
              )}
              
              <a
                href={img}
                download={downloadName}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
              >
                📥 Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;


