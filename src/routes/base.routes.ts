import { Router } from 'express';
import packgeJson from '../../package.json';

export const baseRoutes = Router();

baseRoutes.get('/', (_, res) => {
	const { name, version, author, description } = packgeJson;
	res.status(200).json({ name, version, author, description });
});
