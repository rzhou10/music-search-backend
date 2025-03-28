import { insertAlbum, saveAlbum, fetchCollection, searchAlbum } from '../controllers/album.controller.js';

export default function routes(app, express) {

	// Packages
	const router = express.Router();

	router.post('/insert', insertAlbum);
	router.post('/save', saveAlbum);
	router.get('/collection', fetchCollection);
	router.get('/search', searchAlbum)

	app.use('/', router);
}