const PROD_URL = 'http://localhost:8000/';
const DEV_URL = 'http://localhost:8000/';
const LOCALHOST_URL = 'http://localhost:8000/';
//const LOCALHOST_URL = 'http://localhost:8001/';
export const BASE_URL = (process.env.REACT_APP_ENVIRONMENT === 'production' ? PROD_URL : (process.env.REACT_APP_ENVIRONMENT === 'staging' ? DEV_URL : LOCALHOST_URL)) + 'api/v1/admin';

export const RESOURCES = {
  users: 'users',
  properties: 'properties',
  property_types: 'property_types',
  property_buyers: 'property_buyers',
  property_sellers: 'property_sellers',
  notes: 'notes',
};

/**
 * 
 * @param {String} resourceName 
 * @returns {String}
 */
export function getResourcePath(resourceName) {
  return RESOURCES[resourceName.toLowerCase()];
}
