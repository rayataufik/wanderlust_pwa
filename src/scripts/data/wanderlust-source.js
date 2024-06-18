const { default: API_ENDPOINT } = require("../globals/api-endpoints");

class wanderlustSource {
  static async getAll() {
    try {
      const response = await fetch(API_ENDPOINT.WANDERLUST);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.error('Error fetching wanderlust:', error);
      return [];
    }
  }

  static async getDetail(id) {
    try {
      const response = await fetch(API_ENDPOINT.WANDERLUST_DETAIL(id));
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.error('Error fetching wanderlust detail:', error);
      return null;
    }
  }
}

export default wanderlustSource;