import { LibraryData } from "../interfaces/LibraryData";

export const fetchLibraries = async (address: string): Promise<LibraryData[]> => {
    try {
        const response = await fetch(`/api/libraries?address=${encodeURIComponent(address)}`);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Failed to fetch libraries: ${errorMessage}`);
        }

        const data: LibraryData[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching libraries:", error);
        throw new Error('Error fetching library data');
    }
};                                          
