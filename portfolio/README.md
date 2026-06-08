# Portfolio Website - Documentation

A modern, responsive personal portfolio website for a Computer Science student and Full Stack + AI Engineer. Built with HTML, CSS, and vanilla JavaScript for optimal performance.

## 🌟 Features

### Design & UX
- **Dark Theme** with electric blue/cyan accents
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Professional transitions and scroll effects
- **Modern Aesthetics** - Clean, minimal design with tech-inspired elements
- **Accessibility** - Semantic HTML and keyboard navigation

### Sections
1. **Hero** - Introduction with typing animation
2. **About** - Professional summary with education timeline
3. **Skills** - Categorized skill cards with icons
4. **Projects** - Filterable project showcase
5. **GitHub** - Dynamic repository listing from GitHub API
6. **Experience** - Timeline-based experience display
7. **Achievements** - Certifications and accomplishments
8. **Contact** - Contact information and form
9. **Footer** - Social links and quick navigation

### Interactive Features
- ✨ Typing animation in hero section
- 🎯 Project filtering by category
- 🔗 GitHub API integration for live repos
- 📱 Mobile-responsive hamburger menu
- 🔝 Scroll-to-top button
- 🌊 Smooth scroll animations
- ⌨️ Active navbar highlighting
- 💫 Hover effects on interactive elements

## 📁 Folder Structure

```
portfolio/
├── index.html                 # Main HTML file
├── css/
│   ├── styles.css            # Main styles and components
│   ├── responsive.css        # Responsive design rules
│   └── animations.css        # Animation keyframes
├── js/
│   ├── main.js              # Main application logic
│   ├── data-loader.js       # Load and render JSON data
│   ├── github-api.js        # GitHub API integration
│   └── animations.js        # Animation controllers
├── data/
│   ├── skills.json          # Skills data
│   ├── projects.json        # Projects data
│   ├── experience.json      # Experience data
│   └── achievements.json    # Achievements data
└── assets/                   # Images and icons (optional)
```

## 🚀 Getting Started

### Prerequisites
- No build tools or dependencies required!
- Just a modern web browser
- Text editor for customization

### Installation

1. **Clone or Download** the portfolio folder
2. **Customize** the content (see Configuration section)
3. **Open** `index.html` in your browser

### Live Development
Use any local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server
```

Then visit: `http://localhost:8000`

## ⚙️ Configuration

### 1. **Personal Information**
Edit `index.html`:
- Replace `Your Name` with your actual name
- Update email in contact section: `your.email@example.com`
- Update phone number: `+91 12345 67890`
- Update location
- Add your resume link

### 2. **Social Links**
Update in `index.html` footer:
```html
<a href="https://github.com/your-username">GitHub</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
<a href="https://twitter.com/your-handle">Twitter</a>
```

### 3. **GitHub Integration**
Edit `js/main.js`:
```javascript
const CONFIG = {
    github: {
        username: 'your-github-username',  // Your GitHub username
        token: ''  // Optional: GitHub token for higher API limits
    }
};
```

### 4. **Skills**
Edit `data/skills.json`:
```json
{
  "skills": [
    {
      "id": 1,
      "category": "Programming Languages",
      "icon": "fas fa-code",
      "skills": ["Java", "JavaScript", "Python", "SQL"]
    }
  ]
}
```

### 5. **Projects**
Edit `data/projects.json`:
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "image": "🚀",
      "technologies": ["Tech1", "Tech2"],
      "category": "fullstack",
      "githubLink": "https://github.com/...",
      "liveLink": "https://..."
    }
  ]
}
```

### 6. **Experience**
Edit `data/experience.json`:
```json
{
  "experience": [
    {
      "id": 1,
      "position": "Job Title",
      "company": "Company Name",
      "startDate": "Month Year",
      "endDate": "Month Year",
      "description": "Description",
      "keyAchievements": ["Achievement 1", "Achievement 2"],
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

### 7. **Achievements**
Edit `data/achievements.json`:
```json
{
  "achievements": [
    {
      "id": 1,
      "title": "Achievement Title",
      "category": "hackathon",
      "date": "Month Year",
      "icon": "fas fa-trophy",
      "description": "Description",
      "details": "More details"
    }
  ]
}
```

### 8. **Contact Form**
The contact form is set up for demonstration. To make it functional, choose one of these options:

#### Option A: FormSubmit.co (Recommended - No Backend)
```html
<!-- Update the form action in index.html -->
<form action="https://formsubmit.co/your-email@example.com" method="POST">
    <!-- form fields -->
</form>
```

#### Option B: EmailJS (Simple Setup)
1. Sign up at [EmailJS](https://www.emailjs.com)
2. Get your Service ID and Template ID
3. Add to `js/main.js`:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
// Then send emails in the contact form handler
```

#### Option C: Backend API
Connect to your own backend server in `js/main.js` contactForm handler.

## 🎨 Customization

### Color Scheme
Edit `css/styles.css` CSS variables:
```css
:root {
    --primary-color: #00d4ff;    /* Cyan/Electric Blue */
    --secondary-color: #1a1a1a;  /* Dark Gray */
    --background-color: #0a0a0a; /* Black */
    --text-color: #e0e0e0;       /* Light Gray */
}
```

### Fonts
Update font family in `css/styles.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Animations
Adjust animation speeds in `css/animations.css`:
```css
@keyframes fadeSlideIn {
    /* Modify duration and effects */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## 🔧 JavaScript Features

### Typing Animation
Automatically runs in hero section. Customize phrases in `js/main.js`:
```javascript
const phrases = [
    'Full Stack Developer | AI Enthusiast | Problem Solver',
    'Building scalable web applications',
    'Passionate about Machine Learning & NLP'
];
```

### Scroll Animations
- Intersection Observer for scroll-triggered animations
- Staggered card animations
- Parallax effects
- Progress bar

### Project Filtering
Buttons automatically filter projects by category:
- `all` - Show all projects
- `fullstack` - Full Stack projects
- `ai-ml` - AI/ML projects
- `web` - Web projects

## 🌐 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Fast loading performance
- Mobile-friendly design

### Further SEO Improvements
1. Add Open Graph meta tags
2. Create sitemap.xml
3. Add robots.txt
4. Use schema.org markup
5. Optimize images

## ⚡ Performance

- **No external dependencies** except Font Awesome for icons
- **Optimized CSS** with CSS Grid and Flexbox
- **Lightweight JavaScript** - ~15KB total
- **Lazy loading** for images
- **GPU-accelerated animations**

### Optimization Tips
1. Compress images in `assets/` folder
2. Minify CSS and JS in production
3. Use CDN for Font Awesome
4. Enable browser caching
5. Use image WebP format

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect GitHub repository
2. Build command: (none - static files)
3. Publish directory: `/`

### Deploy to GitHub Pages
```bash
# Push to GitHub
git push origin main

# Enable GitHub Pages in repository settings
# Select main branch as source
```

### Deploy to Traditional Hosting
1. Upload all files via FTP
2. Point domain to server
3. Done!

## 📝 Content Tips

### About Section
- Keep it concise and compelling
- Highlight unique skills
- Show personality
- 2-3 paragraphs maximum

### Projects
- Use clear, descriptive titles
- Explain the problem solved
- List 3-5 key features
- Include technologies used
- Add live demo links

### Skills
- Organize by category
- List 3-4 skills per category
- Use relevant icons
- Keep skills current

### Experience
- Use strong action verbs
- Quantify achievements
- List 3-4 key achievements
- Highlight technologies used
- Follow reverse chronological order

## 🔐 Security

- No user data is collected (contact form data goes to your email)
- No backend dependencies
- No database needed
- Safe to deploy publicly

## 🐛 Troubleshooting

### GitHub repos not loading
- Check GitHub username in CONFIG
- Ensure username is correct and has public repos
- Check browser console for API errors
- GitHub API rate limit: 60 requests/hour (unauthenticated)

### Contact form not working
- Verify form action URL
- Check email configuration
- Test with different email service
- Check browser console for errors

### Animations not playing
- Ensure animations.css is loaded
- Check browser support for CSS animations
- Disable extensions that block scripts
- Check prefers-reduced-motion setting

### Mobile menu not working
- Check JavaScript is enabled
- Verify hamburger click handler
- Check z-index conflicts
- Test in different browsers

## 📞 Support & Help

- Check browser console for error messages
- Verify all JSON files are valid JSON
- Ensure all file paths are correct
- Test on multiple browsers
- Use browser developer tools to debug

## 🎯 Next Steps

1. **Personalize** all content and links
2. **Add your projects** to the portfolio
3. **Update skills** with your expertise
4. **Add photos/avatars** in assets folder
5. **Test on mobile** devices
6. **Deploy** to your hosting
7. **Share** your portfolio URL
8. **Keep updated** with new projects

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Font Awesome Icons](https://fontawesome.com)
- [Can I Use](https://caniuse.com)

## 📄 License

This portfolio template is free to use and customize for personal use.

## 💡 Tips for Success

1. **Keep it updated** - Add new projects and skills regularly
2. **Professional photos** - Use high-quality profile pictures
3. **Clear writing** - Proofread all content
4. **Fast loading** - Optimize all assets
5. **Mobile first** - Test on mobile devices
6. **Regular backups** - Keep copies of your portfolio
7. **Get feedback** - Ask others to review your site
8. **Monitor analytics** - Track visitor patterns

---

**Made with ❤️ for aspiring Full Stack & AI Engineers**

Happy Building! 🚀
