import { apiClient } from './apiService';

export const getTeams = () => {
  return apiClient.get('/our-team?populate[card][populate]=image&sort=createdAt:desc').then((res) => res.data);
};
