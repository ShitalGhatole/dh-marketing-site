export const pricingContent = {
  hero: {
    badge: 'Flexible Pricing',
    title: 'Simple, transparent pricing for every team',
    description:
      'Choose the plan that fits your business needs. Upgrade or downgrade at any time with no lock-in contracts.',
  },
  plans: [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Ideal for small teams getting started with workflow automation.',
      features: [
        'Up to 5,000 automated runs/mo',
        '10 active workflows',
        'Standard integrations',
        'Community support',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/contact',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'Designed for fast-growing companies requiring scale and security.',
      features: [
        'Up to 50,000 automated runs/mo',
        'Unlimited active workflows',
        'All 100+ integrations',
        '24/7 Priority support',
        'Custom webhooks',
      ],
      ctaText: 'Get Started with Pro',
      ctaHref: '/contact',
      highlighted: true, // Used to visually elevate this card
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions, dedicated support, and custom SLAs for large enterprises.',
      features: [
        'Unlimited automated runs',
        'Dedicated account manager',
        'Custom SLA guarantees',
        'SOC2 & HIPAA compliance',
        'SSO & SAML authentication',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact',
      highlighted: false,
    },
  ],
};