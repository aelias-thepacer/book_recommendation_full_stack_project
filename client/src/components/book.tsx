interface BookProps {
    id: number;
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    pageCount: number;
    maturityRating: string;
    thumbnail: string;
    language: string;
    bookLink: string;
}
const Book = ({ id, title, authors, publishedDate, description, pageCount, maturityRating, thumbnail, language, bookLink }: BookProps) => {
    return (
        <div className="book">
            <img src={thumbnail} alt={title} />
            <h1>{title}</h1>
            <p>by {authors.join(', ')}</p>
            <p>Published: {publishedDate}</p>
            <p> {description}</p>
            <p>Pages: {pageCount}</p>
            <p>Language: {language}</p>
            <p>Maturity Rating:{maturityRating}</p>
            <a href={bookLink}> Read More</a>
        </div>
    )
}

export default Book;