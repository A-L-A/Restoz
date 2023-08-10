export const fetchPlaces = async (keyword) => {
    const API_URL = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(keyword)}&apiKey=1b48259b810e48ddb151889f9ea58db0&type=locality&limit=5`;
  
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching places:', error);
      throw error;
    }
  };
  