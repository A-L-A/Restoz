export const fetchDetails = async (place_id) => {
    const API_URL = `https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=place:${place_id}&limit=20&apiKey=5177376a50cf44e08034c2982feec8b8`;
  
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching places:', error);
      throw error;
    }
  };