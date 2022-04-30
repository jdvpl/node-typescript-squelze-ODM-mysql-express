import {Router} from 'express';
import {check} from 'express-validator'
import { deleteUser, getUser, getUsers, saveUser, updateUser } from '../controllers/user.controller';
import { existeCorreo } from '../helpers/db-validators';
import { validarCampos } from '../middlewares/validar-campos';


const router=Router();

router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/',[
  check('name','El nombre es obligatorio').not().isEmpty(),
  check('email',"El correo es obligatorio").isEmail(),
  check('email').custom(existeCorreo ),
  validarCampos
],saveUser);
router.put('/:id',updateUser);
router.get('/:id',deleteUser);


export default router;