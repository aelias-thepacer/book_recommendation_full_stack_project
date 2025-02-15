import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();


router.get('/', async (req: Request, res: Response) => {
    const address = req.query.address as string;

    if (!address) {
        return res.status(400).json({ message: 'Address is required' });
    }

    try {
        // Geocode the address to get lat and lng
        const geocodeResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_API_KEY}`
        );
        const location = geocodeResponse.data.results[0]?.geometry.location;

        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }

        const { lat, lng } = location;

        // Fetch nearby libraries using the lat and lng
        const librariesResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=library&key=${process.env.GOOGLE_API_KEY}`
        );

        // Send back the library data
        const libraries = librariesResponse.data.results.map((library: any) => ({
            name: library.name,
            address: library.vicinity,
            lat: library.geometry.location.lat,
            lng: library.geometry.location.lng,
            place_id: library.place_id,
            rating: library.rating,
            photo: library.photos ? library.photos[0].photo_reference : undefined
        }));

        return res.json(libraries);
    } catch (error) {
        console.error('Error fetching libraries:', error);
        return res.status(500).json({ message: 'Error fetching library data' });
    }
});

export { router as libraryRouter };
