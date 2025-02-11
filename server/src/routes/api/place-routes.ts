import express from 'express';
import fetch from 'node-fetch';
import { PlaceAttributes } from '../../models/place.js'; 
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// GET nearby libraries from Google Places API
router.get('/find-libraries', async (req, res) => {
  const { latitude, longitude } = req.query; // Get latitude and longitude from query params
  const radius = 1500; // Radius in meters
  const apiKey = process.env.GOOGLE_PLACES_API_KEY; // Google Places API key

  console.log("GOOGLE_PLACES_API_KEY:", apiKey);  
  console.log("Latitude:", latitude, "Longitude:", longitude);

  const placesApiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=library&key=${apiKey}`;
  console.log("Fetching from Google Places API:", placesApiUrl); // Debugging log

  try {
    // Fetch data from Google Places API
    const response = await fetch(placesApiUrl);
    const data = await response.json();
    
    console.log("Google Places API Response:", data); // Debugging log


    if (data.status === 'OK') {
      // Map the API response to the PlaceAttributes interface
      const places: PlaceAttributes[] = data.results.map((place: any) => ({
        place_id: place.place_id,
        name: place.name,
        vicinity: place.vicinity,
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
      }));

      // Send the response with the mapped places
      res.status(200).json(places);
    } else {
      res.status(400).json({ message: 'No places found or API error' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export { router as placeRouter };
