# Portfolio – Islam Mohamed

A modern portfolio built with Next.js (App Router) and Tailwind CSS. Features dynamic GitHub project integration, custom loading animations, and manual project ordering system.

## ✨ Features

- **Dynamic GitHub Integration**: Automatically fetches and displays GitHub repositories
- **Smart Project Ordering**: Manual priority system with custom project arrangement
- **Advanced Loading System**: Smooth app loader with custom animations
- **Responsive Design**: Mobile-first layout with sidebar navigation
- **Portfolio Categories**: Dynamic filtering with project counts
- **Image Fallback System**: Automatic fallback for missing project images
- **Particles Background**: Interactive animated background
- **Modern UI/UX**: Smooth animations and transitions

## 🧰 Tech Stack

- **Frontend**: Next.js (App Router), React, Tailwind CSS
- **Styling**: Custom CSS variables, Styled Components
- **Animations**: Framer Motion
- **Icons**: Ionicons (CDN)
- **Data**: GitHub API integration
- **State Management**: React Hooks (useState, useEffect, useMemo)

## 🚀 Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000`.

3. Build & start

```bash
npm run build
npm start
```

## 🗂️ Project Structure

```
app/
  components/
    AppLoader.jsx          # Custom loading animation
    About.jsx              # About section
    Contact.jsx            # Contact form
    MainContent.jsx        # Main content wrapper
    Navbar.jsx             # Navigation component
    ParticlesBackground.jsx # Animated background
    Portfolio.jsx          # Portfolio with GitHub integration
    Resume.jsx             # Resume section
    Sidebar.jsx            # Sidebar navigation
    useFetchProjects.js    # GitHub API hook
  globals.css              # Global styles
  layout.jsx               # Root layout with AppLoader
  loading.jsx              # Next.js loading component
  page.jsx                 # Home page
public/
  images/
    project-photo/         # Project thumbnails
```

## ⚙️ Configuration & Customization

### 🎯 Project Ordering System

The portfolio features a sophisticated project ordering system in `Portfolio.jsx`:

```jsx
// Priority projects (always appear first)
const priorityProjects = [
  "My_Portfolio", // Your main portfolio
  "PWA", // Progressive Web App
];

// Manual order for other projects
const manualOrder = [
  "Anime",
  "project_promptopia",
  "Car_ShowCase",
  "React-blog",
  // Add more projects in your preferred order
];
```

### 🔄 Loading System

- **AppLoader**: Custom loading animation with smooth transitions
- **Timing**: 2.5 seconds minimum display time
- **Animation**: Framer Motion with scale and rotation effects

### 🖼️ Image System

- **Primary**: GitHub repository images (`image.jpg`)
- **Fallback**: Picsum photos for missing images
- **Local**: `public/images/project-photo/` directory

### 📱 GitHub Integration

- **Auto-fetch**: Projects automatically loaded from GitHub API
- **Categories**: Dynamic categorization based on repository topics
- **Filtering**: Real-time project filtering by category

## 🚀 Key Features Explained

### 🎨 App Loader System

- **Immediate Display**: Loader appears instantly when app starts
- **Smooth Animation**: Framer Motion with scale and rotation effects
- **Fixed Timing**: 2.5 seconds minimum display for better UX
- **No Page Flash**: Prevents content from showing before loader

### 📊 Smart Project Management

- **Priority System**: Important projects always appear first
- **Manual Ordering**: Full control over project display sequence
- **Auto Categorization**: Projects categorized by GitHub topics
- **Dynamic Filtering**: Real-time category filtering with counts

### 🔧 Technical Improvements

- **Performance**: Memoized components and optimized re-renders
- **Error Handling**: Graceful fallbacks for missing data
- **Responsive**: Mobile-first design with adaptive layouts
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Run production server
npm run lint     # Run ESLint
```

## 📤 Deployment

- **Vercel**: Optimized for Vercel deployment
- **Static Assets**: All images in `public/` directory
- **Environment**: No environment variables required
- **Build**: Production-ready with optimizations

## 📫 Contact & Links

- **LinkedIn**: [Islam Mohamed](https://www.linkedin.com/in/islam-mohamed-038240210/)
- **GitHub**: [@Islam-mohamed-74](https://github.com/Islam-mohamed-74)
- **Live Demo**: [Portfolio](https://my-portfolio-six-eta-82.vercel.app/)

## 🎯 Recent Updates

- ✅ **Custom App Loader**: Smooth loading animation with Framer Motion
- ✅ **GitHub Integration**: Dynamic project fetching from GitHub API
- ✅ **Smart Ordering**: Manual project priority system
- ✅ **Enhanced UX**: Improved animations and transitions
- ✅ **Mobile Optimization**: Better responsive design
- ✅ **Performance**: Optimized rendering and state management

---

_This portfolio showcases modern web development practices with Next.js, React, and advanced UI/UX patterns._
