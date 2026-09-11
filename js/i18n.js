const translations = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",

    // Sidebar
    "sidebar.bio": "Desenvolvedor Full Stack com foco em Java e Angular. Experiência na construção de aplicações escaláveis, APIs RESTful e arquitetura de microsserviços.",
    
    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.build": "Eu construo a ",
    "hero.bio": "Sou um engenheiro de software focado na construção de experiências digitais acessíveis e escaláveis. Atualmente, desenvolvo soluções com Java, Spring Boot e Angular.",
    "hero.cta.projects": "Ver meus projetos",
    "hero.cta.resume": "Currículo",
    
    // About
    "about.title": "Sobre Mim",
    "about.p1": "Sou o Alisson da Silva Bernardino, um Desenvolvedor Full Stack apaixonado por arquitetura de software e engenharia de qualidade. Atualmente graduando em Ciência da Computação pela UFPE, tenho focado minha carreira em ecossistemas robustos, principalmente utilizando <strong>Java (Spring Boot)</strong> e <strong>Angular</strong>.",
    "about.p2": "Minha experiência abrange desde a criação de interfaces acessíveis até o desenho de APIs RESTful e microsserviços. Tenho atuado no desenvolvimento de sistemas de escopo nacional em parceria com órgãos do Governo Federal, garantindo alta disponibilidade com <strong>Docker, Kubernetes, AWS, e mensageria com Apache Kafka</strong>.",
    "about.p3": "Quando não estou codando, estou pesquisando sobre Visão Computacional (Deep Learning com PyTorch) ou contribuindo para projetos open-source e iniciativas de impacto social.",
    "about.stat.exp": "Anos de<br>Experiência",
    "about.stat.tech": "Tecnologias<br>Dominadas",
    "about.stat.proj": "Projetos de<br>Impacto",
    
    // Experience
    "exp.title": "Experiência",
    "exp.vlab.title": "Desenvolvedor Full Stack",
    "exp.vlab.date": "Out 2025 - Atual",
    "exp.vlab.l1": "Desenvolvimento de aplicações Full Stack para projetos de escopo nacional em parceria com órgãos do Governo Federal utilizando Java 21 e Angular.",
    "exp.vlab.l2": "Construção e evolução de APIs REST e microsserviços com JHipster, JPA/Hibernate, PostgreSQL e arquitetura baseada no princípio SOLID.",
    "exp.vlab.l3": "Uso intensivo de Apache Kafka para mensageria assíncrona, Redis para cache e Keycloak para segurança (OAuth 2.0, JWT).",
    "exp.vlab.l4": "Containerização de dependências distribuídas com Docker.",
    
    "exp.sti.title": "Desenvolvedor Full Stack",
    "exp.sti.date": "Jan 2026 - Ago 2026",
    "exp.sti.l1": "Desenvolvimento de interfaces web responsivas e acessíveis com React.js para módulos de software institucionais.",
    "exp.sti.l2": "Atuação no contexto de microsserviços focada no tratamento de falhas e resiliência.",
    "exp.sti.l3": "Experiência prática com Kubernetes, deployments, services e gerenciamento de workloads da instituição.",
    
    "exp.voxar.title": "Pesquisador em Visão Computacional",
    "exp.voxar.date": "Set 2025 - Atual",
    "exp.voxar.l1": "Tratamento e análise de imagens com Python, PyTorch e Pandas.",
    "exp.voxar.l2": "Pesquisa aplicada em reconhecimento de expressões faciais.",
    "exp.voxar.l3": "Desenvolvimento de modelos para classificação de tipos de rodovias.",
    
    "exp.bora.title": "Desenvolvedor Full Stack (Voluntário)",
    "exp.bora.date": "Set 2025",
    "exp.bora.l1": "Desenvolvimento de novas funcionalidades para a plataforma social do Governo do Estado de Pernambuco.",
    "exp.bora.l2": "Stack tecnológica abrangendo React.js, Node.js, Prisma ORM e banco de dados via Docker.",
    "exp.bora.l3": "Integração direta de APIs REST com interfaces do usuário.",
    
    // Projects
    "proj.title": "Projetos em Destaque",
    "proj.intro": "Uma seleção organizada por área de atuação, conectando decisões técnicas, resultados e evidências visuais.",
    "proj.nav.engineering": "Engenharia de Software",
    "proj.nav.ai": "IA & Data Science",
    "proj.nav.azure": "Microsoft Azure",
    "proj.engineering.kicker": "Produtos digitais & sistemas distribuídos",
    "proj.engineering.title": "Engenharia de Software",
    "proj.engineering.desc": "Aplicações full stack construídas com foco em arquitetura, resiliência, segurança e experiência de uso.",
    "proj.dashboard.title": "Dashboard de Combustíveis",
    "proj.dashboard.desc": "Aplicação governamental para consulta e visualização analítica de dados de combustíveis, construída com Angular 21, TypeScript e a identidade visual institucional #1351B4 e #0C326F.",
    "proj.dashboard.l1": "Interface inspirada no padrão visual do Governo Federal, com identidade em azul institucional.",
    "proj.dashboard.l2": "Estado organizado com Facade Pattern, Observables e RxJS.",
    "proj.dashboard.l3": "Dashboards interativos com Chart.js e ambiente de desenvolvimento apoiado por JSON Server.",
    "proj.video.watch": "Assistir demonstração",
    "proj.vet.title": "Gestão de Produtos, Estoque e Notas Fiscais",
    "proj.vet.desc": "Plataforma distribuída para gestão de produtos, estoque e emissão de notas fiscais, projetada como uma arquitetura de microsserviços resiliente e orientada a eventos.",
    "proj.vet.l1": "Bancos PostgreSQL independentes por microsserviço, comunicação assíncrona com RabbitMQ e MassTransit.",
    "proj.vet.l2": "Outbox Pattern, idempotência, concorrência otimista e resiliência com Polly, Retry e Circuit Breaker.",
    "proj.vet.l3": "Análise consultiva de notas fiscais com Groq e GPT-OSS, além de tratamento global padronizado de erros.",
    "proj.wallet.title": "Carteira Digital Full Stack",
    "proj.wallet.desc": "Carteira digital criada para o desafio prático do bootcamp Santander, com backend de alta performance em Rust e uma camada de segurança pensada para reduzir a superfície de ataques XSS.",
    "proj.wallet.l1": "Backend assíncrono com Rust e Axum.",
    "proj.wallet.l2": "Autenticação baseada em cookies nativos HttpOnly.",
    "proj.wallet.l3": "Frontend enxuto com JavaScript Vanilla e Tailwind CSS.",
    "proj.ai.kicker": "Modelagem, avaliação & explicabilidade",
    "proj.ai.title": "IA & Data Science",
    "proj.ai.desc": "Projetos de redes neurais e visão computacional apresentados com seus pipelines, estratégias contra viés e resultados experimentais.",
    "proj.face.title": "Classificação de Rodovias com Visão Computacional",
    "proj.face.desc": "Pipeline em PyTorch com ResNet-18 para classificar tipos de pavimentação, mantendo a distribuição das classes e tornando as decisões do modelo auditáveis.",
    "proj.face.s1.label": "Modelo",
    "proj.face.s1.value": "ResNet-18 com backbone congelado e cabeça totalmente conectada",
    "proj.face.s2.label": "Viés",
    "proj.face.s2.value": "Weighted CrossEntropy para dar maior peso à classe Belgian Blocks",
    "proj.face.s3.label": "Aumentação",
    "proj.face.s3.value": "Color Jitter, Motion Blur, flips e rotações",
    "proj.face.s4.label": "Explicabilidade",
    "proj.bora.title": "Predição de Sobrevivência no Titanic com MLP",
    "proj.bora.desc": "Estudo completo de classificação, da análise exploratória à avaliação do melhor modelo em dados nunca vistos.",
    "proj.bora.l1": "EDA para compreender variáveis e padrões de sobrevivência.",
    "proj.bora.l2": "Divisão estratificada: 50% treino, 25% validação e 25% teste.",
    "proj.bora.l3": "Limpeza, imputação de nulos e codificação de variáveis categóricas.",
    "proj.bora.l4": "Oversampling apenas na classe minoritária do conjunto de treino.",
    "proj.bora.l5": "Treinamento da MLP, otimização por validação e avaliação final.",
    "proj.sti.title": "Aprendizado Não Supervisionado com MLP",
    "proj.sti.desc": "Experimento de aprendizado não supervisionado voltado à descoberta de estruturas e representações latentes nos dados.",
    "proj.sti.image.credit": "Imagem ilustrativa:",
    "proj.azure.kicker": "Cloud, busca inteligente & IA generativa",
    "proj.azure.title": "Microsoft Azure",
    "proj.azure.desc": "Laboratórios práticos explorando os serviços disponíveis no ambiente Azure, da indexação e busca semântica à integração com modelos generativos.",
    "proj.azure.search.title": "Busca Cognitiva e Indexação Inteligente",
    "proj.azure.search.desc": "Configuração de uma solução de pesquisa enriquecida, cobrindo ingestão, indexação, consulta e exploração dos resultados dentro do ecossistema Azure.",
    "proj.azure.openai.title": "Laboratório de IA Generativa",
    "proj.azure.openai.desc": "Experimentação com os recursos do Azure OpenAI, criação de prompts, configuração de modelos e validação de respostas em cenários práticos.",
    
    // Skills
    "skills.title": "Habilidades",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.devops": "DevOps & Cloud",
    "skills.db": "Banco de Dados",
    "skills.tools": "Ferramentas",
    
    // Contact
    "contact.pretitle": "O que vem a seguir?",
    "contact.title": "Entre em Contato",
    "contact.desc": "No momento, estou aberto a novas oportunidades de desenvolvimento e colaboração. Seja para tirar dúvidas, propor projetos ou simplesmente dizer olá, farei o possível para retornar em breve!",
    "contact.btn": "Diga Olá",
    
    // Footer
    "footer.text": "Desenvolvido por Alisson Bernardino &copy; 2026",
    
    // UI Elements
    "ui.lang": "EN",
    "ui.lang.aria": "Mudar para inglês"
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",

    // Sidebar
    "sidebar.bio": "Full Stack Developer focused on Java and Angular, with experience building scalable applications, RESTful APIs, and microservices architectures.",
    
    // Hero
    "hero.greeting": "Hi, I am",
    "hero.build": "I build the ",
    "hero.bio": "I'm a software engineer focused on building accessible and scalable digital experiences. Currently, I develop solutions with Java, Spring Boot, and Angular.",
    "hero.cta.projects": "Check out my work",
    "hero.cta.resume": "Resume",
    
    // About
    "about.title": "About Me",
    "about.p1": "I am Alisson da Silva Bernardino, a Full Stack Developer passionate about software architecture and quality engineering. Currently pursuing a degree in Computer Science at UFPE, I have focused my career on robust ecosystems, primarily using <strong>Java (Spring Boot)</strong> and <strong>Angular</strong>.",
    "about.p2": "My experience ranges from creating accessible interfaces to designing RESTful APIs and microservices. I have worked on the development of national scope systems in partnership with Federal Government agencies, ensuring high availability with <strong>Docker, Kubernetes, AWS, and messaging with Apache Kafka</strong>.",
    "about.p3": "When I'm not coding, I'm researching Computer Vision (Deep Learning with PyTorch) or contributing to open-source projects and social impact initiatives.",
    "about.stat.exp": "Years of<br>Experience",
    "about.stat.tech": "Mastered<br>Technologies",
    "about.stat.proj": "Impact<br>Projects",
    
    // Experience
    "exp.title": "Experience",
    "exp.vlab.title": "Full Stack Developer",
    "exp.vlab.date": "Oct 2025 - Present",
    "exp.vlab.l1": "Development of Full Stack applications for national scope projects in partnership with Federal Government agencies using Java 21 and Angular.",
    "exp.vlab.l2": "Construction and evolution of REST APIs and microservices with JHipster, JPA/Hibernate, PostgreSQL, and SOLID-based architecture.",
    "exp.vlab.l3": "Intensive use of Apache Kafka for asynchronous messaging, Redis for cache, and Keycloak for security (OAuth 2.0, JWT).",
    "exp.vlab.l4": "Containerization of distributed dependencies with Docker.",
    
    "exp.sti.title": "Full Stack Developer",
    "exp.sti.date": "Jan 2026 - Aug 2026",
    "exp.sti.l1": "Development of responsive and accessible web interfaces with React.js for institutional software modules.",
    "exp.sti.l2": "Action in the microservices context focused on failure handling and resilience.",
    "exp.sti.l3": "Practical experience with Kubernetes, deployments, services, and workload management of the institution.",
    
    "exp.voxar.title": "Computer Vision Researcher",
    "exp.voxar.date": "Sep 2025 - Present",
    "exp.voxar.l1": "Image processing and analysis with Python, PyTorch, and Pandas.",
    "exp.voxar.l2": "Applied research in facial expression recognition.",
    "exp.voxar.l3": "Development of models for highway type classification.",
    
    "exp.bora.title": "Full Stack Developer (Volunteer)",
    "exp.bora.date": "Sep 2025",
    "exp.bora.l1": "Development of new features for the Pernambuco State Government's social platform.",
    "exp.bora.l2": "Technology stack encompassing React.js, Node.js, Prisma ORM, and database via Docker.",
    "exp.bora.l3": "Direct integration of REST APIs with user interfaces.",
    
    // Projects
    "proj.title": "Featured Projects",
    "proj.intro": "A selection organized by field, connecting technical decisions, results, and visual evidence.",
    "proj.nav.engineering": "Software Engineering",
    "proj.nav.ai": "AI & Data Science",
    "proj.nav.azure": "Microsoft Azure",
    "proj.engineering.kicker": "Digital products & distributed systems",
    "proj.engineering.title": "Software Engineering",
    "proj.engineering.desc": "Full stack applications built with a focus on architecture, resilience, security, and user experience.",
    "proj.dashboard.title": "Fuel Dashboard",
    "proj.dashboard.desc": "Government-style application for querying and visualizing fuel data, built with Angular 21, TypeScript, and the institutional colors #1351B4 and #0C326F.",
    "proj.dashboard.l1": "Interface inspired by the Brazilian Federal Government design language and its institutional blue palette.",
    "proj.dashboard.l2": "State organized through the Facade Pattern, Observables, and RxJS.",
    "proj.dashboard.l3": "Interactive dashboards with Chart.js and a development environment supported by JSON Server.",
    "proj.video.watch": "Watch demo",
    "proj.vet.title": "Product, Inventory & Invoice Management",
    "proj.vet.desc": "Distributed platform for product and inventory management and invoice issuance, designed as a resilient, event-driven microservices architecture.",
    "proj.vet.l1": "Independent PostgreSQL databases per microservice and asynchronous communication with RabbitMQ and MassTransit.",
    "proj.vet.l2": "Outbox Pattern, idempotency, optimistic concurrency, and resilience with Polly, Retry, and Circuit Breaker.",
    "proj.vet.l3": "Advisory invoice analysis with Groq and GPT-OSS, plus standardized global error handling.",
    "proj.wallet.title": "Full Stack Digital Wallet",
    "proj.wallet.desc": "Digital wallet created for Santander's bootcamp coding challenge, featuring a high-performance Rust backend and a security layer designed to reduce the XSS attack surface.",
    "proj.wallet.l1": "Asynchronous backend with Rust and Axum.",
    "proj.wallet.l2": "Authentication based on native HttpOnly cookies.",
    "proj.wallet.l3": "Lean frontend with Vanilla JavaScript and Tailwind CSS.",
    "proj.ai.kicker": "Modeling, evaluation & explainability",
    "proj.ai.title": "AI & Data Science",
    "proj.ai.desc": "Neural network and computer vision projects presented through their pipelines, bias-mitigation strategies, and experimental results.",
    "proj.face.title": "Road Classification with Computer Vision",
    "proj.face.desc": "PyTorch and ResNet-18 pipeline for classifying pavement types while preserving class distributions and making the model's decisions auditable.",
    "proj.face.s1.label": "Model",
    "proj.face.s1.value": "ResNet-18 with a frozen backbone and fully connected head",
    "proj.face.s2.label": "Bias",
    "proj.face.s2.value": "Weighted CrossEntropy to assign greater weight to the Belgian Blocks class",
    "proj.face.s3.label": "Augmentation",
    "proj.face.s3.value": "Color Jitter, Motion Blur, flips, and rotations",
    "proj.face.s4.label": "Explainability",
    "proj.bora.title": "Titanic Survival Prediction with MLP",
    "proj.bora.desc": "End-to-end classification study, from exploratory analysis to evaluating the best model on previously unseen data.",
    "proj.bora.l1": "EDA to understand variables and survival patterns.",
    "proj.bora.l2": "Stratified split: 50% training, 25% validation, and 25% testing.",
    "proj.bora.l3": "Cleaning, missing-value imputation, and categorical variable encoding.",
    "proj.bora.l4": "Oversampling applied only to the minority class in the training set.",
    "proj.bora.l5": "MLP training, validation-driven optimization, and final evaluation.",
    "proj.sti.title": "Unsupervised Learning with MLP",
    "proj.sti.desc": "Unsupervised learning experiment focused on discovering structures and latent representations in data.",
    "proj.sti.image.credit": "Illustrative image:",
    "proj.azure.kicker": "Cloud, intelligent search & generative AI",
    "proj.azure.title": "Microsoft Azure",
    "proj.azure.desc": "Hands-on labs exploring the services available in the Azure environment, from semantic indexing and search to generative model integration.",
    "proj.azure.search.title": "Cognitive Search and Intelligent Indexing",
    "proj.azure.search.desc": "Configuration of an enriched search solution covering ingestion, indexing, querying, and result exploration within the Azure ecosystem.",
    "proj.azure.openai.title": "Generative AI Lab",
    "proj.azure.openai.desc": "Experimentation with Azure OpenAI resources, prompt creation, model configuration, and response validation in practical scenarios.",
    
    // Skills
    "skills.title": "Skills",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.devops": "DevOps & Cloud",
    "skills.db": "Database",
    "skills.tools": "Tools",
    
    // Contact
    "contact.pretitle": "What's Next?",
    "contact.title": "Get In Touch",
    "contact.desc": "I'm currently open to new development and collaboration opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!",
    "contact.btn": "Say Hello",
    
    // Footer
    "footer.text": "Built by Alisson Bernardino &copy; 2026",
    
    // UI Elements
    "ui.lang": "PT",
    "ui.lang.aria": "Switch to Portuguese"
  }
};

// ─── Utilitário de tradução com fallback triplo ────────────────────────────
// Tenta: idioma atual → fallback para PT → fallback para a própria chave
function translate(lang, key) {
  return translations[lang]?.[key]
      ?? translations['pt']?.[key]
      ?? key; // último recurso: exibe a chave bruta
}

// Detecta se uma string contém tags HTML — decide innerHTML vs textContent
const HTML_TAG_RE = /<[a-zA-Z][^>]*>/;
function hasHTML(str) {
  return HTML_TAG_RE.test(str);
}

document.addEventListener('DOMContentLoaded', () => {
  const langToggleBtn = document.getElementById('lang-toggle');
  if (!langToggleBtn) return;

  let currentLang = localStorage.getItem('portfolio-lang') || 'pt';
  // Flag para prevenir cliques duplos durante a animação de transição
  let isTransitioning = false;

  // ─── Aplica traduções no DOM ───────────────────────────────────────────
  const applyTranslations = (lang) => {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = translate(lang, key);

      if (el.tagName.toLowerCase() === 'input' && el.type === 'submit') {
        // Input submit: usa value, não innerHTML
        el.value = value;

      } else if (el.tagName.toLowerCase() === 'a'
          && el.classList.contains('btn-outline')
          && key === 'hero.cta.resume') {
        // Link do currículo: troca href junto com o texto
        el.textContent = value; // texto puro, sem HTML
        el.href = lang === 'pt' ? './assets/resume-pt.pdf' : './assets/resume-en.pdf';

      } else if (hasHTML(value)) {
        // String contém HTML (ex: <strong>, <br>) → innerHTML obrigatório
        // Seguro aqui pois os valores são todos hardcoded no dicionário acima
        el.innerHTML = value;

      } else {
        // String de texto puro → textContent é mais seguro e mais rápido
        el.textContent = value;
      }
    });

    // Atualiza atributo lang do documento
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Atualiza o botão de toggle (texto + aria-label)
    const toggleText = langToggleBtn.querySelector('span');
    if (toggleText) {
      toggleText.textContent = translate(lang, 'ui.lang');
    }
    langToggleBtn.setAttribute('aria-label', translate(lang, 'ui.lang.aria'));
  };

  // Aplica idioma inicial
  applyTranslations(currentLang);

  // ─── Toggle de idioma com debounce anti-clique duplo ──────────────────
  langToggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (isTransitioning) return; // ignora cliques durante a transição
    isTransitioning = true;

    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('portfolio-lang', currentLang);

    document.body.style.opacity = '0';
    setTimeout(() => {
      applyTranslations(currentLang);
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: currentLang }));
      document.body.style.opacity = '1';
      isTransitioning = false;
    }, 200);
  });
});
