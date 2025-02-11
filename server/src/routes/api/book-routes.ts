import express from 'express';
import type { Request, Response } from 'express';
import { Book } from '../../models/book.js';

const router = express.Router();

// GET searched books from Google Books API
router.get('/search/:params', async (req: Request, res: Response) => {

  const query = req.params.params;

  console.log(query);

  try {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        res.status(200).json(data);
        return data.items;
      });
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET /books - Get all books
router.get('/', async (_req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET /books/:id - Get a volunteer by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({
        message: 'Book not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// POST /books - Create a new volunteer
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
    res.status(201).json(newBook);
  } catch (error: any) {
    res.status(400).json({
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
      res.json({ message: 'Book deleted' });
    } else {
      res.status(404).json({
        message: 'Book not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

export { router as bookRouter };
