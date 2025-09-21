# Josh Ampofo - Bioinformatics & Machine Learning Portfolio

A modern, responsive portfolio website showcasing bioinformatics and machine learning projects. Built with vanilla HTML, CSS, and JavaScript for optimal performance and compatibility.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Project Filtering**: Interactive project gallery with category filtering
- **Contact Form**: Functional contact form with validation
- **Accessibility**: WCAG compliant with keyboard navigation support
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized for fast loading and smooth user experience

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)
- **Animations**: CSS Transitions and Keyframes

## 📁 Project Structure

```
portfolio_website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
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

## 🔧 Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Josh Ampofo - [josh@example.com](mailto:josh@example.com)

Project Link: [https://github.com/JoshAmpofo/portfolio_website](https://github.com/JoshAmpofo/portfolio_website)
