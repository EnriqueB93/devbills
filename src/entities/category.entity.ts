type CategoryProps = {
	id?: string;
	title: string;
	color: string;
};

export class Category {
	public id?: string;
	public title: string;
	public color: string;

	constructor({ color, id, title }: CategoryProps) {
		this.id = id;
		this.title = title;
		this.color = color;
	}
}
