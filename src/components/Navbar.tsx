
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/6614c2c2-455f-4571-94db-de2eee70fb29.png" alt="Khyati Chauhan Logo" className={cn("h-12 w-auto transition-all duration-300", isScrolled ? "brightness-0" : "brightness-0 invert")} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                     <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-space", isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                     <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-space", isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      About Khyati
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                   <NavigationMenuTrigger className={cn("font-space", isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Analytics Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[450px]">
                      <li>
                        <a href="https://app.powerbi.com/groups/me/reports/3bfb9103-c0fd-43b5-aad1-6293f3fa6eb1/ad7424f2fef47d5dd729?experience=power-bi" target="_blank" rel="noopener noreferrer" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Customer Analytics Dashboard</div>
                          <p className="text-sm text-gray-500">Comprehensive customer behavior and segmentation analysis</p>
                        </a>
                      </li>
                      <li>
                        <a href="https://app.powerbi.com/groups/93042ebc-8a8e-4d96-aad2-5edf22f9b461/reports/ce16edfa-f64e-47f0-861b-0290596e119f/ReportSectionb621f12070647be09138?experience=power-bi" target="_blank" rel="noopener noreferrer" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Campaign Performance Analytics</div>
                          <p className="text-sm text-gray-500">Marketing campaign ROI and performance tracking</p>
                        </a>
                      </li>
                      <li>
                        <Link to="/blog" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Marketing Attribution Model</div>
                          <p className="text-sm text-gray-500">Multi-touch attribution analysis for marketing channels</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Conversion Funnel Analysis</div>
                          <p className="text-sm text-gray-500">Customer journey optimization and conversion tracking</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">A/B Testing Framework</div>
                          <p className="text-sm text-gray-500">Statistical testing for marketing optimization</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("font-space", isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Learn More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/tech-details" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Technology Details</div>
                          <p className="text-sm text-gray-500">How my analytics methodology works</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/development-process" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Development Process</div>
                          <p className="text-sm text-gray-500">My approach to creating custom analytics solutions</p>
                        </Link>
                      </li>
                      <li>
                        
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-space", isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      News
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors font-space", isScrolled ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-700 text-white hover:bg-gray-600")}>
                    Contact
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Improved mobile compatibility */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-4 pt-3 pb-4 space-y-2 shadow-lg overflow-y-auto max-h-96", isScrolled ? "bg-white border-t border-gray-100" : "bg-black border-t border-gray-800")}>
          <Link to="/" className={cn("block px-4 py-3 rounded-lg text-base font-medium touch-target", isScrolled ? "text-gray-700 hover:bg-gray-50 active:bg-gray-100" : "text-gray-200 hover:bg-gray-900 active:bg-gray-800")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-4 py-3 rounded-lg text-base font-medium touch-target", isScrolled ? "text-gray-700 hover:bg-gray-50 active:bg-gray-100" : "text-gray-200 hover:bg-gray-900 active:bg-gray-800")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Khyati
          </Link>
          
          {/* Simplified Analytics Projects - scroll to section */}
          <button onClick={() => scrollToSection('projects')} className={cn("block w-full text-left px-4 py-3 rounded-lg text-base font-medium touch-target", isScrolled ? "text-gray-700 hover:bg-gray-50 active:bg-gray-100" : "text-gray-200 hover:bg-gray-900 active:bg-gray-800")}>
            Analytics Projects
          </button>
          
          {/* Simplified Learn More - no dropdown */}
          <Link to="/tech-details" className={cn("block px-4 py-3 rounded-lg text-base font-medium touch-target", isScrolled ? "text-gray-700 hover:bg-gray-50 active:bg-gray-100" : "text-gray-200 hover:bg-gray-900 active:bg-gray-800")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Learn More
          </Link>
          
          <Link to="/blog" className={cn("block px-4 py-3 rounded-lg text-base font-medium touch-target", isScrolled ? "text-gray-700 hover:bg-gray-50 active:bg-gray-100" : "text-gray-200 hover:bg-gray-900 active:bg-gray-800")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            News
          </Link>
          
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-4 py-3 rounded-lg text-base font-medium touch-target bg-gray-100", isScrolled ? "text-gray-700 bg-gray-200 hover:bg-gray-300 active:bg-gray-400" : "text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-500")}>
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
