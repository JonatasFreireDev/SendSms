import { Router } from 'express';

import CheckController from './app/controllers/CheckController';
import UserController from './app/controllers/UserController';
import sendToAllSMS from './app/services/sendToAllSMS';

const routes = new Router();

routes.get('/user', UserController.indexAll);
routes.get('/user/:cell', UserController.indexUser);
routes.post('/user', UserController.store);
routes.put('/user/:cell', UserController.update);
routes.delete('/user/:cell', UserController.delete);

routes.post('/checkin/user/:cell', CheckController.store);

routes.post('/send/all', sendToAllSMS);

export default routes;
