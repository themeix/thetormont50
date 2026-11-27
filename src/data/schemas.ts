const SITE = 'https://thetormont50.com';

export function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

export const homeSchema = [
  {
    '@type': 'WebPage',
    '@id': `${SITE}/#webpage`,
    url: `${SITE}/`,
    name: 'Tormont 50 – Redefining Institutional Markets & Capital Advisory',
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#organization` },
  },
];

export const aboutSchema = [
  {
    '@type': 'AboutPage',
    '@id': `${SITE}/about#webpage`,
    url: `${SITE}/about`,
    name: 'About Us – Tormont 50',
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#organization` },
  },
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]),
];

export const processSchema = [
  {
    '@type': 'WebPage',
    '@id': `${SITE}/process#webpage`,
    url: `${SITE}/process`,
    name: 'Our Process – How The Tormont 50 Delivers Value',
    isPartOf: { '@id': `${SITE}/#website` },
  },
  {
    '@type': 'HowTo',
    name: 'The Tormont 50 Process',
    description:
      'A five-step methodology built for boards, CEOs, and investors to align strategy, resolve disconnects, and drive long-term shareholder value.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Discovery', text: 'Deep listening and fact-finding with boards, CEOs, and key stakeholders.' },
      { '@type': 'HowToStep', position: 2, name: 'Audit', text: 'Structured audit of governance practices, strategic alignment, leadership performance, and investor expectations.' },
      { '@type': 'HowToStep', position: 3, name: 'Rapid Resolution', text: 'Urgent, pragmatic interventions to resolve critical misalignments and restore momentum.' },
      { '@type': 'HowToStep', position: 4, name: 'Design', text: 'Co-creating strategies, structures, and processes that build resilience and unlock long-term value.' },
      { '@type': 'HowToStep', position: 5, name: 'Feedback Loop', text: 'Continuous feedback mechanisms to monitor progress and adapt as circumstances evolve.' },
    ],
  },
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Process', path: '/process' },
  ]),
];

export const servicesSchema = [
  {
    '@type': 'WebPage',
    '@id': `${SITE}/services#webpage`,
    url: `${SITE}/services`,
    name: 'Services – Tormont 50',
    isPartOf: { '@id': `${SITE}/#website` },
  },
  {
    '@type': 'ItemList',
    name: 'Tormont 50 Advisory Services',
    itemListElement: [
      { '@type': 'Service', name: 'Process Development', provider: { '@id': `${SITE}/#organization` } },
      { '@type': 'Service', name: 'Quality Assurance & Shareholder Value Audit', provider: { '@id': `${SITE}/#organization` } },
      { '@type': 'Service', name: 'Rapid Resolutions', provider: { '@id': `${SITE}/#organization` } },
      { '@type': 'Service', name: 'Strategic Design', provider: { '@id': `${SITE}/#organization` } },
      { '@type': 'Service', name: 'Feedback Loop', provider: { '@id': `${SITE}/#organization` } },
      { '@type': 'Service', name: 'Continuous Alignment', provider: { '@id': `${SITE}/#organization` } },
    ],
  },
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]),
];

export const leadershipSchema = [
  {
    '@type': 'CollectionPage',
    '@id': `${SITE}/leadership#webpage`,
    url: `${SITE}/leadership`,
    name: 'Leadership Team – Tormont 50',
    isPartOf: { '@id': `${SITE}/#website` },
  },
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Leadership', path: '/leadership' },
  ]),
];

export const contactSchema = [
  {
    '@type': 'ContactPage',
    '@id': `${SITE}/contact#webpage`,
    url: `${SITE}/contact`,
    name: 'Contact Tormont 50 – Get in Touch',
    isPartOf: { '@id': `${SITE}/#website` },
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What exactly does Tormont 50 do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We take strategy out of the clouds and put it into action. Boards, CEOs, and shareholders usually know something is not working — alignment, messaging, governance, or market trust. Tormont 50 diagnoses those issues and delivers rapid, clean execution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who do you work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with Boards that want independent accountability frameworks, CEOs who need clarity on how their leadership and strategy are perceived, and Shareholders who want to know their value is protected and growing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Book a Discovery Call or Offsite. We run you through our Shareholder Value Audit and map out rapid resolutions, design frameworks, and feedback loops.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does it cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on scope. A Discovery Offsite or Audit is a set engagement with a clear price, while resolutions, design, and execution scale depending on scope.',
        },
      },
    ],
  },
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]),
];

export const privacySchema = [
  {
    '@type': 'WebPage',
    '@id': `${SITE}/privacy-policy#webpage`,
    url: `${SITE}/privacy-policy`,
    name: 'Privacy Policy – Tormont 50',
    isPartOf: { '@id': `${SITE}/#website` },
  },
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ]),
];

export const cookieSchema = [
  {
    '@type': 'WebPage',
    '@id': `${SITE}/cookie-policy#webpage`,
    url: `${SITE}/cookie-policy`,
    name: 'Cookie Policy – Tormont 50',
    isPartOf: { '@id': `${SITE}/#website` },
  },
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
  ]),
];

export function teamMemberSchema(name: string, slug: string) {
  return [
    {
      '@type': 'ProfilePage',
      '@id': `${SITE}/team/${slug}#webpage`,
      url: `${SITE}/team/${slug}`,
      name: `${name} – Tormont 50`,
      isPartOf: { '@id': `${SITE}/#website` },
      mainEntity: {
        '@type': 'Person',
        name,
        url: `${SITE}/team/${slug}`,
        worksFor: { '@id': `${SITE}/#organization` },
      },
    },
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Leadership', path: '/leadership' },
      { name, path: `/team/${slug}` },
    ]),
  ];
}
