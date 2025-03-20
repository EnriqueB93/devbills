import { Router } from 'express';
import { baseRoutes } from './base.routes';

export const router = Router();

router.use('/', baseRoutes);
