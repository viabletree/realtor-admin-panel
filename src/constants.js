const PROD_URL = 'https://4d3d-110-39-172-42.ngrok.io/';
const DEV_URL = 'https://4d3d-110-39-172-42.ngrok.io/';
const LOCALHOST_URL = 'https://1ba4-110-39-172-42.ngrok.io/';//'http://localhost:1337/';
export const BASE_URL = (process.env.REACT_APP_ENVIRONMENT === 'production' ? PROD_URL : (process.env.REACT_APP_ENVIRONMENT === 'staging' ? DEV_URL : LOCALHOST_URL)) + 'api/v1/admin';

export const RESOURCES = {
  users: 'users',
  properties: 'properties',
};

/**
 * 
 * @param {String} resourceName 
 * @returns {String}
 */
export function getResourcePath(resourceName) {
  return RESOURCES[resourceName.toLowerCase()];
}
