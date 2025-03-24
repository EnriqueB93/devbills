import { Category } from '../entities/category.entity';

export class CategotiesService {
	async create(): Promise<Category> {
		const category = new Category({
			title: 'exam category',
			color: '#ff33bb',
		});
		return category;
	}
}
