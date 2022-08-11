<<<<<<< HEAD
const PROD_URL = 'https://rlty-proxy.herokuapp.com/';
const DEV_URL = 'https://rlty-proxy.herokuapp.com/';
 //const LOCALHOST_URL = 'https://rlty-proxy.herokuapp.com/';
//const LOCALHOST_URL = 'https://prod.myrlty.com/';
const LOCALHOST_URL = 'http://localhost:8001/';
=======
const PROD_URL = 'http://localhost:8000/';
const DEV_URL = 'http://localhost:8000/';
const LOCALHOST_URL = 'http://localhost:8000/';

>>>>>>> main
export const BASE_URL = (process.env.REACT_APP_ENVIRONMENT === 'production' ? PROD_URL : (process.env.REACT_APP_ENVIRONMENT === 'staging' ? DEV_URL : LOCALHOST_URL)) + 'api/v1/admin';

export const RESOURCES = {
  users: 'users',
  properties: 'properties',
  property_types: 'property_types',
  property_buyers: 'property_buyers',
  property_sellers: 'property_sellers',
  notes: 'notes',
<<<<<<< HEAD
  faqs: 'faqs',
  setting: 'setting',
  
=======
  showings: 'showings',
>>>>>>> main
};

/**
 * 
 * @param {String} resourceName 
 * @returns {String}
 */
export function getResourcePath(resourceName) {
  return RESOURCES[resourceName.toLowerCase()];
}
