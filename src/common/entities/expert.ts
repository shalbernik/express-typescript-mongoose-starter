import { NamedEntity } from './namedEntity';
import { IExpert } from '../interfaces/IExpert';

export class Expert extends NamedEntity implements IExpert {
	public title: string;
	public rate: number;

	constructor(id?: number, name?: string, title?: string, rate?: number) {
		super(id, name);
		this.title = title;
		this.rate = rate;
	}
}