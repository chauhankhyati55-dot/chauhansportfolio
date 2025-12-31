
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, TrendingUp, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';
import { motion } from 'framer-motion';
import businessOfficeBg from '@/assets/business-office-bg.jpg';

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.id === '1') || blogPosts[0];
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };
  
  return (
    <PageLayout>
      <SEO 
        title="Marketing Analytics Insights | Khyati Chauhan Blog" 
        description="Explore in-depth articles on marketing analytics, data visualization, customer segmentation, and campaign optimization strategies."
        imageUrl={featuredPost?.imageUrl || "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"}
        keywords={['marketing analytics', 'data visualization', 'Power BI', 'customer segmentation', 'campaign ROI']}
        type="website"
      />
      
      {/* Hero Section - Matching original website style */}
      <motion.div 
        className="banner-container bg-black relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-black w-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-70"
            poster={businessOfficeBg}
          >
            <source src="/analytics-meeting-hero.mp4" type="video/mp4" />
            <img 
              src={businessOfficeBg}
              alt="Marketing Analytics Insights" 
              className="w-full h-full object-cover opacity-70"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4"
                variants={itemVariants}
              >
                <TrendingUp className="h-4 w-4 text-gray-300" />
                <span className="text-sm text-gray-300">Trending Insights</span>
              </motion.div>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>
                Marketing Analytics Blog
              </motion.h1>
              <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6 text-center mx-auto" variants={itemVariants}>
                In-depth articles on data-driven marketing, predictive analytics, and business intelligence strategies that deliver measurable results.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Featured Article Section */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          className="mt-6 md:mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          {/* Featured Post */}
          {featuredPost && (
            <motion.div variants={itemVariants}>
              <Link to={`/blog/${featuredPost.slug}`}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div 
                      className="h-64 md:h-80 bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${featuredPost.imageUrl}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-full">
                          Featured Article
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime || '8 min read'}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{featuredPost.date}</span>
                        <Button variant="outline" className="group">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </motion.div>
        
        {/* All Articles Grid */}
        <motion.div 
          className="mt-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500">
                <BookOpen className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Latest Articles</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div 
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${post.imageUrl}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-gray-500 text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime || '8 min read'}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold">
                            KC
                          </div>
                          <span className="text-gray-600 text-sm">{post.author}</span>
                        </div>
                        <span className="text-gray-500 text-sm flex items-center gap-1 group-hover:text-gray-800 transition-colors">
                          Read
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Newsletter CTA - Matching website style */}
        <motion.div 
          className="mb-16 bg-gray-100 rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Stay Updated on Analytics Trends
            </h3>
            <p className="text-gray-600 mb-8">
              Get the latest insights on marketing analytics, data visualization, and business intelligence delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-6 py-3 bg-white border border-gray-200 rounded-md text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full sm:w-80"
              />
              <Button className="bg-gray-800 text-white hover:bg-gray-900 px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Blog;
