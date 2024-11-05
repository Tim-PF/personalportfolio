const github_api = 'https://api.github.com/users/Tim-PF/repos';

export const fetchGitHubRepos = async () => {
    try {
       const response = await fetch(github_api)
       if(!response.ok) {
        throw new Error("Failed to fetch Github API")
       }
       const data = await response.json();
       return data
    } catch (error) {
        console.error(error);
        return[];
    }
};