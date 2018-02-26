import { Express } from 'express';
import { ExpertController } from './expert.controller';

export class ExpertRouter {

	public static init(app: Express) {
		app.route('/expert/all').get(ExpertController.getAll);
		app.route('/expert/create').post(ExpertController.create);
		app.route('/expert/update').put(ExpertController.update);
		app.route('/expert/remove').delete(ExpertController.remove);
	}
}