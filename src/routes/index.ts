import { Router } from 'express';
import { baseRoutes } from './base.routes';
import { categoriesRouter } from './categories.routes';

export const router = Router();

router.use('/', baseRoutes);
router.use('/categories', categoriesRouter);
