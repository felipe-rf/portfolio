import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 "
    >
      <div className="max-w-5xl w-full text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center mb-8">
            {/* Profile Image */}
            <div className="shrink-0 order-1 md:order-0">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl outline-10 outline-white/70 bg-gray-300/80 backdrop-blur-sm overflow-hidden">
                <img
                  src="/portfolio/HandsomeGuy.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col lg:items-start text-left mds:items-center">
              <h1 className="text-4xljustify-start md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white">
                Felipe Ferreira
              </h1>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-6 md:mb-8">
                <div className="px-4 py-2 md:px-6 md:py-3 bg-gray-300/80 backdrop-blur-sm rounded-full text-gray-900 font-medium text-sm md:text-base">
                  Front-End
                </div>
                <div className="px-4 py-2 md:px-6 md:py-3 bg-gray-300/80 backdrop-blur-sm rounded-full text-gray-900 font-medium text-sm md:text-base">
                  DevOps
                </div>
                <div className="px-4 py-2 md:px-6 md:py-3 bg-gray-300/80 backdrop-blur-sm rounded-full text-gray-900 font-medium text-sm md:text-base">
                  GameDev
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl md:max-w-3xl mx-auto px-4 md:px-0">
              I'm a Software Engineering student with knowledge about building
              modern web applications and fun game experiences. I enjoy working
              across the full stack: from intuitive front-end interfaces to
              scalable back-end solutions and DevOps workflows.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 rounded-2xl bg-gray-300/80 backdrop-blur-sm flex items-center justify-center animate-bounce">
            <ChevronDown size={32} className="text-gray-900" />
          </div>
        </div>
      </div>
    </section>
  );
}
