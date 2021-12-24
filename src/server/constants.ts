const DEFAULT_NODE_SERVER_PORT = 3000;
export const NODE_SERVER_PORT = process.env.PORT || DEFAULT_NODE_SERVER_PORT

// change this if locally
// export const IS_PROD = (process.env.NODE_ENV === 'production');
// export const API_SERVER_BASE_URL = IS_PROD ? 'https://enigmatic-refuge-09494.herokuapp.com/' : 'http://localhost:8080';
export const API_SERVER_BASE_URL = 'https://enigmatic-refuge-09494.herokuapp.com/';

// export const API_SERVER_PORT = process.env.API_PORT || DEFAULT_API_SERVER_PORT;
