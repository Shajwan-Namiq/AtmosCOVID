# Viper Agency - Virtual World Agency

A modern, responsive website for Viper Agency built with Vue.js 3 and TypeScript. This project recreates the Virtual World Agency website with a dark theme, green accents, and futuristic design elements.

## 🚀 Features

- **Modern Vue.js 3** with Composition API
- **TypeScript** for type safety
- **Responsive Design** that works on all devices
- **Dark Theme** with green accent colors
- **Smooth Animations** and transitions
- **SEO Optimized** with proper meta tags
- **Accessibility** features included
- **Component-based Architecture**

## 🛠️ Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with CSS custom properties
- **HTML5** - Semantic markup

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   ├── Header.vue      # Navigation header
│   ├── Hero.vue        # Hero section
│   ├── Services.vue    # Services showcase
│   ├── Sidebar.vue     # Sidebar content
│   └── Footer.vue      # Footer section
├── data/               # Data objects
│   └── websiteData.ts  # Website content data
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions
├── assets/             # Static assets
│   └── styles.css      # Global styles
├── App.vue             # Main app component
└── main.ts             # App entry point
```

## 🎨 Design Features

### Color Scheme

- **Primary Background**: `#0a0a0a` (Dark)
- **Secondary Background**: `#1a1a1a` (Dark Gray)
- **Accent Color**: `#00ff88` (Bright Green)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#b0b0b0` (Light Gray)

### Components

1. **Header**: Logo, navigation, search bar, user actions
2. **Hero**: Main title, description, call-to-action buttons
3. **Services**: Three main service cards with hover effects
4. **Sidebar**: About section, statistics, visual elements
5. **Footer**: Contact info, statistics, company details

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd viper-agency
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop** (1200px+)
- **Tablet** (768px - 1024px)
- **Mobile** (320px - 768px)

## 🎯 Key Features

### Data Structure

All website content is managed through TypeScript interfaces and data objects:

```typescript
interface WebsiteData {
  navigation: NavigationItem[];
  hero: HeroSection;
  services: Service[];
  sidebar: SidebarContent;
  footer: FooterSection;
}
```

### Component Props

Each component receives typed props for better development experience:

```typescript
interface HeaderProps {
  logo: string;
  navigation: NavigationItem[];
  searchBar: SearchBar;
  userActions: UserAction[];
}
```

### Animations

- Fade-in animations on scroll
- Hover effects with green glow
- Smooth transitions
- Loading animations

## 🔧 Customization

### Colors

Modify CSS custom properties in `src/assets/styles.css`:

```css
:root {
  --primary-bg: #0a0a0a;
  --accent-green: #00ff88;
  /* ... other variables */
}
```

### Content

Update website content in `src/data/websiteData.ts`:

```typescript
export const websiteData: WebsiteData = {
  navigation: [
    { id: "home", label: "Home", href: "/" },
    // ... more items
  ],
  // ... rest of the data
};
```

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🎨 Design Credits

Based on the Virtual World Agency design with modern web technologies and best practices.

---

**Built with ❤️ using Vue.js 3 and TypeScript**
