
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
                
                {/* Marketing Analytics Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  <Card className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors">Customer Segmentation Analysis</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Advanced RFM analysis and behavioral segmentation using Python and SQL, resulting in 28% improvement in targeted campaign performance.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Python</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">RFM Analysis</span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Clustering</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                        <Code className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-green-600 transition-colors">Marketing Mix Modeling</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Built statistical models to optimize $5M+ media spend across channels, improving overall marketing ROI by 15% through data-driven budget allocation.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">Statistical Modeling</span>
                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">Media Mix</span>
                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">ROI Optimization</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <Cpu className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-purple-600 transition-colors">Predictive Analytics Engine</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Developed machine learning models for customer lifetime value prediction and churn forecasting, achieving 85% accuracy in behavior prediction.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Machine Learning</span>
                        <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">CLV Modeling</span>
                        <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Churn Prediction</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                        <ArrowRight className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors">Multi-Touch Attribution</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Implemented advanced attribution modeling to track customer journeys across 12+ touchpoints, optimizing marketing spend allocation and improving conversion rates by 22%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-full text-xs">Attribution Modeling</span>
                        <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-full text-xs">Customer Journey</span>
                        <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-full text-xs">Conversion Optimization</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-red-600 transition-colors">Campaign Performance Analytics</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        <strong>Problem:</strong> Measuring the effectiveness of multi-channel campaigns can be challenging without consolidated insights.
                        <br /><strong>Approach:</strong> Combined data from Google Ads, Meta Ads, and Email using SQL. Built an interactive Tableau dashboard to monitor ROI and channel attribution.
                        <br /><strong>Impact:</strong> Optimized budget allocation, improving conversion rate by 15%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">Multi-Channel</span>
                        <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">Tableau</span>
                        <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">ROI Analysis</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                        <ArrowRight className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-indigo-600 transition-colors">Conversion Funnel Analysis</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        <strong>Problem:</strong> Businesses often struggle to understand where users drop off in the conversion journey.
                        <br /><strong>Approach:</strong> Created a funnel visualization using Python (Pandas, Seaborn). Conducted cohort analysis to track stage-wise performance.
                        <br /><strong>Impact:</strong> Identified a 40% drop-off at sign-up stage; simplification increased completions by 12%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">Python</span>
                        <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">Cohort Analysis</span>
                        <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">Funnel Optimization</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                        <Code className="w-6 h-6 text-pink-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-pink-600 transition-colors">A/B Testing Framework</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        <strong>Problem:</strong> Marketing teams risk poor decisions without evidence-based testing.
                        <br /><strong>Approach:</strong> Designed an A/B testing process using Python (SciPy, StatsModels). Visualized experiment results in Tableau for leadership reporting.
                        <br /><strong>Impact:</strong> Winning variant improved email open rates by 18% and sign-ups by 10%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">A/B Testing</span>
                        <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">Statistical Analysis</span>
                        <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">Python</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                        <Code className="w-6 h-6 text-teal-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-teal-600 transition-colors">Real-Time Analytics Dashboard</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Built automated ETL pipelines and interactive dashboards using Power BI and Python, reducing manual reporting time by 40 hours monthly while improving data accuracy.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">ETL Automation</span>
                        <span className="px-2 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">Power BI</span>
                        <span className="px-2 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">Data Visualization</span>
                      </div>
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
