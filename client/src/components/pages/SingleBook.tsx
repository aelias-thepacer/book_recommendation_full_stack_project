//import React from 'react';
import '../../assets/css/SingleBook.css'
import { useLocation } from 'react-router-dom'
//storing each book in a single book component
const SingleBook = () => {
    const location = useLocation(); //track the location of the page
    const { book } = location.state || {}


    if (!book) {
        return <h2>Book not found</h2>
    }


    return (

        <section className='section'>
            <div className='sing-book_container'>
                 {/* Back Button */}
                 <span className='back-button'>&#128281;</span>
                <img src={book.image} alt={book.title} />
                <div>
                    <h2>Title: {book.title}</h2>
                    <h4>By: {book.author}</h4>
                    <p>Summary: {book.description}</p>
                   
                </div>
            </div>
        </section>
    )
}

export default SingleBook;


