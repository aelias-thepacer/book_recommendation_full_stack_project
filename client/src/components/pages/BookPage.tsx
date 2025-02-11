import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Bookpage.css'
import { searchBooks } from '../../api/bookAPI';
import { BookData } from '../../interfaces/BookData';


const BookPage = () => {
    const [books, setBooks] = useState<BookData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const fetchBooks = async (search: string) => {
        try {
            const books = await searchBooks(search);
            setBooks(books);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks("lord of the rings");
    }, []);

    // Filter books based on the search query
    const filteredBooks = books.filter(book =>
        (book.title?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        book.authors?.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        // Main Page Fetching ID, Title, Authors, Description, Image, and Buttons for Edit and Delete
        <section className='section'>
            <input
                type="text"
                placeholder="Search by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onSubmit={() => fetchBooks(searchQuery)}
                className="search-bar"
            />
            <div className="book-list">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <Link
                            to={`/books/${book.id}`}
                            key={book.id}
                            state={{ book }}
                            className="book-card"
                        >
                            <img src={book.thumbnail ?? ""} alt={`image of ${book.title}`} />
                            <h3>Title: {book.title}</h3>
                            <h4>By {book.authors?.join(", ") ?? "Unknown Author"}</h4>
                            <p>Summary: {book.description || "No description available"}</p>
                        </Link>
                    ))
                ) : (
                    <div>No books found</div>
                )}
            </div>
        </section>
    )
};
export default BookPage