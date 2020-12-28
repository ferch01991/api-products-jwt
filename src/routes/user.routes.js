import {Router} from 'express'
import { authJwt, verifySignUp } from '../middlewares';

const router = Router()

import * as useCtrl from "./../controllers/user.controller";

router.post('/', [
    authJwt.verifyToken, 
    authJwt.isModerator,
    verifySignUp.checkRoleExisted
], useCtrl.createUser);

export default router;