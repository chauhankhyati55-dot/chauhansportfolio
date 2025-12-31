
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock, Flame, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';
import { motion } from 'framer-motion';

// Import new trending images
import trendingHero from '@/assets/trending-analytics-hero.jpg';
import customerSegments from '@/assets/customer-segments-trending.jpg';
import powerbiTrending from '@/assets/powerbi-trending.jpg';
import roiGrowth from '@/assets/roi-growth-trending.jpg';

const trendingImages = [roiGrowth, customerSegments, powerbiTrending];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.id === '1') || blogPosts[0];
  const trendingPosts = blogPosts.filter(post => post.id !== featuredPost?.id);
  
  return (
    <PageLayout>
      <SEO 
        title="Trending Analytics Insights | Marketing Analytics Blog" 
        description="Discover trending insights in data-driven marketing, predictive analytics, and business intelligence."
        imageUrl={trendingHero}
        keywords={['marketing analytics', 'trending insights', 'data visualization', 'predictive modeling']}
        type="website"
      />
      
      {/* Hero Section with Glassmorphism */}
      <div className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trendingHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        
        {/* Animated Floating Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 right-40 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 blur-xl"
          animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        
        <div className="container mx-auto px-4 relative z-10 pt-24">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold text-white flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> TRENDING NOW
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80">
                {featuredPost?.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {featuredPost?.title}
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 line-clamp-3">
              {featuredPost?.excerpt}
            </p>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="h-4 w-4" />
                <span>{featuredPost?.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Eye className="h-4 w-4" />
                <span>2.4k views</span>
              </div>
            </div>
            
            <Link to={`/blog/${featuredPost?.slug}`}>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full group">
                Read Article
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Trending Articles Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Trending Articles</h2>
            </div>
            <div className="hidden md:flex items-center gap-2">
              {['All', 'Analytics', 'Visualization', 'Strategy'].map((tag, i) => (
                <button 
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    i === 0 
                      ? 'bg-white text-black font-medium' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 ${
                    index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={trendingImages[index] || trendingImages[0]}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                      
                      {/* Trending Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-green-400" />
                          #{index + 2} Trending
                        </span>
                      </div>
                      
                      {/* Category */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {Math.floor(Math.random() * 3) + 1}.{Math.floor(Math.random() * 9)}k
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                            KC
                          </div>
                          <span className="text-gray-400 text-sm">{post.author}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                          Read
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Newsletter CTA */}
          <motion.div 
            className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-white/10 p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Ahead of the Curve
              </h3>
              <p className="text-gray-300 mb-8">
                Get the latest analytics insights and trends delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-500 w-full sm:w-80"
                />
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
