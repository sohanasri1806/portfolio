/* ========================================
   GITHUB API - Fetch and display repositories
   ======================================== */

// Load GitHub repos when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadGitHubRepositories();
});

// ========================================
// FETCH GITHUB REPOSITORIES
// ========================================

async function loadGitHubRepositories() {
    const container = document.getElementById('github-container');
    if (!container) return;

    try {
        const username = window.CONFIG?.github?.username || 'your-username';
        const repositories = await fetchGitHubRepos(username);
        renderGitHubRepos(repositories);
    } catch (error) {
        console.error('Error loading GitHub repos:', error);
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <p>Unable to load GitHub repositories. Please check your username in config.</p>
            </div>
        `;
    }
}

async function fetchGitHubRepos(username) {
    try {
        // Fetch public repositories
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=stars&order=desc&per_page=6`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    // Add token if available for higher rate limits
                    ...(window.CONFIG?.github?.token && {
                        'Authorization': `token ${window.CONFIG.github.token}`
                    })
                }
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        // Return empty array on error
        return [];
    }
}

// ========================================
// RENDER GITHUB REPOSITORIES
// ========================================

function renderGitHubRepos(repositories) {
    const container = document.getElementById('github-container');
    if (!container) return;

    if (repositories.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <p>No repositories found. Update the GitHub username in the config.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = repositories.map((repo, index) => {
        const language = repo.language || 'Not specified';
        const stars = repo.stargazers_count || 0;
        const description = repo.description || 'No description available';

        return `
            <div class="repo-card card-animate" style="animation-delay: ${index * 0.1}s;">
                <div class="repo-header">
                    <a href="${repo.html_url}" target="_blank" class="repo-name">
                        ${repo.name}
                    </a>
                    <a href="${repo.html_url}" target="_blank" class="repo-icon" title="View on GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <p class="repo-description">${truncateText(description, 100)}</p>
                <div class="repo-meta">
                    <div class="repo-language">
                        <span class="language-dot" style="background-color: ${getLanguageColor(language)};"></span>
                        ${language}
                    </div>
                    ${stars > 0 ? `
                        <div class="repo-stars">
                            <i class="fas fa-star"></i>
                            ${stars}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'Python': '#3572A5',
        'Java': '#b07219',
        'TypeScript': '#2b7489',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'React': '#61dafb',
        'Node.js': '#68a063',
        'SQL': '#336791',
        'C++': '#f34b7d',
        'C': '#555555',
        'Go': '#00ADD8',
        'Rust': '#ce422b',
        'Ruby': '#cc342d'
    };

    return colors[language] || '#858585';
}

// ========================================
// REFRESH REPOSITORIES
// ========================================

function refreshGitHubRepos() {
    loadGitHubRepositories();
}

// Export functions for external use
window.loadGitHubRepositories = loadGitHubRepositories;
window.refreshGitHubRepos = refreshGitHubRepos;
