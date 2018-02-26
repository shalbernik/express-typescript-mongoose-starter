import { INamedEntity } from './INamedEntity';

export interface IExpert extends INamedEntity {
	id?: any;
	name: string;
	title?: string;
	rate?: number;
}