import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Khyati Chauhan - Marketing Analytics',
  description = 'Khyati Chauhan: Marketing Analytics Professional specializing in data-driven insights, customer segmentation, and performance optimization.',
  type = 'website',
  name = 'Khyati Chauhan',
  imageUrl = '/lovable-uploads/6614c2c2-455f-4571-94db-de2eee70fb29.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['marketing analytics', 'data visualization', 'customer segmentation', 'campaign optimization', 'business intelligence', 'Power BI'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = `https://khyatichauhan.com${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://khyatichauhan.com${imageUrl}`;

  // Enhanced keywords for specific posts
  const enhancedKeywords = location.pathname.includes('smart-ppe-revolution') 
    ? [
        ...keywords,
        'personal protective equipment',
        'workplace safety solutions',
        'smart safety gear',
        'construction safety technology',
        'industrial safety monitoring',
        'occupational health technology',
        'safety compliance',
        'worker protection systems',
        'smart hard hats',
        'connected safety equipment'
      ]
    : location.pathname.includes('wearable-safety-tech-protecting-workers-roi')
    ? [
        ...keywords,
        'workplace injury costs',
        'safety ROI',
        'workers compensation savings',
        'ergonomic sensors',
        'workplace safety investment',
        'safety technology ROI',
        'industrial wearables',
        'safety cost reduction',
        'occupational safety economics',
        'safety technology partnerships',
        'workplace injury statistics',
        'safety equipment financing',
        'injury prevention technology'
      ]
    : keywords;

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Khyati Chauhan',
    url: 'https://khyatichauhan.com',
    logo: 'https://khyatichauhan.com/lovable-uploads/6614c2c2-455f-4571-94db-de2eee70fb29.png',
    description: 'Marketing Analytics Professional specializing in data-driven insights',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'khyatichauhan1818@gmail.com'
    },
    sameAs: [
      'https://khyatichauhan.com'
    ]
  };

  // Enhanced BlogPosting JSON-LD structured data
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      width: 1200,
      height: 630
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'Khyati Chauhan',
      url: 'https://khyatichauhan.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Khyati Chauhan',
      logo: {
        '@type': 'ImageObject',
        url: 'https://khyatichauhan.com/lovable-uploads/6614c2c2-455f-4571-94db-de2eee70fb29.png',
        width: 512,
        height: 512
      },
      url: 'https://khyatichauhan.com'
    },
    description: description,
    keywords: enhancedKeywords.join(', '),
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true
  } : null;

  // Add FAQ structured data for Smart PPE post
  const smartPPEFAQData = location.pathname.includes('smart-ppe-revolution') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Smart PPE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Smart PPE (Personal Protective Equipment) refers to traditional safety gear enhanced with sensors, connectivity, and intelligence. Unlike ordinary PPE that acts as a passive barrier, smart PPE actively monitors conditions and provides real-time alerts to prevent accidents.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does smart PPE improve workplace safety?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Smart PPE improves safety by providing real-time monitoring of environmental conditions, worker health metrics, and potential hazards. It can detect falls, monitor vital signs, sense toxic gases, and automatically alert emergency responders when needed.'
        }
      },
      {
        '@type': 'Question',
        name: 'What industries benefit from smart PPE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Smart PPE benefits multiple industries including construction, manufacturing, oil & gas, fire & rescue, healthcare, mining, and any workplace where safety is paramount. Each industry can customize the technology to address specific safety challenges.'
        }
      }
    ]
  } : null;

  // Add FAQ structured data for Wearable Safety Tech ROI post
  const wearableSafetyROIFAQData = location.pathname.includes('wearable-safety-tech-protecting-workers-roi') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much do workplace injuries cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'According to the National Safety Council, the average cost for a medically consulted work injury is $43,000 in 2023. With 2.2 injuries per 100 full-time workers, a 200-person site can expect about $215,000 in injury costs annually before accounting for downtime or replacement training.'
        }
      },
      {
        '@type': 'Question',
        name: 'What ROI can wearable safety technology deliver?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Real-world deployments show significant returns: one study found 54% lower OSHA recordables and 88% fewer lost workdays. Another warehouse study showed 62% of workers reduced risky movements by half, with total ergonomic hazards falling 39%.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do insurance companies support wearable safety technology?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, many insurers now bundle wearable device costs into workers compensation premiums. Employers keep the hardware as long as usage stays high because fewer claims leave insurers ahead financially. Regional carriers are expanding similar rebate schemes.'
        }
      }
    ]
  } : null;

  // Combine keywords with any additional category terms
  const keywordString = category 
    ? [...enhancedKeywords, category.toLowerCase()].join(', ') 
    : enhancedKeywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Khyati Chauhan" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://khyatichauhan.com" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@khyatichauhan" />
      <meta name="twitter:creator" content="@khyatichauhan" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {smartPPEFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(smartPPEFAQData)}
        </script>
      )}
      
      {wearableSafetyROIFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(wearableSafetyROIFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
