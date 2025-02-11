import { Router } from 'express';
import { bookRouter } from './book-routes.js';
import { placeRouter } from './place-routes.js';

const router = Router();

router.use('/books', bookRouter);
router.use('/places', placeRouter);
export default router;
