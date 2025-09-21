# Josh Ampofo - Bioinformatics & Machine Learning Portfolio

A modern, responsive portfolio website showcasing bioinformatics and machine learning projects. This is **Version 1.0** built with vanilla HTML, CSS, and JavaScript for optimal performance and compatibility, developed with AI assistance using GitHub Copilot.

> **🚀 Version 2.0 Coming Soon**: The next iteration will be a complete TypeScript rewrite using modern frameworks and following the comprehensive development guidelines outlined in [`project_rules.md`](project_rules.md). This upgrade will include component-based architecture, advanced state management, enhanced testing, and improved developer experience.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Project Filtering**: Interactive project gallery with category filtering
- **Contact Form**: Functional contact form with validation
- **Accessibility**: WCAG compliant with keyboard navigation support
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized for fast loading and smooth user experience

## 🛠️ Technical Stack

### Current Version (v1.0)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)
- **Animations**: CSS Transitions and Keyframes
- **AI Tools**: GitHub Copilot for development assistance

### Planned Version 2.0 (TypeScript)
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS with Shadcn/ui components
- **State Management**: Zustand
- **Testing**: Jest + React Testing Library
- **Development**: ESLint, Prettier, Husky
- **Deployment**: Vercel with CI/CD
- **AI Integration**: GitHub Copilot, CodeRabbit, Gemini-CLI

*See [`project_rules.md`](project_rules.md) for detailed TypeScript implementation guidelines and best practices.*

## 📁 Project Structure

### Current Version (v1.0)
```
portfolio_website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── project_rules.md    # TypeScript guidelines for v2.0
├── reflections.md      # AI development experience reflection
└── README.md           # Project documentation
```

### Planned Version 2.0 Structure
Following the comprehensive architecture outlined in [`project_rules.md`](project_rules.md):
```
portfolio_website_v2/
├── src/
│   ├── components/     # React components (UI, layout, features)
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities, API clients, validators
│   ├── types/         # TypeScript type definitions
│   ├── styles/        # Tailwind CSS configurations
│   └── app/           # Next.js App Router pages
├── tests/             # Comprehensive test suites
├── docs/              # Enhanced documentation
└── config/            # Build and deployment configurations
```

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JoshAmpofo/portfolio_website.git
   cd portfolio_website
   ```

2. **Open locally**:
   Simply open `index.html` in your web browser, or use a local server:
   ```bash
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🌐 Deployment Options

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source as "Deploy from a branch"
4. Choose main branch and root folder
5. Your site will be available at `https://yourusername.github.io/portfolio_website`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty)
3. Set publish directory: `/`
4. Deploy automatically on every push

### Vercel
1. Import your GitHub repository to Vercel
2. No build configuration needed
3. Deploy automatically

## 🎨 Customization

### Adding New Projects
Edit the `projects` array in `script.js`:

```javascript
const projects = [
    {
        id: 7,
        title: "Your New Project",
        description: "Project description...",
        category: "bioinformatics", // or "machine-learning", "data-analysis"
        tags: ["Python", "TensorFlow", "etc"],
        icon: "fas fa-dna", // FontAwesome icon
        github: "https://github.com/yourusername/project",
        demo: "https://your-demo-url.com",
        featured: true
    }
];
```

### Updating Personal Information
1. **Contact Details**: Update email, LinkedIn, and GitHub links in `index.html`
2. **Bio and Stats**: Modify the About section content
3. **Skills**: Update the skills categories and items in `index.html`

### Styling Changes
Modify CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #3b82f6;    /* Main brand color */
    --secondary-color: #1e40af;  /* Secondary brand color */
    --accent-color: #06b6d4;     /* Accent color */
    /* ... other variables */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ⚡ Performance Features

- **Smooth Scrolling**: CSS and JavaScript-based smooth navigation
- **Lazy Loading**: Intersection Observer for animations
- **Debounced Events**: Optimized scroll and resize handlers
- **Minimal Dependencies**: Only essential external resources

## 🤖 AI-Assisted Development

This project showcases the power of AI-assisted development using GitHub Copilot. The entire v1.0 codebase was developed with AI collaboration, demonstrating:

- **Rapid Prototyping**: Quick iteration from concept to functional website
- **Best Practices**: AI-suggested modern web development patterns
- **Code Quality**: Consistent styling and comprehensive error handling
- **Accessibility**: WCAG-compliant features suggested by AI
- **Performance**: Optimized animations and responsive design

*Read more about the AI development experience in [`reflection.md`](reflection.md)*

## 🗺️ Development Roadmap

### ✅ Version 1.0 (Current)
- [x] Responsive HTML/CSS/JS portfolio
- [x] Project filtering and gallery
- [x] Contact form with validation
- [x] SEO optimization and accessibility
- [x] AI-assisted development with Copilot

### 🚧 Version 2.0 (In Planning)
- [ ] TypeScript migration following [`project_rules.md`](project_rules.md)
- [ ] Next.js 14+ with App Router
- [ ] Component-based architecture with Shadcn/ui
- [ ] Advanced state management with Zustand
- [ ] Comprehensive testing suite
- [ ] CI/CD pipeline with automated reviews
- [ ] Enhanced AI integration (Copilot + CodeRabbit + Gemini-CLI)

### 🔮 Future Enhancements
- [ ] CMS integration for dynamic content
- [ ] Blog functionality with MDX
- [ ] Interactive project demos
- [ ] Advanced analytics and monitoring
- [ ] PWA capabilities
- [ ] Multi-language support

## 🔧 Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

### For Version 2.0 Contributors
When contributing to the TypeScript rewrite, please follow the comprehensive guidelines in [`project_rules.md`](project_rules.md), which includes:
- TypeScript best practices and conventions
- Component architecture standards
- Testing requirements
- AI-assisted development workflows
- Code review processes

## 📚 Documentation

- **[README.md](README.md)** - Project overview and setup instructions
- **[project_rules.md](project_rules.md)** - TypeScript development guidelines for v2.0
- **[reflections.md](reflection.md)** - AI-assisted development experience and insights

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

Josh Ampofo - [joshampofo92@gmail.com](mailto:josh@example.com)

Project Link: [https://github.com/JoshAmpofo/portfolio_website](https://github.com/JoshAmpofo/portfolio_website)
