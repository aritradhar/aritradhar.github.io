// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-achievements",
          title: "Achievements",
          description: "Some of the good stuff over the years :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/achievements/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Some of the talks on my reserch projects over the years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Over the years, I was also working as a teaching assistants for different courses in ETH Zurich and IIIT-Delhi",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-defended-my-phd-thesis-sparkles-smile",
          title: 'Defended my PhD Thesis :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-joined-as-a-senior-resercher-hardware-security-in-von-neuman-lab-huawei-zurich-research-center",
          title: 'Joined as a (Senior) Resercher - Hardware Security in Von Neuman Lab, Huawei...',
          description: "",
          section: "News",},{id: "news-our-paper-composite-enclave-is-accepted-in-ches-2022",
          title: 'Our paper Composite Enclave is accepted in CHES 2022',
          description: "",
          section: "News",},{id: "news-i-will-be-attending-asplos-2022-from-2nd-to-4th-march-2022",
          title: 'I will be attending ASPLOS 2022 from 2nd to 4th March, 2022',
          description: "",
          section: "News",},{id: "news-i-will-be-serving-as-a-pc-member-of-micro-2022",
          title: 'I will be serving as a PC member of Micro 2022.',
          description: "",
          section: "News",},{id: "news-i-will-be-attending-ches-2022-18th-21st-septermber-2022-for-our-paper-composite-enclaves-towards-disaggregated-trusted-execution",
          title: 'I will be attending CHES 2022 18th-21st Septermber, 2022 for our paper Composite...',
          description: "",
          section: "News",},{id: "news-i-will-be-giving-a-talk-on-new-software-abstractions-for-hardware-security-technology-csf-2023-at-monte-verità-ascona-switzerland-on-1-4th-october-2023-i-will-discuss-how-to-empower-next-generation-data-centers-with-trusted-computing",
          title: 'I will be giving a talk on New Software Abstractions For Hardware Security...',
          description: "",
          section: "News",},{id: "news-i-will-attend-mlsys-2024-in-santa-clara-california-from-may-13-to-16-2024",
          title: 'I will attend MLSys-2024 in Santa Clara, California, from May 13 to 16,...',
          description: "",
          section: "News",},{id: "news-i-will-attend-dac-2024-in-san-franciso-california-from-june-23-to-27-2024-i-will-present-two-posters-principles-for-enabling-tees-on-domain-specific-accelerators-and-confidential-computing-with-heterogeneous-devices-at-cloud-scale",
          title: 'I will attend DAC-2024 in San Franciso, California, from June 23 to 27,...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-announce-that-i-have-recived-the-prestigious-huawei-gold-medal-individual-award-for-my-contributions-in-2023",
          title: 'I am excited to announce that I have recived the prestigious Huawei Gold...',
          description: "",
          section: "News",},{id: "news-i-will-attend-acsac-2024-in-honolulu-hawaii-from-december-9-to-13-2024-i-will-present-our-paper-confidential-computing-with-heterogeneous-devices-at-cloud-scale",
          title: 'I will attend ACSAC-2024 in Honolulu, Hawaii, from December 9 to 13, 2024....',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
