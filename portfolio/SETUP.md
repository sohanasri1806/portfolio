# Quick Setup Guide

## ⚡ 5-Minute Setup

Follow these steps to customize your portfolio:

### Step 1: Update Personal Information
Open `index.html` and find these sections:

**Hero Section:**
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
```
Change `Your Name` to your actual name.

**Contact Section:**
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+91 12345 67890</a>
<p>Your City, Country</p>
```
Update with your actual contact details.

**Footer:**
```html
<a href="https://github.com/your-username">GitHub</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
<a href="https://twitter.com/your-handle">Twitter</a>
```
Update with your actual social media links.

### Step 2: Configure GitHub Integration
Open `js/main.js` and update:

```javascript
const CONFIG = {
    github: {
        username: 'your-github-username',  // ← Change this
        token: ''
    }
};
```

### Step 3: Add Your Skills
Edit `data/skills.json`:

```json
{
  "skills": [
    {
      "id": 1,
      "category": "Programming Languages",
      "icon": "fas fa-code",
      "skills": ["Java", "JavaScript", "Python", "SQL"]  // ← Update these
    }
  ]
}
```

### Step 4: Add Your Projects
Edit `data/projects.json` - Add your projects in the array:

```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "Brief description of what the project does",
  "image": "🚀",  // Use emoji or unicode
  "technologies": ["React", "Node.js", "MongoDB"],
  "category": "fullstack",  // Options: fullstack, ai-ml, web
  "githubLink": "https://github.com/your-username/project-name",
  "liveLink": "https://your-project-demo.com"
}
```

### Step 5: Add Your Experience
Edit `data/experience.json`:

```json
{
  "id": 1,
  "position": "Full Stack Developer",
  "company": "Company Name",
  "startDate": "June 2024",
  "endDate": "August 2024",
  "description": "Brief description of your role",
  "keyAchievements": [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
  ],
  "technologies": ["React", "Node.js"]
}
```

### Step 6: Add Your Achievements
Edit `data/achievements.json`:

```json
{
  "id": 1,
  "title": "Hackathon Winner",
  "category": "hackathon",  // Options: hackathon, internship, certification, workshop
  "date": "October 2023",
  "icon": "fas fa-trophy",  // Use Font Awesome icon class
  "description": "Short description",
  "details": "More detailed information"
}
```

### Step 7: Test Locally
Open terminal in portfolio folder:

**With Python:**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**With Node.js:**
```bash
npx http-server
# Visit http://localhost:8080
```

### Step 8: Deploy (Choose One)

#### Option A: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Option B: Netlify
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your portfolio folder
3. Done!

#### Option C: GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
# Enable Pages in GitHub settings
```

#### Option D: Traditional Hosting
Upload files via FTP to your hosting provider.

## 🎨 Customization

### Change Colors
Edit `css/styles.css` - Find the `:root` section:

```css
:root {
    --primary-color: #00d4ff;      /* Cyan - Change this */
    --background-color: #0a0a0a;   /* Black - Change this */
    --text-color: #e0e0e0;         /* Light Gray - Change this */
}
```

**Popular Color Schemes:**

**Purple Theme:**
```css
--primary-color: #9d4edd;
--accent-color: #c77dff;
```

**Green Theme:**
```css
--primary-color: #00d084;
--accent-color: #00ff88;
```

**Orange Theme:**
```css
--primary-color: #ff6b35;
--accent-color: #ff8c42;
```

### Add Your Logo/Avatar
1. Create `assets/` folder if it doesn't exist
2. Add your image: `assets/avatar.jpg` or `assets/logo.png`
3. Update HTML in hero section:
```html
<img src="assets/avatar.jpg" alt="Profile" style="width: 150px; border-radius: 50%;">
```

## ✅ Verification Checklist

Before deploying, verify:

- [ ] Name updated in hero section
- [ ] Contact email and phone updated
- [ ] Social media links updated (GitHub, LinkedIn, etc.)
- [ ] GitHub username configured in `js/main.js`
- [ ] Skills added in `data/skills.json`
- [ ] Projects added in `data/projects.json`
- [ ] Experience added in `data/experience.json`
- [ ] Achievements added in `data/achievements.json`
- [ ] All links are correct
- [ ] No broken images or missing files
- [ ] Tested on mobile device
- [ ] Tested on desktop browser
- [ ] Contact form working (if enabled)

## 🐛 Common Issues & Fixes

### GitHub repos not showing
- Check GitHub username is correct
- Ensure you have public repositories
- GitHub API allows 60 requests/hour without token

### Contact form not sending
- Verify email configuration
- Check browser console for errors
- Use FormSubmit.co for easy setup

### Styling looks wrong
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure CSS files are loading
- Check browser console for errors

### Animations not working
- Check browser supports animations
- Disable any script blockers
- Try different browser

## 📚 Icon References

Use Font Awesome icons in your content:

```
Programming: fas fa-code
Database: fas fa-database
Cloud: fas fa-cloud
Rocket: fas fa-rocket
Trophy: fas fa-trophy
Certificate: fas fa-certificate
Briefcase: fas fa-briefcase
Brain: fas fa-brain
```

See all icons at: [Font Awesome Icons](https://fontawesome.com/icons)

## 🚀 Advanced Customization

### Add Sections
1. Add HTML in `index.html`
2. Create corresponding CSS in `css/styles.css`
3. Add navigation link

### Custom Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

body {
    font-family: 'Your Font', sans-serif;
}
```

### Animation Speed
In `css/styles.css`, adjust:
```css
--transition-fast: 0.2s ease;      /* Faster */
--transition-normal: 0.3s ease;    /* Default */
--transition-smooth: 0.5s ease;    /* Slower */
```

## 📊 Analytics

Add Google Analytics:
```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 SEO Tips

1. Add meta description in `<head>`:
```html
<meta name="description" content="Your portfolio description">
```

2. Add social sharing image:
```html
<meta property="og:image" content="assets/preview.jpg">
```

3. Use semantic HTML (already done!)

## 🎯 Next: Where to Deploy

1. **Free Options:**
   - Vercel (Recommended)
   - Netlify
   - GitHub Pages
   - Render

2. **Paid Options:**
   - Traditional hosting (Go Daddy, Hostinger)
   - AWS
   - DigitalOcean

3. **Domain Registration:**
   - Namecheap
   - GoDaddy
   - Google Domains

## 📞 Still Need Help?

1. Check `README.md` for detailed documentation
2. Review sample data files
3. Check browser console for errors
4. Test on different browsers
5. Read the code comments

---

**You're all set! 🎉 Your portfolio is ready to impress!**
