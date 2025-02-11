import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Bookpage.css'
import { searchBooks } from '../../api/bookAPI';
import { BookData } from '../../interfaces/BookData';


const BookPage = () => {
    //? ==> DUMMY DATA WHGILE FIXING THE API/BACK-END
    const [books, setBooks] = useState<BookData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const books = await searchBooks("fiction");
                setBooks(books);
            } catch (error) {
                console.error("Error fetching books:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        // Main Page Fetching ID, Title, Authors, Description, Image, and Buttons for Edit and Delete
        <section className='section'>
            <div className="book-list">
                {
                    books.map((book) => (
                        <Link
                            to={`/books/${book.id}`}
                            key={book.id}
                            state={{ book }}
                            className="book-card"
                        >

                            <img src={book.thumbnail ?? book.title ?? ""} />
                            <h3>Title: {book.title}</h3>
                            <h4>By {book.authors}</h4>
                            <p>Summary: {book.description}</p>


                        </Link>
                    ))
                }
            </div>
        </section>
    )
};
export default BookPage