const GITHUB_ORG = 'nst-sdc';
const GITHUB_API_URL = `https://api.github.com/orgs/${GITHUB_ORG}/repos`;

/**
 * Fetches the top repositories from the NST-SDC GitHub organization
 * @param {number} limit - Number of repositories to fetch (default: 10)
 * @returns {Promise<Array>} Array of repository objects
 */
export const fetchTopRepositories = async (limit = 10) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}?sort=updated&per_page=${limit}&type=public`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos = await response.json();
    
    // Transform the GitHub API response to match our project data structure
    return repos.map((repo, index) => ({
      id: index,
      title: repo.name,
      description: repo.description || 'No description available',
      link: `/project/${repo.name}`,
      githubUrl: repo.html_url,
      homepage: repo.homepage,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      topics: repo.topics || [],
      updated_at: repo.updated_at,
      created_at: repo.created_at,
      // Use GitHub's social preview image or a placeholder
      imgSrc: `https://opengraph.githubassets.com/1/${GITHUB_ORG}/${repo.name}`,
      openIssues: repo.open_issues_count,
      watchers: repo.watchers_count
    }));
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};

/**
 * Fetches details for a specific repository
 * @param {string} repoName - Name of the repository
 * @returns {Promise<Object>} Repository details
 */
export const fetchRepositoryDetails = async (repoName) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_ORG}/${repoName}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repo = await response.json();
    
    return {
      name: repo.name,
      description: repo.description || 'No description available',
      githubUrl: repo.html_url,
      homepage: repo.homepage,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      topics: repo.topics || [],
      updated_at: repo.updated_at,
      created_at: repo.created_at,
      openIssues: repo.open_issues_count,
      watchers: repo.watchers_count,
      license: repo.license?.name || 'No license',
      defaultBranch: repo.default_branch,
      // Get social preview image
      imgSrc: `https://opengraph.githubassets.com/1/${GITHUB_ORG}/${repo.name}`
    };
  } catch (error) {
    console.error(`Error fetching repository ${repoName}:`, error);
    throw error;
  }
};
