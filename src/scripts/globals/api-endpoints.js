import CONFIG from './config';

const API_ENDPOINT = {
  WANDERLUST: `${CONFIG.BASE_URL}api/contents`,
  WANDERLUST_DETAIL: (id) => `${CONFIG.BASE_URL}api/contents/${id}`,
};

export default API_ENDPOINT;
