import { Request, Response, NextFunction } from 'express';
import {Expert} from "../../common/entities/expert";

export class ExpertController {
	public static getAll(req: Request, res: Response, next: NextFunction): void {
		res.json([new Expert(1, 'John', 'Staff'), new Expert(2, 'Sara', 'CTO')]);
	}
}