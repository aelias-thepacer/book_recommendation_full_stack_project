import React, { useState } from 'react';
import { fetchLibraries } from '../../api/libraryAPI';
import { LibraryData } from '../../interfaces/LibraryData';

const LibrariesPage = () => {
    const [address, setAddress] = useState<string>('');
    const [libraries, setLibraries] = useState<LibraryData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!address) return;

        setLoading(true);
        setError(null);

        try {
            const data = await fetchLibraries(address);
            setLibraries(data);
        } catch (error) {
            setError('Failed to fetch libraries');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Find Nearby Libraries</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    placeholder="Enter an address"
                />
                <button type="submit" disabled={loading}>Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div>
                {libraries.length > 0 ? (
                    libraries.map((library: any, index) => (
                        <div key={index}>
                            <h2>{library.name}</h2>
                            <p>{library.formatted_address}</p>
                            <a href={`https://www.google.com/maps?q=${library.geometry.location.lat},${library.geometry.location.lng}`} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                        </div>
                    ))
                ) : (
                    <p>No libraries found</p>
                )}
            </div>
        </div>
    );
};

export default LibrariesPage;
