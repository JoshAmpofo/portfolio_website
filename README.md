# Portfolio Website

A modern, interactive portfolio website built with TypeScript to showcase bioinformatics and machine learning projects. This project demonstrates the integration of AI-assisted development tools and best practices in modern web development.

## 🎯 Project Purpose

This portfolio website serves as a professional showcase for bioinformatics and machine learning projects, built using cutting-edge web technologies and AI-assisted development practices. The project emphasizes:

- **Clean, maintainable TypeScript code** with comprehensive documentation
- **AI-assisted development** using GitHub Copilot and Gemini-CLI
- **Modern web development practices** with proper project structure
- **Interactive user experience** for project exploration
- **Professional presentation** of technical work and achievements

## 🚀 Setup and Run Instructions

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JoshAmpofo/portfolio_website.git
   cd portfolio_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

### Development

1. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open your browser**
   Navigate to `http://localhost:3000`

3. **Start developing**
   The development server supports hot reloading for instant feedback

### Build and Deployment

1. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

3. **Deploy**
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

## ✨ Features to Implement

### Core Features
- [ ] **Responsive Design** - Mobile-first approach with seamless desktop experience
- [ ] **Project Showcase** - Interactive gallery of bioinformatics and ML projects
- [ ] **About Section** - Professional background and expertise overview
- [ ] **Contact Form** - Functional contact system with form validation
- [ ] **Skills Visualization** - Interactive charts showing technical competencies
- [ ] **Blog/Articles** - Technical writing and project documentation
- [ ] **Resume/CV Download** - Downloadable professional documents

### Interactive Features
- [ ] **Project Filtering** - Filter projects by technology, domain, or type
- [ ] **Search Functionality** - Search across projects and content
- [ ] **Dark/Light Theme** - User preference theme switching
- [ ] **Animations** - Smooth transitions and micro-interactions
- [ ] **Code Snippets** - Syntax-highlighted code examples
- [ ] **Live Demos** - Embedded project demonstrations

### Advanced Features
- [ ] **Performance Optimization** - Lazy loading, image optimization, caching
- [ ] **SEO Optimization** - Meta tags, structured data, sitemap
- [ ] **Analytics Integration** - User behavior tracking and insights
- [ ] **Progressive Web App** - Offline functionality and mobile app features
- [ ] **Accessibility** - WCAG compliance and screen reader support
- [ ] **Internationalization** - Multi-language support

## 🛠 Technologies to Use

### Core Stack
- **Frontend Framework**: Next.js 14+ with App Router
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Shadcn/ui or Radix UI primitives
- **State Management**: Zustand or React Query

### Development Tools
- **Package Manager**: npm or yarn
- **Bundler**: Vite or Next.js built-in
- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier with custom configuration
- **Testing**: Jest + React Testing Library
- **E2E Testing**: Playwright or Cypress

### Build and Deployment
- **Hosting**: Vercel, Netlify, or GitHub Pages
- **Database**: Supabase or PlanetScale (if needed)
- **Analytics**: Vercel Analytics or Google Analytics
- **Monitoring**: Sentry for error tracking

### Development Workflow
- **Version Control**: Git with conventional commits
- **CI/CD**: GitHub Actions
- **Code Review**: CodeRabbit for automated reviews
- **Documentation**: TypeDoc for API documentation

## 🤖 AI Usage Notes

### AI Tools and Contexts

#### GitHub Copilot
- **Primary Use**: Code completion and generation
- **Context**: TypeScript/React patterns, component structure
- **Best Practices**: 
  - Write clear, descriptive comments for better suggestions
  - Use meaningful variable and function names
  - Structure code in small, focused functions

#### Gemini-CLI
- **Primary Use**: Project planning and architecture decisions
- **Context**: Full project understanding and strategic guidance
- **Best Practices**:
  - Provide comprehensive project context
  - Ask for architectural reviews and best practice validation
  - Use for complex problem-solving and optimization strategies

#### CodeRabbit (Code Review)
- **Primary Use**: Automated code review and quality assurance
- **Context**: Pull request analysis and improvement suggestions
- **Integration**: 
  - Configured for TypeScript-specific reviews
  - Security vulnerability detection
  - Performance optimization recommendations

### AI-Assisted Development Workflow

1. **Planning Phase**: Use Gemini-CLI for architectural decisions
2. **Development Phase**: Leverage Copilot for code generation
3. **Review Phase**: CodeRabbit for automated quality checks
4. **Documentation Phase**: AI assistance for comprehensive documentation

### Guidelines for AI Collaboration

- **Clear Intent**: Always provide clear context and objectives
- **Code Quality**: Maintain high standards despite AI assistance
- **Human Oversight**: Review and understand all AI-generated code
- **Iterative Improvement**: Use AI feedback to continuously improve code quality
- **Documentation**: Document AI usage and decision-making processes

## 📁 Project Structure

```
portfolio_website/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── styles/             # Global styles and themes
│   └── data/               # Static data and content
├── public/                 # Static assets
├── docs/                   # Project documentation
├── tests/                  # Test files
├── .github/                # GitHub workflows and templates
└── config/                 # Configuration files
```

## 📚 Documentation Standards

- **Inline Comments**: Explain complex logic and business rules
- **JSDoc**: Document all public functions and components
- **README**: Keep project documentation current and comprehensive
- **Changelog**: Track all notable changes and updates
- **API Documentation**: Auto-generated with TypeDoc

## 🤝 Contributing

1. Follow the project rules outlined in `project_rules.md`
2. Write comprehensive tests for new features
3. Ensure TypeScript compliance and proper typing
4. Use conventional commit messages
5. Request AI-assisted code reviews when appropriate

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **Design System**: [Coming Soon]
- **API Documentation**: [Coming Soon]
- **Project Board**: [GitHub Projects](https://github.com/JoshAmpofo/portfolio_website/projects)
