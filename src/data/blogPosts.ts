export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentSection[];
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  keywords?: string[];
  metaDescription?: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote' | 'table' | 'stats' | 'chart' | 'icon-list' | 'bibliography';
  content?: string;
  items?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  statsData?: {
    value: string;
    label: string;
    icon?: string;
  }[];
  chartData?: {
    title: string;
    data: { name: string; value: number; }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Maximizing Campaign ROI Through Advanced Analytics',
    slug: 'maximizing-campaign-roi-advanced-analytics',
    excerpt: 'Learn how predictive modeling and data visualization can increase your marketing campaign performance by 12% and optimize budget allocation.',
    date: 'January 15, 2025',
    author: 'Khyati Chauhan',
    category: 'Analytics',
    imageUrl: '/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png',
    keywords: [
      'marketing analytics',
      'campaign ROI',
      'predictive modeling',
      'data visualization',
      'marketing optimization',
      'performance metrics'
    ],
    metaDescription: 'Discover proven strategies for maximizing campaign ROI using advanced analytics, predictive modeling, and data-driven insights.',
    content: [
      {
        type: 'paragraph',
        content: 'In today\'s competitive marketing landscape, maximizing return on investment (ROI) is crucial for business success. Through advanced analytics and data-driven decision making, marketers can achieve significant improvements in campaign performance.'
      },
      {
        type: 'heading',
        content: 'The Power of Predictive Analytics'
      },
      {
        type: 'paragraph',
        content: 'Predictive analytics allows marketers to forecast customer behavior, optimize targeting, and allocate budgets more effectively. By analyzing historical data patterns, we can predict which campaigns will perform best and adjust strategies accordingly.'
      },
      {
        type: 'stats',
        statsData: [
          {
            value: '12%',
            label: 'Average ROI improvement',
            icon: 'TrendingUp'
          },
          {
            value: '85%',
            label: 'Prediction accuracy',
            icon: 'Target'
          },
          {
            value: '40hrs',
            label: 'Monthly time saved',
            icon: 'Clock'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Customer Segmentation Strategies That Drive Results',
    slug: 'customer-segmentation-strategies-drive-results',
    excerpt: 'Discover how advanced segmentation analysis on multi-million record datasets can reduce customer churn by 10% and improve targeting precision.',
    date: 'January 10, 2025',
    author: 'Khyati Chauhan',
    category: 'Customer Analytics',
    imageUrl: '/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png',
    keywords: [
      'customer segmentation',
      'churn analysis',
      'customer analytics',
      'data mining',
      'customer retention',
      'marketing strategy'
    ],
    metaDescription: 'Learn effective customer segmentation strategies using advanced analytics to reduce churn and improve marketing targeting.',
    content: [
      {
        type: 'paragraph',
        content: 'Effective customer segmentation is the foundation of successful marketing strategies. By analyzing customer behavior patterns and demographics, businesses can create targeted campaigns that resonate with specific audience segments.'
      },
      {
        type: 'heading',
        content: 'Advanced Segmentation Techniques'
      },
      {
        type: 'paragraph',
        content: 'Using machine learning algorithms and statistical analysis, we can identify hidden patterns in customer data that traditional segmentation methods might miss. This leads to more precise targeting and better campaign performance.'
      }
    ]
  },
  {
    id: '3',
    title: 'Power BI Dashboard Design Best Practices',
    slug: 'power-bi-dashboard-design-best-practices',
    excerpt: 'Master the art of creating compelling Power BI dashboards that transform complex data into actionable business insights for stakeholders.',
    date: 'January 5, 2025',
    author: 'Khyati Chauhan',
    category: 'Data Visualization',
    imageUrl: '/lovable-uploads/c5f8ee24-9815-4ebe-b65d-6f3d449feb8b.png',
    keywords: [
      'Power BI',
      'data visualization',
      'dashboard design',
      'business intelligence',
      'data storytelling',
      'analytics reporting'
    ],
    metaDescription: 'Learn Power BI dashboard design best practices to create impactful visualizations that drive business decisions.',
    content: [
      {
        type: 'paragraph',
        content: 'Creating effective Power BI dashboards requires a deep understanding of both technical capabilities and business needs. The best dashboards tell a story with data and enable quick decision-making.'
      },
      {
        type: 'heading',
        content: 'Design Principles for Success'
      },
      {
        type: 'paragraph',
        content: 'Successful dashboard design follows key principles: clarity, relevance, and actionability. Every element should serve a purpose and contribute to the overall narrative of the data.'
      }
    ]
  }
];