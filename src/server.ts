import express, { json } from 'express';
import { router } from './routes';
import 'dotenv/config';
import { setupMongo } from './database';

setupMongo().then(() => {
	const app = express();

	app.use(json());
	app.use(router);

	app.listen(3334, () => console.log('App is running at port 3334!'));
});
