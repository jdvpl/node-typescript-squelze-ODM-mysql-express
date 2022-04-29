import {Router} from 'express';
import { deleteUser, getUser, getUsers, saveUser, updateUser } from '../controllers/user.controller';

const router=Router();

router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/',saveUser);
router.put('/:id',updateUser);
router.get('/:id',deleteUser);



export default router;