import { login, signUp } from '../controllers/authorize.controller.js';

export default function routes(app, express) {

	// Packages
	const router = express.Router();

	router.post('/login', login);
	router.post('/create-account', signUp);

	app.use('/', router);
}