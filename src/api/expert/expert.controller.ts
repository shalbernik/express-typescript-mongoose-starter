import { Request, Response } from 'express';
import { ExpertModel, IExpertModel } from './expert.schema';
import { Expert } from '../../common/entities/expert';

export class ExpertController {
	public static getAll(req: Request, res: Response): void {
		ExpertModel.find({}).then((experts: IExpertModel[]) => {
			let expertsDTO: Expert[] = experts.map((e) => {
				let expert: Expert = new Expert(e._id, e.name);
				expert.title = e.title;
				expert.rate = e.rate;
				return expert;
			});
			res.json(expertsDTO);
		});
	}

	public static create(req: Request, res: Response): void {
		let expert: IExpertModel = new ExpertModel();
		expert.name = req.body.name;
		expert.title = req.body.title;
		expert.rate = req.body.rate;
		expert.save().then(() => {
			res.json({message: 'Expert was added successfully!', data: expert});
		}, (error) => res.send(error));
	}

	public static update(req: Request, res: Response): void {
		let expert: Expert = new Expert();
		expert.name = req.body.name;
		expert.title = req.body.title;
		expert.rate = req.body.rate;

		ExpertModel.findByIdAndUpdate({_id: req.body.id}, expert, {upsert: true}).exec().then(() => {
			res.json({message: 'Expert was updated successfully!', data: expert});
		}, (error) => res.send(error));
	}

	public static remove(req: Request, res: Response): void {
		let expert: IExpertModel = new ExpertModel();

		ExpertModel.findByIdAndRemove({_id: req.body.id}).exec().then(() => {
			res.json({message: 'Expert was removed successfully!', data: expert});
		}, (error) => res.send(error));
	}
}