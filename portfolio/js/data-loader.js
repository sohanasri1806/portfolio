/* ========================================
   DATA LOADER - Load and render content from JSON
   ======================================== */

// Load data when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadAllData();
    } catch (error) {
        console.error('Error loading data:', error);
    }
});

// ========================================
// LOAD ALL DATA
// ========================================

async function loadAllData() {
    showLoading(true);

    try {
        await Promise.all([
            loadSkills(),
            loadProjects(),
            loadExperience(),
            loadAchievements()
        ]);
    } catch (error) {
        console.error('Error loading data:', error);
        showNotification('Error loading content. Please refresh the page.', 'error');
    } finally {
        showLoading(false);
    }
}

// ========================================
// LOAD SKILLS
// ========================================

async function loadSkills() {
    try {
        const response = await fetch('data/skills.json');
        const data = await response.json();
        renderSkills(data.skills);
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

function renderSkills(skills) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = skills.map((skill, index) => `
        <div class="skill-card scroll-animate" style="animation-delay: ${index * 0.1}s; opacity: 1;">
            <div class="skill-category-title">
                <i class="${skill.icon}"></i>
                ${skill.category}
            </div>
            <div class="skills-list">
                ${skill.skills.map(s => `
                    <span class="skill-tag">${s}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ========================================
// LOAD PROJECTS
// ========================================

async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        renderProjects(data.projects);
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map((project, index) => `
        <div class="project-card scroll-animate" data-category="${project.category}" style="animation-delay: ${index * 0.1}s; opacity: 1;">
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubLink}" target="_blank" class="btn btn-secondary btn-small">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    ${project.liveLink ? `
                        <a href="${project.liveLink}" target="_blank" class="btn btn-primary btn-small">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// LOAD EXPERIENCE
// ========================================

async function loadExperience() {
    try {
        const response = await fetch('data/experience.json');
        const data = await response.json();
        renderExperience(data.experience);
    } catch (error) {
        console.error('Error loading experience:', error);
    }
}

function renderExperience(experience) {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = experience.map((exp, index) => `
        <div class="experience-item scroll-animate" style="animation-delay: ${index * 0.1}s; opacity: 1;">
            <div class="experience-marker"></div>
            <div class="experience-content">
                <div class="experience-date">${exp.startDate} - ${exp.endDate}</div>
                <h3 class="experience-title">${exp.position}</h3>
                <p class="experience-company">${exp.company}</p>
                <p class="experience-description">${exp.description}</p>
                <ul style="margin: 12px 0 12px 20px; color: var(--text-muted); font-size: 0.9rem; line-height: 1.6;">
                    ${exp.keyAchievements.map(achievement => `
                        <li style="margin-bottom: 6px;">${achievement}</li>
                    `).join('')}
                </ul>
                <div class="experience-tech">
                    ${exp.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// LOAD ACHIEVEMENTS
// ========================================

async function loadAchievements() {
    try {
        const response = await fetch('data/achievements.json');
        const data = await response.json();
        renderAchievements(data.achievements);
    } catch (error) {
        console.error('Error loading achievements:', error);
    }
}

function renderAchievements(achievements) {
    const container = document.getElementById('achievements-container');
    if (!container) return;

    container.innerHTML = achievements.map((achievement, index) => `
        <div class="achievement-card scroll-animate" style="animation-delay: ${index * 0.1}s; opacity: 1;">
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <h3 class="achievement-title">${achievement.title}</h3>
            <p class="achievement-date">${achievement.date}</p>
            <p class="achievement-description">${achievement.description}</p>
        </div>
    `).join('');
}

// ========================================
// LOADING SPINNER
// ========================================

function showLoading(show) {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.toggle('active', show);
    }
}

// ========================================
// FETCH UTILITIES
// ========================================

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
