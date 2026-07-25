export const homeContent = {
  hero: {
    badge: 'HeroPulse v2.0 Released',
    title: 'Automate enterprise operations with AI efficiency',
    description:
      'HeroPulse connects your data pipelines, automates repetitive team workflows, and provides real-time operational insights in one unified dashboard.',
    primaryCta: { text: 'Get Started Free', href: '/pricing' },
    secondaryCta: { text: 'Explore Product', href: '/product' },
  },
  features: {
    title: 'Engineered for operational speed',
    subtitle: 'Everything your engineering and ops teams need to scale seamlessly.',
    items: [
      {
        title: 'Real-time Workflow Automation',
        description: 'Trigger actions across your stack automatically with zero latency.',
      },
      {
        title: 'Enterprise Security Built-in',
        description: 'SOC2 Type II compliance, role-based access control, and end-to-end encryption.',
      },
      {
        title: 'Unified Analytics',
        description: 'Monitor pipeline throughput and operational bottlenecks from one place.',
      },
    ],
  },
  faqs: [
    {
      question: 'How easy is it to integrate HeroPulse?',
      answer: 'HeroPulse integrates with existing REST and GraphQL APIs in under 15 minutes using our pre-built connectors.',
    },
    {
      question: 'Is my enterprise data secure?',
      answer: 'Yes, all data is encrypted at rest and in transit with complete role-based access controls.',
    },
  ],
  // Clean schema with only Organization info (FAQ schema is handled dynamically by FaqSection)
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HeroPulse',
    url: 'https://your-domain.vercel.app',
    logo: 'https://your-domain.vercel.app/logo.png',
    sameAs: ['https://twitter.com/heropulse'],
  },
};