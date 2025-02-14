import { Router } from 'express';
import { bookRouter } from './book-routes.js';
import { libraryRouter } from './library-routes.js';

const router = Router();

router.use('/books', bookRouter);
router.use('/libraries', libraryRouter);

export default router;
