// Adding clickable links to features for main navigation redirection

import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import CallToAction from "@/components/home/CallToAction";
import { Droplet, Building2, BarChart2, Camera, Info, Waves as Lake } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const onFeatureClick = (path: string) => {
    navigate(path);
  };

  const features = [
    { name: "Flood Prediction", description: "ML-based prediction using rainfall and drainage data with real-time alerts.", path: "/flood-prediction", icon: Droplet },
    { name: "Lake Monitoring", description: "Track lake health, water levels, and detect encroachments using GIS data.", path: "/lake-monitoring", icon: Lake },
    { name: "Urban Planning", description: "Analyze zoning maps and identify safe zones for sustainable development.", path: "/urban-planning", icon: Building2 },
    { name: "Data Dashboard", description: "Comprehensive visualization of environmental metrics for informed decision-making.", path: "/dashboard", icon: BarChart2 },
    { name: "Citizen Reporting", description: "Upload photos and report issues to help authorities track urban challenges.", path: "/report", icon: Camera },
    { name: "About Project", description: "Learn about our mission, technology stack, and the team behind Karnataka Urban Pulse.", path: "/about", icon: Info },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16"> {/* pt-16 to account for fixed navbar */}
        <Hero />
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-karnataka-metro-medium font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                A comprehensive urban management system
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
                Our platform combines data analytics, GIS mapping, and machine learning to address Karnataka's urban challenges.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    onClick={() => onFeatureClick(feature.path)}
                    className="cursor-pointer border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-3">
                      <feature.icon className="w-6 h-6 text-karnataka-metro-medium mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.name}</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Stats />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
