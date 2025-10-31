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

export const fetchOrganizationMembers = async () => {
  try {
    const response = await fetch(`https://api.github.com/orgs/${GITHUB_ORG}/members?per_page=100`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const members = await response.json();
    
    const memberDetailsPromises = members.map(async (member) => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${member.login}`);
        if (!userResponse.ok) {
          return {
            id: member.id,
            login: member.login,
            avatar_url: member.avatar_url,
            html_url: member.html_url,
            name: null,
            bio: null
          };
        }
        const userData = await userResponse.json();
        return {
          id: userData.id,
          login: userData.login,
          avatar_url: userData.avatar_url,
          html_url: userData.html_url,
          name: userData.name,
          bio: null
        };
      } catch (error) {
        console.error(`Error fetching details for ${member.login}:`, error);
        return {
          id: member.id,
          login: member.login,
          avatar_url: member.avatar_url,
          html_url: member.html_url,
          name: null,
          bio: null
        };
      }
    });
    
    return await Promise.all(memberDetailsPromises);
  } catch (error) {
    console.error('Error fetching organization members:', error);
    throw error;
  }
};

export const fetchUserDetails = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const userData = await response.json();
    return {
      id: userData.id,
      login: userData.login,
      avatar_url: userData.avatar_url,
      html_url: userData.html_url,
      name: userData.name || userData.login,
      bio: userData.bio,
      company: userData.company,
      location: userData.location,
      twitter_username: userData.twitter_username,
      public_repos: userData.public_repos,
      followers: userData.followers
    };
  } catch (error) {
    console.error(`Error fetching user details for ${username}:`, error);
    throw error;
  }
};
