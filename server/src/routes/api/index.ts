import {Router} from 'express';

import auth_routes from './auth_routes.js'
import user_routes from './user_routes.js'

const router = Router();

router.use('/auth', auth_routes);
router.use('/api', user_routes);

export default router;