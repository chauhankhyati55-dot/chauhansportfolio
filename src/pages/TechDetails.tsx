
import { ArrowLeft, ArrowRight, FileText, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const TechDetails = () => {
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0);

  // Animate progress bar on component mount
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-3xl sm:text-4xl font-bold mb-6">
              Marketing Analytics Portfolio
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-base sm:text-lg text-gray-600 mb-12">
                Explore my comprehensive marketing analytics work including advanced Power BI dashboards, attribution modeling, and data-driven insights that have driven measurable business results.
              </motion.p>
              
              {/* System Architecture Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Power BI Dashboards & Analytics</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  Comprehensive marketing analytics dashboards built in Power BI, showcasing customer behavior analysis, attribution modeling, and campaign performance metrics.
                </p>

                {/* Progress bar showing flow */}
                <div className="w-full mb-6">
                  
                  
                </div>
                
                {/* Power BI Dashboards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <Card className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Customer Analytics Dashboard</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Comprehensive customer behavior analysis including segmentation, lifetime value, and retention metrics.
                      </p>
                      <a 
                        href="https://app.powerbi.com/groups/me/reports/3bfb9103-c0fd-43b5-aad1-6293f3fa6eb1/ad7424f2fef47d5dd729?experience=power-bi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        View Dashboard
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">Marketing Attribution Model</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Advanced attribution modeling to track multi-touch customer journeys and optimize marketing spend.
                      </p>
                      <a 
                        href="https://app.powerbi.com/groups/me/reports/ce16edfa-f64e-47f0-861b-0290596e119f/ReportSectionb621f12070647be09138?experience=power-bi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        View Model
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
              
              {/* Our Approach Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">My Approach</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  My analytical methodology combines advanced statistical modeling with business acumen to deliver actionable insights. 
                  From data collection to strategic recommendations, I ensure every analytics initiative drives measurable business impact.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[{
                  title: "Data Collection & Analysis",
                  icon: <Cpu className="w-5 h-5 text-gray-700" />,
                  description: "Comprehensive data gathering from multiple sources including web analytics, CRM systems, and marketing platforms for holistic insights."
                }, {
                  title: "Modeling & Visualization",
                  icon: <Code className="w-5 h-5 text-gray-700" />,
                  description: "Advanced predictive modeling and interactive dashboard creation using Power BI, Python, and statistical techniques."
                }, {
                  title: "Implementation & Optimization",
                  icon: <FileText className="w-5 h-5 text-gray-700" />,
                  description: "Strategic recommendations implementation with continuous monitoring and optimization to maximize ROI and business impact."
                }].map((phase, i) => <motion.div key={phase.title} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.1
                }} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        {phase.icon}
                        <h3 className="font-semibold text-lg">{phase.title}</h3>
                      </div>
                      <p className="text-gray-600 text-base">{phase.description}</p>
                    </motion.div>)}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/blog" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Explore Marketing Analytics Insights
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechDetails;
