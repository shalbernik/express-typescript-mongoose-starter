import { model, Model, Schema, Document } from 'mongoose';
import { IExpert } from '../../common/interfaces/IExpert';

export interface IExpertModel extends IExpert, Document {
	getDisplayedName(): string;
}

export let ExpertSchema: Schema = new Schema({
	name: String,
	title: String,
	rate: Number
});

ExpertSchema.methods.getDisplayedName = () => `${this.title}: ${this.name}`;

export const ExpertModel: Model<IExpertModel> = model<IExpertModel>('ExpertModel', ExpertSchema);
