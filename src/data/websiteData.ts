import type { WebsiteData } from "../types";

export const websiteData: WebsiteData = {
  navigation: [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "features", label: "Features", href: "/features" },
  ],

  searchBar: {
    placeholder: "I am looking for...",
    icon: "🔍",
  },

  userActions: [
    { id: "login", label: "Log in", type: "link", href: "/login" },
    {
      id: "signup",
      label: "Sign Up",
      type: "button",
      variant: "primary",
      href: "/signup",
    },
  ],

  hero: {
    title: "Understanding Our Atmosphere. Protecting Our Planet.",
    subtitle:
      "Exploring the impact of COVID-19 on air quality, vegetation, and environmental solutions.",
    description:
      "At AtmosCOVID, we analyze atmospheric changes, air pollution patterns, vegetation responses, and develop solutions for a healthier planet.",
    primaryAction: {
      id: "explore-data",
      label: "Explore Data",
      type: "button",
      variant: "primary",
      href: "/data",
    },
    secondaryAction: {
      id: "learn-more",
      label: "Learn More",
      type: "button",
      variant: "secondary",
      href: "/research",
    },
  },

  services: [
    {
      id: "atmosphere-analysis",
      icon: "🌍",
      title: "Atmosphere Analysis",
      description:
        "Comprehensive analysis of atmospheric changes, ozone levels, and environmental impact studies.",
      actionLabel: "Learn More",
      actionHref: "/services/atmosphere",
    },
    {
      id: "air-pollution-monitoring",
      icon: "🌫️",
      title: "Air Pollution Monitoring",
      description:
        "Real-time monitoring and analysis of air quality, pollutants, and their effects on health and environment.",
      actionLabel: "Learn More",
      actionHref: "/services/pollution",
    },
    {
      id: "vegetation-response",
      icon: "🌱",
      title: "Vegetation Response Studies",
      description:
        "Research on how vegetation responds to environmental changes and pollution reduction measures.",
      actionLabel: "Learn More",
      actionHref: "/services/vegetation",
    },
  ],

  team: {
    title: "Meet Our Research Team",
    subtitle:
      "The scientists and researchers behind our atmospheric and environmental studies",
    members: [
      {
        id: "shajwan",
        name: "Shajwan",
        role: "Atmospheric Scientist",
        description:
          "Specializes in ozone layer analysis and atmospheric chemistry research.",
        socialLinks: {
          linkedin: "https://linkedin.com/in/shajwan",
          github: "https://github.com/shajwan",
        },
      },
      {
        id: "sahand",
        name: "Sahand",
        role: "Environmental Researcher",
        description:
          "Expert in air pollution monitoring and environmental impact assessment.",
        socialLinks: {
          linkedin: "https://linkedin.com/in/sahand",
          twitter: "https://twitter.com/sahand",
        },
      },
      {
        id: "alle",
        name: "Alle",
        role: "Data Analyst",
        description:
          "Focuses on vegetation response data analysis and environmental modeling.",
        socialLinks: {
          linkedin: "https://linkedin.com/in/alle",
          github: "https://github.com/alle",
        },
      },
    ],
  },

  airQuality: {
    title: "Global Air Quality Impact",
    subtitle:
      "How COVID-19 lockdowns affected air pollution across major countries",
    countries: [
      {
        id: "india",
        name: "India",
        flag: "🇮🇳",
        periods: [
          {
            period: "Before COVID (2019)",
            description:
              "India had some of the world's highest PM₂.₅ and PM₁₀ levels across major cities.",
          },
          {
            period: "During COVID (2020)",
            description:
              "Strict lockdowns caused major declines in NO₂, PM₂.₅, and PM₁₀ due to reduced traffic and industry; studies across 596 cities confirmed sharp improvements.",
          },
          {
            period: "After COVID (2021–2022)",
            description:
              "Pollution rebounded as activity resumed, though some cities sustained gains through cleaner energy and vehicle policies.",
          },
        ],
      },
      {
        id: "china",
        name: "China",
        flag: "🇨🇳",
        periods: [
          {
            period: "Before COVID (2019)",
            description:
              "Pollution levels were high but steadily improving under strong national control programs.",
          },
          {
            period: "During COVID (2020)",
            description:
              "Early and strict lockdowns led to steep NO₂, PM₂.₅, and SO₂ reductions, especially in industrial hubs.",
          },
          {
            period: "After COVID (2021–2022)",
            description:
              "Emissions rose again with recovery, but long-term air quality progress remained due to continued regulation.",
          },
        ],
      },
      {
        id: "united-states",
        name: "United States",
        flag: "🇺🇸",
        periods: [
          {
            period: "Before COVID (2019)",
            description:
              "Overall low baseline pollution, with data showing regional hotspots.",
          },
          {
            period: "During COVID (2020)",
            description:
              "Traffic-related pollutants (especially NO₂) dropped modestly; weather and seasonal effects influenced results.",
          },
          {
            period: "After COVID (2021–2022)",
            description:
              "Most levels returned to normal, though shifts like remote work and cleaner transport slightly limited the rebound.",
          },
        ],
      },
    ],
  },

  vegetationResponse: {
    title: "Vegetation Response to COVID-19 Lockdowns",
    subtitle:
      "How reduced emissions led to improved vegetation health and growth worldwide",
    findings: [
      {
        id: "global-overview",
        title: "Global Vegetation Increase",
        description:
          "Global COVID-19 lockdowns led to temporary vegetation increases in many regions as air pollution and aerosols dropped.",
        impact:
          "MODIS and Sentinel-2 observations showed higher NDVI and GPP during 2020 compared with pre-pandemic years.",
      },
      {
        id: "sunlight-improvement",
        title: "Enhanced Photosynthesis",
        description:
          "Reduced aerosol optical depth allowed more sunlight to reach canopies, improving photosynthesis efficiency.",
        impact:
          "Better light penetration led to increased plant productivity across multiple ecosystems.",
      },
      {
        id: "ozone-reduction",
        title: "Reduced Ozone Stress",
        description:
          "Lower NO₂ and SO₂ emissions decreased ozone stress on vegetation.",
        impact:
          "Plants experienced less atmospheric stress, leading to healthier growth patterns.",
      },
      {
        id: "erbil-case",
        title: "Erbil Case Study",
        description:
          "Sentinel-2 imagery revealed NDVI increases and a 54.5% drop in NO₂ during lockdown months.",
        location: "Erbil, Iraq",
        impact:
          "Significant vegetation recovery in urban areas with reduced industrial activity.",
      },
      {
        id: "dust-reduction",
        title: "Reduced Dust Impact",
        description:
          "Reduced dust and construction supported fast greening across semi-arid urban zones.",
        impact:
          "Urban vegetation showed rapid recovery in areas with decreased construction and dust.",
      },
      {
        id: "salt-lake-city",
        title: "Urban Park Recovery",
        description:
          "Salt Lake City experienced moderate NDVI gains in urban parks linked to lower CO₂ and traffic emissions.",
        location: "Salt Lake City, USA",
        impact:
          "Urban green spaces showed measurable improvement in vegetation health.",
      },
      {
        id: "regional-variation",
        title: "Regional Variations",
        description:
          "Regional variation showed meteorology controlled local outcomes—drought offset greening in some areas.",
        impact:
          "Climate conditions played a significant role in determining vegetation response effectiveness.",
      },
      {
        id: "rapid-recovery",
        title: "Immediate Benefits",
        description:
          "Urban vegetation's rapid recovery demonstrates that emission cuts can produce immediate ecological benefits.",
        impact:
          "Proves that environmental policies can yield quick positive results for urban ecosystems.",
      },
    ],
  },

  footer: {
    logo: "AtmosCOVID",
    contact: {
      email: "research@atmoscovid.org",
      phone: "+1 (555) 123-4567",
      address:
        "Environmental Research Center, Science District, Research City, RC 12345",
    },
    statistics: {
      title: "RESEARCH STATISTICS",
      items: [
        { value: "596", label: "Cities Analyzed" },
        { value: "3", label: "Countries Studied" },
        { value: "54.5%", label: "NO₂ Reduction" },
        { value: "2020-2022", label: "Study Period" },
      ],
    },
    tagline: "Protecting Our Planet Through Research.",
  },
};
