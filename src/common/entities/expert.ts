import {NamedEntity} from "./namedEntity";

export class Expert extends NamedEntity {
	public title: string;

	constructor(id: number, name: string, title?: string) {
		super(id, name);
		this.title = title;
	}
}