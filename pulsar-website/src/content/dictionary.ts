export type Lang = 'en' | 'zh';

export const EMAIL = 'info@pulsar-dev.com';

export const NAV_ITEMS = [
  { id: 'hero', href: '#hero' },
  { id: 'about', href: '#about' },
  { id: 'technologies', href: '#technologies' },
  { id: 'solutions', href: '#solutions' },
  { id: 'products', href: '#products' },
  { id: 'news', href: '#news' },
  { id: 'careers', href: '#careers' },
] as const;

export const FOOTER_NAV_ITEMS = [
  { id: 'about', href: '#about' },
  { id: 'technologies', href: '#technologies' },
  { id: 'solutions', href: '#solutions' },
  { id: 'products', href: '#products' },
  { id: 'news', href: '#news' },
  { id: 'careers', href: '#careers' },
  { id: 'contact', href: '#contact' },
] as const;

export const TECHNOLOGIES = [
  {
    id: 'ai',
    number: '01',
    imageNote: 'nucleus',
    en: {
      name: 'Artificial Intelligence',
      body: 'Exploring large language models, generative AI, intelligent agents, multimodal systems, and applied AI innovation.',
    },
    zh: {
      name: '人工智能',
      body: '探索大语言模型、生成式人工智能、智能体、多模态技术与人工智能应用创新。',
    },
  },
  {
    id: 'systems',
    number: '02',
    imageNote: 'midring',
    en: {
      name: 'Intelligent Systems',
      body: 'Building automation, intelligent decision-making, operational coordination, and the integration of complex systems.',
    },
    zh: {
      name: '智能系统',
      body: '构建自动化、智能决策、业务协同与复杂系统集成能力。',
    },
  },
  {
    id: 'software',
    number: '03',
    imageNote: 'structure',
    en: {
      name: 'Software Engineering',
      body: 'Focused on modern software architecture, cloud-native technology, distributed systems, and high-performance applications.',
    },
    zh: {
      name: '软件工程',
      body: '专注现代化软件架构、云原生技术、分布式系统与高性能应用开发。',
    },
  },
  {
    id: 'infra',
    number: '04',
    imageNote: 'outer',
    en: {
      name: 'Digital Infrastructure',
      body: 'Exploring cloud computing, data platforms, intelligent infrastructure, and the technical foundation of digital systems.',
    },
    zh: {
      name: '数字基础设施',
      body: '探索云计算、数据平台、智能基础设施与数字化技术底座。',
    },
  },
] as const;

export const SOLUTIONS = [
  {
    id: 'ai-apps',
    image: '/images/solution-ai.jpg',
    layout: 'wide',
    en: {
      name: 'AI-Powered Applications',
      body: 'Bringing generative AI and intelligent agents into real operational contexts — as a design exploration of model and tool connections.',
    },
    zh: {
      name: '人工智能应用',
      body: '将生成式人工智能和智能体融入实际业务场景，以模型与工具的连接作为设计探索。',
    },
  },
  {
    id: 'automation',
    image: '/images/solution-automation.jpg',
    layout: 'flip',
    en: {
      name: 'Intelligent Automation',
      body: 'Using AI and automation to improve operational efficiency and coordination, expressed here as a conceptual process flow.',
    },
    zh: {
      name: '智能自动化',
      body: '通过人工智能与自动化技术提升工作效率和业务协同能力，并以概念化流程来表达。',
    },
  },
  {
    id: 'enterprise',
    image: '/images/solution-enterprise.jpg',
    layout: 'cinematic',
    en: {
      name: 'Enterprise Digital Solutions',
      body: 'Modern software systems and digital technology services for organizations, shown as layered system collaboration — not a client case study.',
    },
    zh: {
      name: '企业数字化解决方案',
      body: '提供面向企业的现代化软件系统与数字化技术服务，以系统协同的层次结构示意，而非客户案例。',
    },
  },
  {
    id: 'data',
    image: '/images/solution-data.jpg',
    layout: 'compact',
    en: {
      name: 'Data Intelligence',
      body: 'Releasing the value of data through analysis, intelligent processing, and algorithmic techniques — illustrated as an abstract data structure.',
    },
    zh: {
      name: '数据智能',
      body: '利用数据分析、智能处理与算法技术释放数据价值，并以抽象的数据结构进行示意。',
    },
  },
] as const;

export const PRODUCTS = [
  {
    id: 'ai-platform',
    image: '/images/product-ai-platform.jpg',
    featured: true,
    en: {
      name: 'AI Intelligence Platform',
      tags: ['Generative AI', 'Multimodal', 'Knowledge'],
      blurb: 'A platform concept for knowledge understanding and intelligent application exploration.',
      detail:
        'This concept explores how generative models, multimodal signals, and knowledge structures could come together in a single workspace. The interface shown is a visual study — a way to think about reading, connecting, and applying information — not a released product.',
      detailBody:
        'The study focuses on a central knowledge space, surrounding evidence panels, and calm visual cues for different modalities. No customer deployments, pricing, or availability are implied.',
    },
    zh: {
      name: '智能平台',
      tags: ['生成式人工智能', '多模态', '知识'],
      blurb: '面向知识理解与智能应用探索的平台概念。',
      detail:
        '这一概念探索生成式模型、多模态信号与知识结构如何在同一工作空间中汇聚。所示界面为视觉研究，用于思考信息的理解、连接与应用，并非已发布产品。',
      detailBody: '研究重点是中央知识空间、周围的依据面板，以及克制的多模态视觉提示。不暗示任何客户部署、定价或供货状态。',
    },
  },
  {
    id: 'agent-system',
    image: '/images/product-agent.jpg',
    featured: false,
    en: {
      name: 'Intelligent Agent System',
      tags: ['Agents', 'Tool Use', 'Orchestration'],
      blurb: 'A system concept for connecting models, tools, and task flows through intelligent agents.',
      detail:
        'This concept examines how agents might orchestrate tools and task sequences around a shared core. The canvas is a design exploration of coordination, not a production control panel or a live customer environment.',
      detailBody:
        'Nodes, paths, and tool sockets are used only to express relationships. Capabilities, reliability, or usage are not claimed.',
    },
    zh: {
      name: '智能体系统',
      tags: ['智能体', '工具调用', '任务编排'],
      blurb: '连接模型、工具与任务流程的智能体系统概念。',
      detail:
        '这一概念探讨智能体如何围绕共享核心编排工具与任务序列。所示画布是协同关系的设计探索，不是生产控制台，也不是真实客户环境。',
      detailBody: '节点、路径与工具接口仅用于表达关系，并不声称能力指标、可靠性或使用情况。',
    },
  },
  {
    id: 'collab-platform',
    image: '/images/product-collab.jpg',
    featured: false,
    en: {
      name: 'Digital Collaboration Platform',
      tags: ['Collaboration', 'Workflow', 'Integration'],
      blurb: 'A platform concept for connecting people, operations, and information.',
      detail:
        'This concept looks at how workspaces, timelines, and shared context could help people, processes, and information stay aligned. The layout is a visual hypothesis for digital collaboration, not a shipped suite.',
      detailBody: 'Boards and rails are decorative structure. They do not represent a live workspace or an existing customer account.',
    },
    zh: {
      name: '数字协作平台',
      tags: ['协作', '工作流', '集成'],
      blurb: '连接人员、业务与信息的数字协作平台概念。',
      detail:
        '这一概念关注工作空间、时间线和共享上下文如何帮助人员、流程与信息保持协同。该布局是数字协作的视觉设想，并非已上线套件。',
      detailBody: '面板与轨道只是结构示意，并不代表实时工作空间或既有客户账户。',
    },
  },
  {
    id: 'data-engine',
    image: '/images/product-data.jpg',
    featured: false,
    en: {
      name: 'Smart Data Engine',
      tags: ['Data Pipeline', 'Analytics', 'Intelligence'],
      blurb: 'A data engine concept for connecting, processing, and analyzing information.',
      detail:
        'This concept visualizes data moving through intake, processing layers, and a refined intelligence core. It is a diagrammatic study of flow and structure, not a benchmarked engine or a commercial offering.',
      detailBody: 'Waveforms and tracks are illustrative. No throughput, accuracy, or operating metrics are stated.',
    },
    zh: {
      name: '智能数据引擎',
      tags: ['数据管道', '分析', '智能'],
      blurb: '面向数据连接、处理与分析的数据引擎概念。',
      detail:
        '这一概念将数据从接入、处理层到提炼后的智能核心进行可视化。它是关于流动与结构的图示研究，不是经过测评的引擎，也不是商业供货。',
      detailBody: '波形与轨道均为示意，不陈述吞吐量、准确率或运行指标。',
    },
  },
] as const;

export const NEWS = [
  {
    id: 'agents-path',
    image: '/images/news-agents.jpg',
    featured: true,
    en: {
      category: 'Technology Exploration',
      title: 'From model capability to real tasks: exploring paths for intelligent agents',
      summary:
        'A sample essay on how agents might move from model competence to useful task completion — written for design review, not as a company announcement.',
      body: [
        'Models can generate language, plans, and code, but useful work usually happens in a longer loop: understanding a goal, choosing tools, checking results, and handing off to a person when needed.',
        'This sample article sketches that path at a conceptual level. It does not describe a PULSAR launch, a customer deployment, or a research publication date.',
        'The accompanying visual is an abstract study of a core connected to blank task plates. It is illustration, not documentation of a live system.',
      ],
    },
    zh: {
      category: '技术探索',
      title: '从模型能力到真实任务：探索智能体的应用路径',
      summary: '一篇关于智能体如何从模型能力走向有用任务完成的示例文章，用于设计评审，并非公司公告。',
      body: [
        '模型可以生成语言、计划与代码，但有用的工作通常发生在更长的循环中：理解目标、选择工具、检查结果，并在需要时交还人工。',
        '这篇示例文章仅在概念层面勾勒这条路径，并不描述星脉的产品发布、客户部署或研究发表日期。',
        '配图是核心连接空白任务面板的抽象研究，属于插画，而非实时系统的文档。',
      ],
    },
  },
  {
    id: 'automation-thinking',
    image: '/images/news-automation.jpg',
    featured: false,
    en: {
      category: 'Design Thinking',
      title: 'Connecting systems and processes: design notes on intelligent automation',
      summary: 'A sample reflection on designing automation as a sequence of clear handoffs rather than a black box.',
      body: [
        'Automation is most useful when each step is legible: what comes in, what changes, and where a person can intervene.',
        'These design notes are sample content for the site, offering a way to talk about flow and coordination without inventing operational results.',
        'No program, product release, or client engagement is being announced here.',
      ],
    },
    zh: {
      category: '设计思考',
      title: '连接系统与流程：智能自动化的设计思考',
      summary: '一篇示例随笔，讨论如何将自动化设计为清晰的交接序列，而不是黑箱。',
      body: [
        '当每个步骤都清晰可读时，自动化最为有用：输入是什么、改变了什么、以及人可以在何处介入。',
        '这些设计笔记是网站的示例内容，用于讨论流程与协同，而不编造运营成果。',
        '此处不发布任何项目、产品或客户合作消息。',
      ],
    },
  },
  {
    id: 'software-architecture',
    image: '/images/news-architecture.jpg',
    featured: false,
    en: {
      category: 'Industry Insight',
      title: 'Software architecture for what comes next: modules, data, and collaboration',
      summary: 'A sample note on modular structure, data movement, and collaboration as a single architectural conversation.',
      body: [
        'Future-facing architecture is less about a single stack and more about how modules, data, and people stay in conversation as systems evolve.',
        'This sample article is here to complete the news module for visual review. It should not be read as a technical white paper or a dated company insight.',
        'The image is a conceptual structure in deep space, not a depiction of production infrastructure.',
      ],
    },
    zh: {
      category: '行业观察',
      title: '面向未来的软件架构：模块、数据与协作',
      summary: '一篇示例笔记，将模块结构、数据流动与协作放在同一次架构讨论中。',
      body: [
        '面向未来的架构并不只是某一种技术栈，而更关乎模块、数据与人在系统演进中如何持续对话。',
        '这篇示例文章用于补全新闻模块以便视觉评审，不应被当作技术白皮书或带有日期的公司洞察。',
        '配图是深空中的概念结构，并非生产基础设施的写实描绘。',
      ],
    },
  },
] as const;

export const CAPABILITIES = [
  {
    id: 'ai-research',
    number: '01',
    en: {
      name: 'AI Research',
      body: 'Model understanding, applied research, and technical exploration.',
    },
    zh: {
      name: '人工智能研究',
      body: '模型理解、应用研究与技术探索。',
    },
  },
  {
    id: 'cloud-native',
    number: '02',
    en: {
      name: 'Cloud Native',
      body: 'Modern application architecture, deployability, and system evolution.',
    },
    zh: {
      name: '云原生',
      body: '现代应用架构、可部署性与系统演进。',
    },
  },
  {
    id: 'automation',
    number: '03',
    en: {
      name: 'Intelligent Automation',
      body: 'Task orchestration, process coordination, and intelligent decision support.',
    },
    zh: {
      name: '智能自动化',
      body: '任务编排、流程协同与智能决策。',
    },
  },
  {
    id: 'distributed',
    number: '04',
    en: {
      name: 'Distributed Systems',
      body: 'Module collaboration, system connection, and reliability-minded design.',
    },
    zh: {
      name: '分布式系统',
      body: '模块协作、系统连接与可靠性设计。',
    },
  },
] as const;

export const CITIES = [
  { en: 'Hong Kong', zh: '香港' },
  { en: 'Beijing', zh: '北京' },
  { en: 'Shenzhen', zh: '深圳' },
  { en: 'Tokyo', zh: '东京' },
] as const;

export const INQUIRIES = [
  {
    id: 'business',
    en: { name: 'Business Cooperation', body: 'Conversations about commercial collaboration and joint initiatives.' },
    zh: { name: '商务合作', body: '关于商业协作与共同倡议的交流。' },
  },
  {
    id: 'technology',
    en: { name: 'Technology Partnership', body: 'Discussions on technical partnership, research, and shared engineering questions.' },
    zh: { name: '技术合作', body: '关于技术伙伴关系、研究与共同工程问题的讨论。' },
  },
  {
    id: 'general',
    en: { name: 'General Inquiries', body: 'All other questions about PULSAR and this site.' },
    zh: { name: '一般咨询', body: '关于星脉与本网站的其他问题。' },
  },
] as const;

const en = {
  meta: {
    title: 'PULSAR Development Limited — Intelligence Beyond Boundaries',
    description:
      'PULSAR Development Limited is a technology company focused on artificial intelligence, intelligent systems, software engineering, and digital innovation.',
  },
  a11y: {
    skip: 'Skip to main content',
    langGroup: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Primary',
    footerNav: 'Footer',
    closeDialog: 'Close dialog',
    heroVisual: 'Concept rendering of a large orbital space station with a blue reactor core in deep space',
    aboutVisual: 'Luminous pale-metal pulse core with concentric rings, a concept rendering of intelligent systems',
    techVisual: 'Exploded view of a pulse energy core, with layers shifting as a technology is selected',
    innovationVisual: 'Deep-space structure extending from a pulse core toward a vanishing point',
    careersVisual:
      'Bright daylight technology studio concept with glass, plants, and abstract displays. This is not a photograph of a real PULSAR office or team.',
    productVisual: 'Concept user interface still, with no product status implied',
    newsVisual: 'Illustrative image for a sample article',
    copied: 'Email address copied',
    copyFailed: 'Unable to copy. The address is info@pulsar-dev.com',
    dialog: 'Dialog',
  },
  nav: {
    hero: 'Home',
    about: 'About',
    technologies: 'Technologies',
    solutions: 'Solutions',
    products: 'Products',
    news: 'News',
    careers: 'Careers',
    contact: 'Contact',
    contactCta: 'Contact Us',
    langEn: 'EN',
    langZh: '中文',
  },
  hero: {
    brand: 'PULSAR DEVELOPMENT LIMITED',
    titleA: 'INTELLIGENCE',
    titleB: 'BEYOND BOUNDARIES.',
    subtitle: 'Building the Next Generation of Intelligent Technology.',
    supportingLine: '',
    body: 'Focused on artificial intelligence, intelligent systems, and digital technology innovation. We explore what technology can become, and bring intelligent systems into industries, operations, and the real world.',
    primary: 'Explore Our Technologies',
    secondary: 'Discover PULSAR',
  },
  about: {
    eyebrow: 'About',
    title: 'Technology That Moves the World Forward.',
    p1: 'PULSAR Development Limited is a technology company serving international markets. Through artificial intelligence, software engineering, and digital innovation, we work on intelligent products and technical solutions made for what comes next.',
    p2: 'We believe the value of technology is not only in crossing boundaries, but in making complex things simpler — and in making intelligence genuinely useful in the real world.',
    legalName: 'PULSAR Development Limited',
  },
  technologies: {
    eyebrow: 'Technologies',
    title: 'Technology at Our Core.',
    intro: 'Four connected directions, read as layers of the same system rather than isolated practices.',
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'Intelligence into Action.',
    intro: 'Concept directions for putting intelligence to work. Visuals and flows are illustrative, not case studies or live data.',
  },
  innovation: {
    eyebrow: 'Innovation',
    titleA: 'Beyond What Exists.',
    titleB: 'Into What’s Next.',
    body: 'The edge of technology keeps moving, and the possible uses of intelligence continue to widen. PULSAR explores artificial intelligence, automation, digital infrastructure, and a new generation of software — so ideas can travel from concept toward reality.',
  },
  products: {
    eyebrow: 'Products & Services',
    title: 'Built for a Smarter Future.',
    intro: 'Four concept directions for products and platforms. Each is a design study, clearly marked, and not a launched offering.',
    concept: 'Concept',
    learnMore: 'Learn More',
    close: 'Close',
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Engineered for What’s Next.',
    intro: 'A structural view of how research, platforms, automation, and distributed systems relate — without invented metrics.',
    core: 'System core',
  },
  news: {
    eyebrow: 'News',
    title: 'Latest Updates. New Possibilities.',
    intro: 'Sample articles for design review. None of these items is a real company announcement.',
    sample: 'Sample Content',
    date: 'Date TBD',
    read: 'Read sample',
    close: 'Close',
  },
  careers: {
    eyebrow: 'Careers',
    title: 'Build What Comes Next.',
    supportingLine: 'Build the future with people who care about the work.',
    body: 'We believe technical innovation comes from steady exploration, collaboration across disciplines, and people who care about the work. We hope to grow with those who love technology, invent with care, and think about what comes next.',
    locationsLabel: 'Cities in early planning',
    locationsNote: 'Locations to be confirmed',
    imageCaption: 'Concept atmosphere. Not a photograph of a real PULSAR office or team.',
    cta: 'View career information',
    panelTitle: 'Roles to be updated',
    panelBody:
      'Open roles have not been confirmed yet. When positions are published, they will appear here. In the meantime, you are welcome to reach out through the contact section.',
    panelCta: 'Go to Contact',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s Build the Future Together.',
    body: 'Whether the conversation is about technical collaboration, a product question, or a business partnership, we would like to hear from you.',
    emailLabel: 'Email',
    emailNote: 'Contact email to be confirmed',
    copy: 'Copy email',
    copied: 'Copied',
    copyFailed: 'Unable to copy',
  },
  footer: {
    brief: 'A Technology Company Exploring the Future of Intelligence and Digital Innovation.',
    legalName: 'PULSAR DEVELOPMENT LIMITED',
    navLabel: 'Explore',
    legalLabel: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    disclaimer: 'Disclaimer',
    copyright: '© 2026 PULSAR Development Limited. All Rights Reserved.',
    pendingTitle: 'Legal content pending',
    pendingBody:
      'Formal legal text has not been provided yet. This panel is a placeholder so the entry can be reviewed. No policy, terms, or disclaimer language should be inferred.',
  },
} as const;

const zh = {
  meta: {
    title: '星脉发展有限公司 — 让智能突破边界，让科技创造未来',
    description:
      '星脉发展有限公司是一家关注人工智能、智能系统、软件研发与数字技术创新的科技企业。',
  },
  a11y: {
    skip: '跳到主要内容',
    langGroup: '语言',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    mainNav: '主导航',
    footerNav: '页脚导航',
    closeDialog: '关闭对话框',
    heroVisual: '深空中带有蓝色反应堆核心的大型轨道太空站概念渲染',
    aboutVisual: '明亮金属质感的脉冲核心与同心环，智能系统概念渲染',
    techVisual: '脉冲能量核的分解视图，选中不同技术领域时层次随之变化',
    innovationVisual: '由脉冲核心向消失点延伸的深空结构',
    careersVisual: '明亮日光下的科技工作室概念图，玻璃、绿植与抽象屏幕。这不是星脉真实办公室或团队的照片。',
    productVisual: '概念用户界面静帧，不暗示产品状态',
    newsVisual: '示例文章配图',
    copied: '邮箱地址已复制',
    copyFailed: '无法复制。地址为 info@pulsar-dev.com',
    dialog: '对话框',
  },
  nav: {
    hero: '首页',
    about: '关于我们',
    technologies: '技术领域',
    solutions: '解决方案',
    products: '产品与服务',
    news: '新闻资讯',
    careers: '加入我们',
    contact: '联系我们',
    contactCta: '联系我们',
    langEn: 'EN',
    langZh: '中文',
  },
  hero: {
    brand: '星脉发展有限公司',
    titleA: '让智能突破边界，',
    titleB: '让科技创造未来。',
    subtitle: '构建新一代智能技术。',
    supportingLine: '以智能驱动创新，以技术连接未来。',
    body: '专注人工智能、智能系统与数字技术创新，探索技术的更多可能，让智能技术融入产业、业务与真实世界。',
    primary: '探索我们的技术领域',
    secondary: '了解星脉',
  },
  about: {
    eyebrow: '关于我们',
    title: '让科技推动世界向前。',
    p1: '星脉发展有限公司是一家立足国际市场的科技企业，致力于通过人工智能、软件工程与数字技术创新，构建面向未来的智能产品和技术解决方案。',
    p2: '我们相信，技术的价值不仅在于突破边界，更在于让复杂的事情变得简单，让智能真正服务于现实世界。',
    legalName: '星脉发展有限公司',
  },
  technologies: {
    eyebrow: '技术领域',
    title: '技术，是我们的核心。',
    intro: '四个相互关联的方向，应被看作同一系统中的层次，而不是彼此隔离的能力。',
  },
  solutions: {
    eyebrow: '解决方案',
    title: '让智能落地于行动。',
    intro: '将智能用于实际工作的概念方向。视觉与流程均为示意，不是案例研究或实时数据。',
  },
  innovation: {
    eyebrow: '创新',
    titleA: '超越已有。',
    titleB: '迈向未知。',
    body: '技术的边界不断延伸，智能的可能性持续拓展。星脉持续探索人工智能、自动化、数字基础设施和新一代软件技术，推动创新从概念走向现实。',
  },
  products: {
    eyebrow: '产品与服务',
    title: '为更智能的未来而构建。',
    intro: '四个产品与平台的概念方向。每一项都是带有明确标识的设计研究，并非已发布的供货。',
    concept: '概念展示',
    learnMore: '了解更多',
    close: '关闭',
  },
  capabilities: {
    eyebrow: '技术能力',
    title: '为下一个时代而工程化。',
    intro: '用结构关系说明研究、平台、自动化与分布式系统如何相互关联，不添加虚构指标。',
    core: '系统核心',
  },
  news: {
    eyebrow: '新闻资讯',
    title: '最新动态，新的可能。',
    intro: '用于设计评审的示例文章。以下内容都不是真实的公司公告。',
    sample: '示例内容',
    date: '日期待定',
    read: '阅读示例',
    close: '关闭',
  },
  careers: {
    eyebrow: '加入我们',
    title: '创造下一个未来。',
    supportingLine: '与优秀的人一起，创造下一个未来。',
    body: '我们相信技术创新来自持续探索、跨领域协作与优秀人才的共同努力。期待与热爱技术、勇于创新、关注未来的优秀人才一起成长。',
    locationsLabel: '规划中的城市',
    locationsNote: '地点信息待确认',
    imageCaption: '氛围概念图。并非星脉真实办公室或团队的照片。',
    cta: '查看招聘信息',
    panelTitle: '岗位信息待更新',
    panelBody: '目前尚未确认开放职位。职位正式发布后将出现在这里。在此之前，欢迎通过联系我们与我们交流。',
    panelCta: '前往联系我们',
  },
  contact: {
    eyebrow: '联系我们',
    title: '一起构建未来。',
    body: '无论是技术合作、产品咨询还是商业合作，我们期待与您交流。',
    emailLabel: '邮箱',
    emailNote: '待确认联系邮箱',
    copy: '复制邮箱',
    copied: '已复制',
    copyFailed: '无法复制',
  },
  footer: {
    brief: '一家探索智能与数字创新未来的科技公司。',
    legalName: '星脉发展有限公司',
    navLabel: '浏览',
    legalLabel: '法律信息',
    privacy: '隐私政策',
    terms: '使用条款',
    disclaimer: '免责声明',
    copyright: '© 2026 星脉发展有限公司。保留所有权利。',
    pendingTitle: '法律文本待提供',
    pendingBody: '正式法律文本尚未提供。此面板为占位说明，便于入口评审，不应被推断为任何政策、条款或免责声明的内容。',
  },
} as const;

export const copy = { en, zh };

type Stringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Stringify<U>[]
    : T extends object
      ? { [K in keyof T]: Stringify<T[K]> }
      : T;

export type Copy = Stringify<typeof en>;
