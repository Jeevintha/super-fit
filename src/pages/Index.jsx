import Button from "../components/Button";
import { Link } from "react-router-dom";


const Index = () => {
  return (
    <div className=" relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-500 to-blue-800 animate-gradient-x">

      <div className="container mx-auto px-4">
        <div className="py-32 md:py-40 text-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                SuperFit
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Track your workouts, monitor your progress, and achieve your fitness goals 
              with our intuitive workout tracking system.
            </p>
            <div className="space-x-4 flex justify-center items-center">
              <Link to="/track">
                <Button 
                  size="lg" 
                  className="bg-blue-600 text-white hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/about">
              <Button 
                variant="outline"
                size="lg"
                className="text-blue-600 border-white hover:bg-blue-500 hover:text-white backdrop-blur-sm transform hover:scale-105 transition-all"
              >
                Learn More
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;