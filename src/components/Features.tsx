import { useEffect, useRef, useState } from 'react';
import { Activity, Shield, HardHat, Zap, ArrowRight, Box, Truck, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, RefreshCcw, MessageSquare, BarChart, TrendingUp, Target } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useScrollHijack } from '@/hooks/useScrollHijack';
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";
import campaignAnalytics from "@/assets/campaign-analytics.jpg";
import customerAnalytics from "@/assets/customer-analytics.jpg";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const hijackSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Activity className="w-12 h-12 text-white transition-transform duration-300 transform" />,
      title: "Data Visualization",
      description: "Expert in Power BI, Tableau, and Looker to create interactive dashboards that transform complex data into clear, actionable insights.",
      image: "/lovable-uploads/6c6f1e0c-0659-4cf4-b049-320cb535eff3.png"
    },
    {
      icon: <Shield className="w-12 h-12 text-white transition-transform duration-300 transform" />,
      title: "Predictive Analytics", 
      description: "Advanced modeling using Python, R, and machine learning algorithms to forecast customer behavior and business outcomes with 85% accuracy.",
      image: "/lovable-uploads/6c6f1e0c-0659-4cf4-b049-320cb535eff3.png"
    },
    {
      icon: <HardHat className="w-12 h-12 text-white transition-transform duration-300 transform" />,
      title: "Campaign Optimization",
      description: "A/B testing and marketing mix modeling to maximize ROI, improve conversion rates, and optimize media spend allocation.",
      image: "/lovable-uploads/6c6f1e0c-0659-4cf4-b049-320cb535eff3.png"
    },
    {
      icon: <Zap className="w-12 h-12 text-white transition-transform duration-300 transform" />,
      title: "Business Intelligence",
      description: "Strategic data analysis and reporting that drives decision-making across global teams and supports product lifecycle management.",
      image: "/lovable-uploads/6c6f1e0c-0659-4cf4-b049-320cb535eff3.png"
    }
  ];

  const { isHijacked, currentIndex } = useScrollHijack(hijackSectionRef, features.length);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const skillCaseStudies = [{
    image: analyticsDashboard,
    title: "Campaign Performance Analytics",
    description: "Real-time dashboards tracking KPIs, engagement metrics, and conversion rates enabling data-driven marketing decisions."
  }, {
    image: customerAnalytics,
    title: "Customer Segmentation",
    description: "Advanced segmentation analysis on multi-million record datasets to identify high-value customer groups and optimize targeting."
  }, {
    image: campaignAnalytics,
    title: "Predictive Modeling",
    description: "Machine learning models for customer lifetime value prediction, churn analysis, and revenue forecasting with proven accuracy."
  }];
  const stepFlowItems = [{
    icon: <BarChart className="h-10 w-10 text-gray-700" />,
    title: "Data Collection & Integration",
    description: "Comprehensive data gathering from multiple marketing channels and platforms"
  }, {
    icon: <TrendingUp className="h-10 w-10 text-gray-700" />,
    title: "Advanced Analytics & Modeling",
    description: "Statistical analysis and machine learning models for actionable insights"
  }, {
    icon: <Target className="h-10 w-10 text-gray-700" />,
    title: "Strategy & Implementation",
    description: "Translating insights into actionable strategies and campaign optimization"
  }];
  const sprintPhases = [{
    name: "Planning",
    icon: <CheckCircle className="h-4 w-4" />
  }, {
    name: "Development",
    icon: <Code className="h-4 w-4" />
  }, {
    name: "Testing",
    icon: <Box className="h-4 w-4" />
  }, {
    name: "Review",
    icon: <RefreshCcw className="h-4 w-4" />
  }];

  return <>
      <section id="features" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Core Expertise
            </div>
            <p className="text-gray-600 mt-4">
              Transforming complex datasets into strategic business insights through advanced analytics, visualization, and predictive modeling across multiple industries.
            </p>
          </div>
          
          {/* Scroll-hijacked features section */}
          <div 
            ref={hijackSectionRef}
            className={cn(
              "relative transition-all duration-500",
              isHijacked ? "fixed inset-0 z-50 bg-black" : "grid grid-cols-1 md:grid-cols-2 gap-5"
            )}
            style={{ height: isHijacked ? '100vh' : 'auto' }}
          >
            {isHijacked && (
              <div className="absolute top-4 right-4 z-10 text-white text-sm opacity-70">
                {currentIndex + 1} / {features.length}
              </div>
            )}
            
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "feature-item rounded-none overflow-hidden transform transition-all duration-700 relative group",
                  isHijacked 
                    ? cn(
                        "absolute inset-0 w-full h-full",
                        index === currentIndex 
                          ? "opacity-100 translate-x-0" 
                          : index < currentIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )
                    : "hover:scale-105 h-[320px] bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700"
                )}
                style={{
                  transitionDelay: isHijacked ? '0ms' : `${index * 150}ms`
                }}
                onMouseEnter={() => !isHijacked && setHoveredFeature(index)} 
                onMouseLeave={() => !isHijacked && setHoveredFeature(null)}
              >
                {/* Innovative geometric pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg width="100%" height="100%" className="absolute inset-0">
                      <defs>
                        <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M0 40L40 0H20L0 20Z" fill="white" fillOpacity="0.1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern-${index})`}/>
                    </svg>
                  </div>
                </div>

                {/* Animated grid background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-800/20 to-transparent animate-pulse"></div>
                
                <div className={cn(
                  "relative z-10 flex flex-col",
                  isHijacked 
                    ? "p-16 h-full text-center items-center justify-center" 
                    : "p-8 h-full justify-between"
                )}>
                  <div className={isHijacked ? "space-y-8" : "space-y-6"}>
                    {/* Modernized icon container with geometric frame */}
                    <div className={cn(
                      "relative inline-block transition-all duration-500 transform",
                      isHijacked 
                        ? "mb-8 scale-150" 
                        : hoveredFeature === index 
                          ? "mb-6 scale-110 rotate-6" 
                          : "mb-6"
                    )}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg blur-sm"></div>
                      <div className="relative bg-black/30 backdrop-blur-md border border-white/20 rounded-lg p-4">
                        <div className={`transform transition-all duration-500 ${!isHijacked && hoveredFeature === index ? 'rotate-12 scale-110' : ''}`}>
                          {feature.icon}
                        </div>
                      </div>
                      {/* Floating elements around icon */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"></div>
                    </div>

                    <h3 className={cn(
                      "font-bold text-white tracking-tight",
                      isHijacked ? "text-5xl mb-8" : "text-2xl mb-4"
                    )}>
                      {feature.title}
                    </h3>
                    
                    <p className={cn(
                      "text-gray-200 leading-relaxed",
                      isHijacked ? "text-xl max-w-3xl" : "text-base"
                    )}>
                      {feature.description}
                    </p>
                  </div>

                  {!isHijacked && (
                    <>
                      {/* Progress indicator */}
                      <div className={`relative mt-6 transition-all duration-700 ${hoveredFeature === index ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="h-0.5 bg-white/20 rounded-full">
                          <div className={`h-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-1000 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                        </div>
                      </div>
                      
                      {/* Corner accent lines */}
                      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/30 transition-all duration-300 group-hover:border-white/60"></div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/30 transition-all duration-300 group-hover:border-white/60"></div>
                    </>
                  )}
                </div>
              </div>
            ))}
            
            {isHijacked && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <div className="flex space-x-2 mb-4">
                  {features.map((_, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentIndex ? "bg-white w-8" : "bg-white/50"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm opacity-70">
                  {isMobile ? "Swipe" : "Scroll"} to continue • Press ESC to exit
                </p>
              </div>
            )}
          </div>

          <div className="mt-16 mb-8 feature-item">
            <div className="text-center mb-8">
              <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Technical Skills
              </div>
              <h3 className="text-2xl font-bold">Analytics Applications</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Discover how I apply advanced analytics across different business contexts, 
                from campaign optimization to customer insights and performance tracking.
                <span className="block text-sm mt-1 text-blue-500">Scroll horizontally to see more examples →</span>
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-white p-4 feature-item">
              <Carousel className="w-full max-w-7xl mx-auto">
                <CarouselContent className="flex">
                  {skillCaseStudies.map((study, index) => <CarouselItem key={index} className="md:basis-1/3 flex-shrink-0">
                      <Card className="border border-gray-100 shadow-md">
                        <CardContent className="p-0">
                          <div className="w-full h-full">
                            <img src={study.image} alt={study.title} className="w-full h-auto object-contain" />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-lg">{study.title}</h4>
                            <p className="text-sm text-gray-600 mt-2">{study.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>)}
                </CarouselContent>
                <div className="flex justify-center mt-6 gap-2">
                  <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-gray-100" />
                  <CarouselNext className="relative static right-auto translate-y-0 hover:bg-gray-100" />
                </div>
              </Carousel>
              <div className="text-center mt-6 text-sm text-gray-600">
                <p className="font-medium">These examples showcase my expertise in transforming data into business value</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
            Need Custom Solutions?
            <MessageSquare className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </Button>
          
          <Button onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group w-full sm:w-auto">
            Learn More About Our Technology
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
      
      <section id="technology" className="bg-gray-50 py-10 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Our Approach
            </div>
            <h2 className="text-3xl font-bold mb-4">How my analytics process works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I follow a comprehensive analytics methodology that combines data collection, advanced modeling, 
              and strategic implementation to deliver actionable business insights and measurable results.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {stepFlowItems.map((item, index) => <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-50 rounded-full p-4 mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 shadow-lg">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                      {index === 0 && <p className="text-xs text-gray-500">Gathering and integrating data from multiple marketing touchpoints, CRM systems, and analytics platforms.</p>}
                      {index === 1 && <p className="text-xs text-gray-500">Applying statistical methods, machine learning, and predictive modeling to uncover insights and trends.</p>}
                      {index === 2 && <p className="text-xs text-gray-500">Converting analytical findings into strategic recommendations and implementing optimization strategies.</p>}
                    </div>
                  </HoverCardContent>
                </HoverCard>)}
            </div>

            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-10 shadow-md">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold">Adaptation Project</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Iterative Development</span>
                    <RefreshCcw className="h-5 w-5 text-gray-600 animate-rotate-slow" />
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">Working iteratively with customers to tailor solutions to their needs</p>
                
                <div className="relative mb-2">
                  <Progress value={progressValue} className="h-3 bg-gray-200" />
                </div>
                
                <div className={cn("grid gap-1 mt-4", isMobile ? "grid-cols-2 gap-y-2" : "grid-cols-4")}>
                  {sprintPhases.map((phase, index) => <div key={index} className={cn("text-center p-2 rounded transition-all", progressValue >= index / sprintPhases.length * 100 && progressValue < (index + 1) / sprintPhases.length * 100 ? "bg-blue-50 border border-blue-100" : "bg-gray-50")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("rounded-full p-1 mb-1", progressValue >= index / sprintPhases.length * 100 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500")}>
                          {phase.icon}
                        </div>
                        <span className="text-xs font-medium">{phase.name}</span>
                      </div>
                    </div>)}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-2">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2 shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">Customer feedback integrated at every stage</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-2 sm:mt-0">
                    <span className="mr-2">Continuous improvement</span>
                    <div className="flex space-x-1">
                      <span className="inline-block w-2 h-2 bg-gray-300 rounded-full animate-pulse"></span>
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></span>
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-400"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-black/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white rounded-full p-4 border border-gray-200 shadow-md">
                  <Rocket className="h-10 w-10 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Hitting the Market</h3>
              <p className="text-gray-700">Ready to scale, produce, and launch</p>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-gray-300 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-500 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-700 animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/tech-details" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group py-3 w-full sm:w-auto justify-center">
                Learn More About Our Technology
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto justify-center">
                Contact Our Experts
                <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Features;
