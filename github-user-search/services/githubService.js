import githubApi from "./githubApi";

export const getUser = (username) => {
  return githubApi.get(`/users/${username}`);
};

export const getRepos = (username) => {
  return githubApi.get(`/users/${username}/repos`);
};
