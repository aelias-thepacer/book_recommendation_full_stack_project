import { PlacesData } from "../interfaces/PlacesData";

// Function to fetch geocode (latitude and longitude) from an address
const getGeocode = async (address: string): Promise<{ lat: number, lng: number }> => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Geocode API error');
    }

    const data = await response.json();
    
    if (data.status !== 'OK') {
      throw new Error('Geocode API did not return valid data');
    }

    return data.results[0]?.geometry.location;  // Returns { lat, lng }
  } catch (err) {
    console.error("Error in geocoding:", err);
    throw err;  // Propagate error
  }
};

// Define the structure of the response from the places API for better type safety
interface PlacesAPIResponse {
  status: string;
  results: any[];  // You may want to create an interface for the items in results if needed
}

// Function to fetch nearby libraries using latitude and longitude
const getNearbyLibraries = async (lat: number, lng: number): Promise<PlacesData[]> => {
  try {
    const response = await fetch(`/places/find-libraries?latitude=${lat}&longitude=${lng}`);
    
    if (!response.ok) {
      throw new Error('Error fetching libraries');
    }

    const data: PlacesAPIResponse = await response.json();

    if (data.status !== 'OK') {
      throw new Error('Error in library API response');
    }

    // Map the API response to match the PlacesData structure
    const libraries: PlacesData[] = data.results.map((place: any) => ({
      place_id: place.place_id,
      name: place.name,
      vicinity: place.vicinity,
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
      type: 'library',
    }));

    return libraries;  // List of nearby libraries
  } catch (err) {
    console.error("Error fetching libraries:", err);
    throw err;  // Propagate error
  }
};

export { getGeocode, getNearbyLibraries };
