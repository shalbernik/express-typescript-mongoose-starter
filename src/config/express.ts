import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import {Environments} from "./environments";

class Express {
	public app: express.Express;
	public envFile: string = '.env';

	constructor() {
		this.app = express();
		this.setEnvironment();
		this.initMiddleware();
		this.initErrorHandlers();
		this.connectToMongo();
	}

	private setEnvironment(): void {
		let pathToEnvFile: string;

		switch (process.env.NODE_ENV) {
			case Environments.development:
				pathToEnvFile = `${this.envFile}.${Environments.development}`;
				break;
			case Environments.production:
				pathToEnvFile = `${this.envFile}.${Environments.production}`;
				break;
			default:
				throw new Error(`${process.env.NODE_ENV} this type of environment is not supported yet.`);
		}

		dotenv.config({path: pathToEnvFile});
	}

	private initMiddleware(): void {
		this.app.use(logger('dev'));
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended: false}));
		this.app.use(cookieParser());

		// Allow CORSE
		this.app.use((req: express.Request, res: express.Response, next: Function) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
			next();
		});
	}

	private initErrorHandlers(): void {
		this.app.use((req: express.Request, res: express.Response, next: Function): void => {
			let err: Error = new Error('Not Found');
			next(err);
		});

		this.app.use((err: any, req: express.Request, res: express.Response, next): void => {
			res.status(err.status || 500).render('error', {
				message: err.message,
				error: {}
			});
		});
	}

	private connectToMongo(): void {
	// 	console.log('\x1b[32m', 'NODE_ENV=', process.env.NODE_ENV);
		mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true}).then(
				() => console.log('\x1b[32m', '[mongo-db] connection was established'),
				() => console.log('\x1b[41m', '[mongo-db] connection was crashed'));
	}
}

export default new Express().app;