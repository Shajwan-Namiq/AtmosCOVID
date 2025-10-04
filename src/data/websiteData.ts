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
    title: "Step Into the Future. Shape the Virtual World.",
    subtitle:
      "Unlock immersive digital experiences designed to elevate your brand in the metaverse and beyond.",
    description:
      "At Viper, we craft custom virtual environments, interactive worlds, and futuristic solutions that connect innovation with imagination.",
    primaryAction: {
      id: "book-call",
      label: "Book a Call",
      type: "button",
      variant: "primary",
      href: "/contact",
    },
    secondaryAction: {
      id: "view-portfolio",
      label: "View Portfolio",
      type: "button",
      variant: "secondary",
      href: "/portfolio",
    },
  },

  services: [
    {
      id: "virtual-environment",
      icon: "🏢",
      title: "Virtual Environment Design",
      description:
        "Custom-designed 3D spaces for events, showrooms, virtual offices, and immersive experiences.",
      actionLabel: "Learn More",
      actionHref: "/services/virtual-environment",
    },
    {
      id: "metaverse-development",
      icon: "🌐",
      title: "Metaverse Development",
      description:
        "We build scalable metaverse platforms and integrate your brand into leading virtual ecosystems.",
      actionLabel: "Learn More",
      actionHref: "/services/metaverse",
    },
    {
      id: "vr-ar-creation",
      icon: "🥽",
      title: "VR/AR Experience Creation",
      description:
        "Interactive and immersive Virtual & Augmented Reality experiences for marketing, training, or engagement.",
      actionLabel: "Learn More",
      actionHref: "/services/vr-ar",
    },
  ],

  team: {
    title: "Meet Our Team",
    subtitle: "The creative minds behind our innovative virtual experiences",
    members: [
      {
        id: "shajwan",
        name: "Shajwan",
        role: "Lead Developer",
        description:
          "Passionate about creating immersive virtual environments and cutting-edge VR experiences.",
        socialLinks: {
          linkedin: "https://linkedin.com/in/shajwan",
          github: "https://github.com/shajwan",
        },
      },
      {
        id: "sahand",
        name: "Sahand",
        role: "Technical Lead",
        description:
          "Visionary designer specializing in metaverse architecture and interactive digital worlds.",
        socialLinks: {
          linkedin: "https://linkedin.com/in/sahand",
          twitter: "https://twitter.com/sahand",
        },
      },
      {
        id: "alle",
        name: "Alle",
        role: "Creative Director",
        description:
          "Expert in AR/VR technologies and scalable virtual platform development.",
        socialLinks: {
          linkedin: "https://linkedin.com/in/alle",
          github: "https://github.com/alle",
        },
      },
    ],
  },

  sidebar: {
    aboutSection: {
      title: "ABOUT US",
      headline: "We Build Worlds Beyond Imagination",
      services: [
        {
          id: "virtual-events",
          icon: "🎪",
          title: "Virtual Event Production",
          description:
            "Create unforgettable virtual events that engage audiences worldwide.",
          actionLabel: "Learn More",
          actionHref: "/services/events",
        },
        {
          id: "brand-storytelling",
          icon: "📖",
          title: "Immersive Brand Storytelling",
          description:
            "Tell your brand story through interactive virtual experiences.",
          actionLabel: "Learn More",
          actionHref: "/services/storytelling",
        },
        {
          id: "custom-3d",
          icon: "🎨",
          title: "Custom 3D Experiences",
          description:
            "Bespoke 3D environments tailored to your specific needs.",
          actionLabel: "Learn More",
          actionHref: "/services/3d",
        },
        {
          id: "virtual-office",
          icon: "🏢",
          title: "Virtual Office Solutions",
          description:
            "Transform remote work with immersive virtual office spaces.",
          actionLabel: "Learn More",
          actionHref: "/services/office",
        },
        {
          id: "metaverse-dev",
          icon: "🚀",
          title: "Metaverse Development",
          description:
            "Build your presence in the next generation of digital worlds.",
          actionLabel: "Learn More",
          actionHref: "/services/metaverse-dev",
        },
        {
          id: "ar-vr-content",
          icon: "🎬",
          title: "AR/VR Content Creation",
          description:
            "High-quality content for augmented and virtual reality platforms.",
          actionLabel: "Learn More",
          actionHref: "/services/content",
        },
      ],
    },
    pageSection: {
      title: "OUR PAGE",
      headline: "Transforming Ideas into Virtual Realities",
      visual: "🌀",
    },
    visualStats: {
      value1: "+120",
      value2: "50K+",
      description:
        "Interactive and immersive Virtual & Augmented Reality experiences for marketing, training, or engagement.",
    },
    statistics: [
      { value: "30.2K+", label: "Projects Completed" },
      { value: "120+", label: "Team Members" },
      { value: "4.9/5", label: "Client Rating" },
      { value: "82.1%", label: "Success Rate" },
    ],
  },

  footer: {
    logo: "VIPER",
    contact: {
      email: "example@gmail.com",
      phone: "+1 (555) 123-4567",
      address: "123 Virtual Street, Metaverse City, MV 12345",
    },
    statistics: {
      title: "STATISTICS",
      items: [
        { value: "30.2K+", label: "Happy Clients" },
        { value: "120+", label: "Projects Delivered" },
        { value: "4.9/5", label: "Average Rating" },
        { value: "82.1%", label: "Success Rate" },
      ],
    },
    tagline: "Step Into the Future.",
  },
};
