import express from 'express';
import type { Request, Response } from 'express';
import { Book } from '../../models/book.js';

const router = express.Router();

// GET searched books from Google Books API
router.get('/search/:params', async (req: Request, res: Response) => {
  console.log("searching books");
  const query = req.params.params;

  console.log(query);

  const Api = `https://www.googleapis.com/books/v1/volumes?q="${query}"&key=${process.env.GOOGLE_BOOKS_API_KEY}`
  try {
    console.log(Api);
    const response = await fetch(Api);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
});


// GET /books - Get all books
router.get('/', async (_req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    return res.json(books);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
});

// GET /books/:id - Get a book by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      return res.json(book);
    } else {
      return res.status(404).json({
        message: 'Book not found'
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
});

// POST /books - Create a new book
router.post('/', async (req: Request, res: Response) => {
  const { title } = req.body.bookTitle;
  const { authors } = req.body.bookAuthors;
  const { publishedDate } = req.body.publishedDate;
  const { description } = req.body.bookDescription;
  const { pageCount } = req.body.bookPageCount;
  const { maturityRating } = req.body.bookMaturityRating;
  const { thumbnail } = req.body.bookImageLinks;
  const { language } = req.body.bookLanguage;
  const { bookLink } = req.body.bookLink;
  try {
    const newBook = await Book.create({
      title,
      authors,
      publishedDate,
      description,
      pageCount,
      maturityRating,
      thumbnail,
      language,
      bookLink
    });
    return res.status(201).json(newBook);
  } catch (error: any) {
    return res.status(400).json({
      message: error.message
    });
  }
});

/* PUT /books/:id - Update a volunteer by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { volunteerName } = req.body;
  try {
    const volunteer = await Volunteer.findByPk(id);
    if(volunteer) {
      volunteer.volunteerName = volunteerName;
      await volunteer.save();
      res.json(volunteer);
    } else {
      res.status(404).json({
        message: 'Volunteer not found'
      });
    }
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});
*/

// DELETE /books/:id - Delete a book by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      await book.destroy();
      return res.json({ message: 'Book deleted' });
    } else {
      return res.status(404).json({
        message: 'Book not found'
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
});

export { router as bookRouter };
