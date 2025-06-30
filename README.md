# 🏨 El Aurassi Hotel - Luxury Hotel Booking Platform

A modern, responsive hotel booking website built with Next.js 13, featuring a beautiful UI for browsing and booking luxury hotel accommodations. This project showcases a comprehensive hotel booking experience with detailed property information, room availability, and booking functionality.

![Hotel Booking Platform](https://img.shields.io/badge/Next.js-13.5.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

### 🎨 **Modern UI/UX**

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Beautiful Interface**: Clean, modern design with smooth animations and transitions
- **Interactive Components**: Rich UI components built with Radix UI and custom styling
- **Image Gallery**: Dynamic image carousel with thumbnail navigation

### 🏨 **Hotel Information**

- **Property Details**: Comprehensive hotel information including amenities, policies, and descriptions
- **Room Types**: Multiple room categories (Standard, Deluxe, Suite) with detailed specifications
- **Amenities Display**: Visual representation of hotel facilities and services
- **Guest Reviews**: Customer testimonials with ratings and feedback
- **Related Hotels**: Suggestions for similar properties in the area

### 🔍 **Booking Features**

- **Date Selection**: Interactive calendar for check-in and check-out dates
- **Guest Configuration**: Select number of adults and children
- **Room Availability**: Real-time room availability status
- **Pricing Display**: Transparent pricing with room type comparisons
- **Booking Sidebar**: Sticky booking panel with reservation details

### 🌐 **Multi-language Support**

- **Language Selection**: Support for English, French, and Arabic
- **Currency Options**: Multiple currency display options
- **Localized Content**: Content adaptation for different regions

### 📱 **User Experience**

- **Sticky Navigation**: Persistent header with easy access to key features
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading States**: Optimized loading experiences
- **Accessibility**: WCAG compliant components and navigation

## 🛠️ Technology Stack

### **Frontend Framework**

- **Next.js 13.5.1**: React framework with App Router
- **TypeScript 5.2.2**: Type-safe JavaScript development
- **React 18.2.0**: Modern React with concurrent features

### **Styling & UI**

- **Tailwind CSS 3.3.3**: Utility-first CSS framework
- **Radix UI**: Accessible, unstyled UI components
- **Lucide React**: Beautiful, customizable icons
- **DaisyUI**: Component library for Tailwind CSS
- **Tailwind CSS Animate**: Smooth animations and transitions

### **Development Tools**

- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Automatic vendor prefixing

### **Deployment**

- **GitHub Actions**: Automated CI/CD pipeline
- **Static Export**: Optimized for static hosting
- **GitHub Pages**: Free hosting solution

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
project/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── hotel/            # Hotel-specific components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── ImageGallery.tsx
│   │   ├── BookingSidebar.tsx
│   │   ├── RoomTable.tsx
│   │   └── ...           # Other hotel components
│   └── ui/               # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── ...           # Other UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── Image/           # Images and flags
│   └── logo/            # Logo files
└── .github/workflows/   # GitHub Actions
```

## 🎯 Key Components

### **Header Component**

- Multi-language support with flag icons
- Currency selection
- User authentication interface
- Property listing button
- Responsive navigation menu

### **Image Gallery**

- Dynamic image carousel
- Thumbnail navigation
- Full-screen image viewing
- Smooth transitions and animations

### **Booking Sidebar**

- Date range selection
- Guest count configuration
- Room type selection
- Real-time pricing updates
- Reservation summary

### **Room Table**

- Detailed room information
- Amenities comparison
- Availability status
- Pricing breakdown
- Booking actions

## 🌍 Deployment

### GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** triggers the build process
2. **GitHub Actions** automatically builds and deploys
3. **Static files** are generated and served from GitHub Pages

### Manual Deployment

```bash
# Build the project
npm run build

# The static files will be in the 'out' directory
# Deploy the 'out' directory to your hosting provider
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:

- Custom color palette
- Responsive breakpoints
- Animation utilities
- DaisyUI integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pexels** for beautiful hotel images
- **Radix UI** for accessible components
- **Lucide** for beautiful icons
- **Tailwind CSS** for the styling framework

## 📞 Support

For support and questions:

- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation for common solutions

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
