# Felix Ng - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading times and optimized bundle size
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: Built with accessibility best practices

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)

## Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Professional background and highlights
3. **Experience** - Work experience and research positions
4. **Projects** - Featured projects with technical details
5. **Skills** - Technical skills organized by category
6. **Education** - Academic background and achievements
7. **Contact** - Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Ng
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment

This website can be deployed to various platforms:

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages:
```bash
npm install -g gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Customization

### Update Personal Information

Edit the content in the component files located in `src/components/`:
- `Hero.tsx` - Name, title, and introduction
- `About.tsx` - About section content
- `Experience.tsx` - Work experience
- `Projects.tsx` - Project details
- `Skills.tsx` - Technical skills
- `Education.tsx` - Education details
- `Contact.tsx` - Contact information

### Change Colors

Update the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Add your custom colors
      },
    },
  },
}
```

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Felix Ng
- Email: FelixNg1022@gmail.com
- LinkedIn: [linkedin.com/in/felixng1022](https://www.linkedin.com/in/felixng1022/)
- GitHub: [github.com/felixng1022](https://github.com/felixng1022)

---

Built with React, TypeScript, and Tailwind CSS
