import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Bookpage.css'
const BookPage = () => {
    //? ==> DUMMY DATA WHGILE FIXING THE API/BACK-END
    interface Books {
        id: number,
        title: string,
        author: string,
        description: string,
        image: string
    }
    const [books] = useState<Books[]>([

        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "A novel about the American dream and the roaring twenties.",
            image: "https://covers.openlibrary.org/b/id/8217896-L.jpg"
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "A story of racial injustice and childhood innocence in the Deep South.",
            image: "https://covers.openlibrary.org/b/id/8226191-L.jpg"
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            description: "A dystopian novel about totalitarianism and surveillance.",
            image: "https://covers.openlibrary.org/b/id/8225631-L.jpg"
        },
        {
            id: 4,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            description: "A romantic novel that critiques the societal norms of 19th-century England.",
            image: "https://covers.openlibrary.org/b/id/8099256-L.jpg"
        },
        {
            id: 5,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            description: "A fantasy adventure following Bilbo Baggins on a quest to reclaim a lost kingdom.",
            image: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
        },
        {
            id: 6,
            title: "Moby-Dick",
            author: "Herman Melville",
            description: "A seafaring tale about obsession and revenge.",
            image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
        },
        {
            id: 7,
            title: "Harry Potter and the Sorcerer’s Stone",
            author: "J.K. Rowling",
            description: "A young wizard discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.",
            image: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
        },
        {
            id: 8,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            description: "A coming-of-age novel exploring teenage angst and rebellion.",
            image: "https://covers.openlibrary.org/b/id/8224816-L.jpg"
        },
        {
            id: 9,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            description: "An epic fantasy adventure about the battle for Middle-earth.",
            image: "https://covers.openlibrary.org/b/id/8131846-L.jpg"
        },
        {
            id: 10,
            title: "The Alchemist",
            author: "Paulo Coelho",
            description: "A philosophical novel about following one's dreams and destiny.",
            image: "https://covers.openlibrary.org/b/id/8075126-L.jpg"
        }


    ])

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

                            <img src={book.image} alt={book.title} />
                            <h3>Title: {book.title}</h3>
                            <h4>By {book.author}</h4>
                            <p>Summary: {book.description}</p>


                        </Link>
                    ))
                }
            </div>
        </section>
    )
};
export default BookPage