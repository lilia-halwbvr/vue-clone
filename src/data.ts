export interface Characteristic {
  id: string
  title: string
  description: string
}

export const characteristics: Characteristic[] = [
  {
    id: 'accessible',
    title: 'Approachable',
    description:
      'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.',
  },
  {
    id: 'performant',
    title: 'Performant',
    description:
      'Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.',
  },
  {
    id: 'versatile',
    title: 'Versatile',
    description:
      'A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.',
  },
]

export const platinumSponsors: string[] = [
  "BIT",
  "Vue Mastery",
  "Vue School",
  "Vehikl",
  "Vuejs Amsterdam",
  "Storyblok",
  "Chrome",
  "Herodevs",
  "JavaScript",
  "Become a sponsor"
]
export const goldSponsors: string[] = [
  "BIT",
  "Vue Mastery",
  "Vue School",
  "Vehikl",
  "Vuejs Amsterdam",
  "Storyblok",
  "Chrome",
  "Herodevs",
  "JavaScript",
  "Become a sponsor",
  "Chrome",
  "Herodevs",
  "JavaScript",
  "Become a sponsor",
  "Chrome",
  "Herodevs",
  "JavaScript",
  "Become a sponsor"
];
export interface SiteMapLink {
  key: string;
}

export interface SiteMapCategory {
  id: string;
  links: SiteMapLink[];
}

export const siteMapCategories = [{
  id: "Docs",
  links: [{
    key: "Guide"
  },
    {
      key: "Tutorial"
    },
    {
      key: "Examples"
    },
    {
      key: "Quick start"
    },
    {
      key: "Glossary"
    },
    {
      key: "Error reference"
    },
    {
      key: "Vue 2 docs"
    },
    {
      key: "Migration from Vue 2"
    }
  ]
},
  {
    id: "About",
    links: [{
      key: "FAQ"
    },
      {
        key: "Team"
      },
      {
        key: "Releases"
      },
      {
        key: "Community guide"
      },
      {
        key: "Code of conduct"
      },
      {
        key: "Privacy policy"
      },
      {
        key: "The documentary"
      }
    ]
  },
  {
    id: "Experts",
    links: [{
      key: "Partners"
    },
      {
        key: "Developers"
      }
    ]
  },
  {
    id: "Resources",
    links: [{
      key: "Partners"
    },
      {
        key: "Developers"
      },
      {
        key: "Themes"
      },
      {
        key: "UI components"
      },
      {
        key: "Certification"
      },
      {
        key: "Jobs"
      },
      {
        key: "T-Shirt shop"
      }
    ]
  },
  {
    id: "Official libraries",
    links: [{
      key: "Vue router"
    },
      {
        key: "Pinia"
      },
      {
        key: "Tooling guide"
      }
    ]
  },
  {
    id: "Video courses",
    links: [{
      key: "Vue mastery"
    },
      {
        key: "Vue school"
      }
    ]
  },
  {
    id: "Help",
    links: [{
      key: "Discord chat"
    },
      {
        key: "Github discussions"
      },
      {
        key: "Dev community"
      }
    ]
  },
  {
    id: "News",
    links: [{
      key: "Blog"
    },
      {
        key: "Twitter"
      },
      {
        key: "Events"
      },
      {
        key: "News letters"
      }
    ]
  }
];
