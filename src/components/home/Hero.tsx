
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of Bangalore landmark images
  const bangaloreImages = [
    "/lovable-uploads/fd1029ed-d989-41e5-8056-0c9b1b9371a0.png", // Vidhana Soudha
    "/lovable-uploads/e8f1bb5b-5f7a-4d24-9491-6d6f88e60c99.png", // Gol Gumbaz
    "/lovable-uploads/894a1868-166b-4937-b242-f26ea05ade29.png", // Temple
    "/lovable-uploads/3383ef19-11f7-4852-8c01-58853788384e.png", // UB City Tower
    "/lovable-uploads/12048c57-5809-47ad-af32-f91781d258ea.png", // Traditional performer
    "/lovable-uploads/c21d9983-b636-4c0f-9053-0e3adb5caf88.png", // Airport
    "/lovable-uploads/0f854bfb-e9ca-4d47-824f-d4160aa38f37.png", // Mysore Palace at night
  ];

  // Image captions/credits
  const imageCredits = [
    "Vidhana Soudha - Karnataka's Legislative Building",
    "Gol Gumbaz - Iconic Dome Structure",
    "Ancient Temple Architecture in Karnataka",
    "UB City Tower - Modern Bangalore",
    "Traditional Yakshagana Performer",
    "Kempegowda International Airport",
    "Mysore Palace - Illuminated at Night"
  ];

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bangaloreImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-[85vh]">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 rounded-r-lg">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Bangalore Urban</span>{" "}
                <span className="block gradient-heading xl:inline">Pulse</span>
              </h1>
              <p className="mt-3 text-base text-gray-700 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A comprehensive solution for flood prediction, lake monitoring, and urban planning to build a more sustainable and resilient Bangalore.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/dashboard">
                    <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium">
                      Explore Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/report">
                    <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium">
                      Report an Issue
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Image section with overlay and caption */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-0"></div>
        <img
          className="h-full w-full object-cover transition-opacity duration-1000"
          src={bangaloreImages[currentImageIndex]}
          alt={imageCredits[currentImageIndex]}
        />
        
        {/* Image navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {bangaloreImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Image caption */}
        <div className="absolute bottom-8 right-8 bg-black/60 text-white px-4 py-2 rounded text-sm z-10">
          {imageCredits[currentImageIndex]}
        </div>
      </div>
    </div>
  );
};

export default Hero;
