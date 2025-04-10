
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { BarChart3, CloudRain, Droplet, Building, Filter, AlertTriangle, Calendar, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState("bengaluru");
  
  const regions = [
    { id: "bengaluru", name: "Bengaluru" },
    { id: "mysuru", name: "Mysuru" },
    { id: "hubli", name: "Hubli-Dharwad" },
    { id: "mangaluru", name: "Mangaluru" },
    { id: "belgaum", name: "Belgaum" },
  ];

  // Dummy alerts for the dashboard
  const alerts = [
    {
      id: 1,
      type: "Flooding",
      area: "Koramangala, Bengaluru",
      severity: "High",
      description: "Heavy rainfall causing flash floods. Avoid low-lying areas.",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "Lake Encroachment",
      area: "Bellandur Lake",
      severity: "Critical",
      description: "New construction detected in lake buffer zone. Investigation underway.",
      time: "Yesterday",
    },
    {
      id: 3,
      type: "Water Quality",
      area: "Varthur Lake",
      severity: "Moderate",
      description: "High levels of pollutants detected. Water treatment required.",
      time: "2 days ago",
    },
    {
      id: 4,
      type: "Urban Planning",
      area: "Whitefield, Bengaluru",
      severity: "Low",
      description: "Unplanned development may lead to drainage issues. Planning review recommended.",
      time: "1 week ago",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "High":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 pb-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Karnataka Urban Pulse Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Comprehensive view of urban management metrics
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.id} value={region.id}>
                      {region.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              title="Rainfall Today"
              description="Average across region"
              icon={CloudRain}
              iconColor="text-karnataka-rain-medium"
            >
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">32.4</span>
                <span className="text-gray-500 dark:text-gray-400">mm</span>
              </div>
              <p className="text-sm text-red-500 mt-1">
                65% above average for June
              </p>
            </DashboardCard>

            <DashboardCard
              title="Lake Health Index"
              description="Average across monitored lakes"
              icon={Droplet}
              iconColor="text-karnataka-lake-medium"
            >
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">62</span>
                <span className="text-gray-500 dark:text-gray-400">/100</span>
              </div>
              <p className="text-sm text-yellow-500 mt-1">
                Moderate health, issues in 8 lakes
              </p>
            </DashboardCard>

            <DashboardCard
              title="Green Cover"
              description="Percentage of urban area"
              icon={Building}
              iconColor="text-karnataka-park-medium"
            >
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">18.2</span>
                <span className="text-gray-500 dark:text-gray-400">%</span>
              </div>
              <p className="text-sm text-red-500 mt-1">
                Below target of 25%
              </p>
            </DashboardCard>

            <DashboardCard
              title="Air Quality Index"
              description="Average across monitoring stations"
              icon={Filter}
              iconColor="text-karnataka-metro-medium"
            >
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">124</span>
                <span className="text-gray-500 dark:text-gray-400">AQI</span>
              </div>
              <p className="text-sm text-orange-500 mt-1">
                Unhealthy for sensitive groups
              </p>
            </DashboardCard>
          </div>

          <Tabs defaultValue="alerts" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
              <TabsTrigger value="flood">Flood Prediction</TabsTrigger>
              <TabsTrigger value="lakes">Lake Monitoring</TabsTrigger>
              <TabsTrigger value="urban">Urban Planning</TabsTrigger>
            </TabsList>
            
            <TabsContent value="alerts">
              <DashboardCard
                title="Recent Alerts & Notifications"
                description="Critical updates from across Karnataka"
                icon={AlertTriangle}
                iconColor="text-amber-500"
              >
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-base font-medium text-gray-900 dark:text-white">
                            {alert.type}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {alert.area}
                          </p>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {alert.description}
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {alert.time}
                        </span>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </DashboardCard>
            </TabsContent>
            
            <TabsContent value="flood">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DashboardCard
                  title="Flood Prediction Map"
                  description="Flood risk areas in Bengaluru"
                  icon={MapPin}
                  iconColor="text-karnataka-rain-dark"
                >
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                    <img
                      src="https://via.placeholder.com/800x450?text=Flood+Prediction+Map"
                      alt="Flood Prediction Map"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </DashboardCard>

                <DashboardCard
                  title="Rainfall Forecast"
                  description="Predicted rainfall for next 5 days"
                  icon={Calendar}
                  iconColor="text-karnataka-rain-medium"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Today</span>
                      <div className="flex items-center space-x-2">
                        <CloudRain className="h-4 w-4 text-karnataka-rain-medium" />
                        <span>25-35 mm</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tomorrow</span>
                      <div className="flex items-center space-x-2">
                        <CloudRain className="h-4 w-4 text-karnataka-rain-medium" />
                        <span>30-40 mm</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Day 3</span>
                      <div className="flex items-center space-x-2">
                        <CloudRain className="h-4 w-4 text-karnataka-rain-medium" />
                        <span>15-25 mm</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Day 4</span>
                      <div className="flex items-center space-x-2">
                        <CloudRain className="h-4 w-4 text-karnataka-rain-medium" />
                        <span>10-20 mm</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Day 5</span>
                      <div className="flex items-center space-x-2">
                        <CloudRain className="h-4 w-4 text-karnataka-rain-medium" />
                        <span>5-15 mm</span>
                      </div>
                    </div>
                  </div>
                </DashboardCard>
              </div>
            </TabsContent>
            
            <TabsContent value="lakes">
              <DashboardCard
                title="Lake Health Overview"
                description="Status of major lakes in Karnataka"
              >
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    Detailed lake health data will be displayed here.
                  </p>
                </div>
              </DashboardCard>
            </TabsContent>
            
            <TabsContent value="urban">
              <DashboardCard
                title="Urban Development Metrics"
                description="Key urban planning and development indicators"
              >
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    Urban development data will be displayed here.
                  </p>
                </div>
              </DashboardCard>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
