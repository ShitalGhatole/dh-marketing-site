export const productContent = {
  hero: {
    badge: 'Core Platform Features',
    title: 'Everything you need to automate workflows',
    description:
      'Explore the complete toolkit built to streamline your business operations, integrate existing data sources, and monitor runtime performance.',
  },
  features: [
    {
      title: 'Workflow Engine',
      description: 'Build visually or in code. Execute millions of operational workflows concurrently with zero latency.',
    },
    {
      title: 'Pre-built Integrations',
      description: 'Connect to over 100+ platforms including Slack, Salesforce, GitHub, AWS, and custom webhooks.',
    },
    {
      title: 'Automated Monitoring',
      description: 'Get notified of operational failures instantly via SMS, PagerDuty, or email with automated rollback.',
    },
    {
      title: 'Audit Logs & Governance',
      description: 'Track every action taken across your platform with immutable, tamper-proof audit trails.',
    },
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'HeroPulse Platform',
    operatingSystem: 'All',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
  },
};