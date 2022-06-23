const PROD_URL = 'https://4d3d-110-39-172-42.ngrok.io/';
const DEV_URL = 'https://4d3d-110-39-172-42.ngrok.io/';
const LOCALHOST_URL = 'https://4d3d-110-39-172-42.ngrok.io/';//'http://localhost:1337/';
export const BASE_URL = (process.env.REACT_APP_ENVIRONMENT === 'production' ? PROD_URL : (process.env.REACT_APP_ENVIRONMENT === 'staging' ? DEV_URL : LOCALHOST_URL)) + 'api/v1/admin';

export const RESOURCES = {
  users: 'users',
  roles: 'roles',
  events: 'events',
  sessions: 'sessions',
  seasons: 'seasons',
  posts: 'posts',
  interests: 'interests',
  hashtags: 'hashtags',
  pages: 'pages',
  postreports: 'posts/reports',
  featuredposts: 'posts/featured',
  facilities: 'facilities',
  facilityservices: 'facilities/services',
  groups: 'groups',
  meetings: 'meetings',
  searchedkeywords: 'searchedkeywords',
  feedbacks: 'support'
};

/**
 * 
 * @param {String} resourceName 
 * @returns {String}
 */
export function getResourcePath(resourceName) {
  return RESOURCES[resourceName.toLowerCase()];
}
