export const translations = {
  me: {
    nav: {
      services: 'Usluge',
      portfolio: 'Portfolio',
      about: 'O nama',
      contact: 'Kontakt',
      language: 'Jezik',
    },
    hero: {
      welcome: 'Dobrodošli na WebStudio',
      headline: 'Gradimo Moćne Webstranice & E-Commerce Rješenja',
      subheadline: 'Moderno, brzo i dizajnirano da konvertuje',
      cta1: 'Počni Sada',
      cta2: 'Vidi Projekte',
    },
    services: {
      title: 'Naše Usluge',
      learnMore: 'Saznaj više',
      webdev: {
        title: 'Razvoj Webstranica',
        desc: 'Moderne, brze i responzivne webstranice sa najboljim tehnologijama',
      },
      ecommerce: {
        title: 'E-Commerce Razvoj',
        desc: 'Kompletan sistem za online prodaju sa svim integracijama',
      },
      uiux: {
        title: 'UI/UX Dizajn',
        desc: 'Premijum dizajn koji konvertuje i zadržava korisnike',
      },
    },
    portfolio: {
      title: 'Naši Projekti',
      project1: 'Premium E-Shop',
      project2: 'Corporate Website',
      project3: 'SaaS Platforma',
      project4: 'Mobilna Aplikacija',
      viewProject: 'Vidi Projekat',
      projectDesc: 'Moderan, responzivan dizajn sa najnovijim tehnologijama',
    },
    about: {
      title: 'O WebStudiu',
      desc: 'WebStudio je vodeća agencija za web razvoj u Crnoj Gori. Specijaliziramo se za kreiranje modernih, brzoloadnih webstranica i e-commerce rješenja koja prodaju.',
      features: {
        feature1: 'Brz razvoj bez kompromisa na kvaliteti',
        feature2: 'Najnovije tehnologije i best practices',
        feature3: 'Posvećen tim sa bogatim iskustvom',
      },
      stats: {
        projects: 'Projekata',
        clients: 'Klijenata',
        years: 'Godina',
        satisfaction: 'Zadovoljstvo',
      },
    },
    contact: {
      title: 'Kontaktiraj Nas',
      directContact: 'Kontaktirajte nas direktno',
      phone_label: 'Telefon',
      location_label: 'Lokacija',
      phone: '+382 68 048 655',
      instagram: '@webstudiocg',
      location: 'Crna Gora',
      form: {
        name: 'Ime',
        email: 'Email',
        message: 'Poruka',
        submit: 'Pošalji',
      },
    },
    footer: {
      tagline: 'Moderna web rješenja za vaše poslovanje',
      linksTitle: 'Linkovi',
      followTitle: 'Pratite nas',
      legalTitle: 'Pravno',
      copyright: '© 2025 WebStudio. Sva prava zadržana.',
      privacy: 'Politika privatnosti',
      terms: 'Uslovi korištenja',
    },
  },
  en: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      language: 'Language',
    },
    hero: {
      welcome: 'Welcome to WebStudio',
      headline: 'We Build Powerful Websites & E-Commerce Solutions',
      subheadline: 'Modern, fast, and designed to convert',
      cta1: 'Get Started',
      cta2: 'View Projects',
    },
    services: {
      title: 'Our Services',
      learnMore: 'Learn More',
      webdev: {
        title: 'Website Development',
        desc: 'Modern, fast, and responsive websites built with the latest technologies',
      },
      ecommerce: {
        title: 'E-Commerce Development',
        desc: 'Complete online sales systems with all integrations',
      },
      uiux: {
        title: 'UI/UX Design',
        desc: 'Premium design that converts and retains users',
      },
    },
    portfolio: {
      title: 'Our Projects',
      project1: 'Premium E-Shop',
      project2: 'Corporate Website',
      project3: 'SaaS Platform',
      project4: 'Mobile App',
      viewProject: 'View Project',
      projectDesc: 'Modern, responsive design built with the latest technologies',
    },
    about: {
      title: 'About WebStudio',
      desc: 'WebStudio is the leading web development agency in Montenegro. We specialize in creating modern, fast-loading websites and e-commerce solutions that sell.',
      features: {
        feature1: 'Fast development without compromising quality',
        feature2: 'Latest technologies and best practices',
        feature3: 'Dedicated team with rich experience',
      },
      stats: {
        projects: 'Projects',
        clients: 'Clients',
        years: 'Years',
        satisfaction: 'Satisfaction',
      },
    },
    contact: {
      title: 'Get In Touch',
      directContact: 'Contact us directly',
      phone_label: 'Phone',
      location_label: 'Location',
      phone: '+382 68 048 655',
      instagram: '@webstudiocg',
      location: 'Montenegro',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send',
      },
    },
    footer: {
      tagline: 'Modern web solutions for your business',
      linksTitle: 'Links',
      followTitle: 'Follow us',
      legalTitle: 'Legal',
      copyright: '© 2025 WebStudio. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};

export const t = (lang, key) => {
  const keys = key.split('.');
  let value = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
};
