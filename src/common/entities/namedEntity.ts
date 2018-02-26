import { INamedEntity } from '../interfaces/INamedEntity';

export class NamedEntity implements INamedEntity {
	public id?: any;
	public name: string;

	constructor(id: any, name: string) {
		this.id = id;
		this.name = name;
	}
}