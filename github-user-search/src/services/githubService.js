import api from "./api";

export const getUser = (username) => {
  return api.get(`/users/${username}`);
};

export const getRepos = (username) => {
  return api.get(`/users/${username}/repos`);
};
