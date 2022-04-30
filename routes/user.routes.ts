import {Router} from 'express';
import {check} from 'express-validator'
import { deleteUser, getUser, getUsers, saveUser, updateUser } from '../controllers/user.controller';
import { existeCorreo, noExisteId } from '../helpers/db-validators';
import { validarCampos } from '../middlewares/validar-campos';


const router=Router();

router.get('/',getUsers);
router.get('/:id',
[
  check('id','El id es invalido').isNumeric(),
  check('id').custom(noExisteId ),
  validarCampos
]
  ,getUser);
router.post('/',[
  check('name','El nombre es obligatorio').not().isEmpty(),
  check('email',"El correo es obligatorio").isEmail(),
  check('email').custom(existeCorreo ),
  validarCampos
],saveUser);
router.put('/:id',
  [
    check('id','El id es invalido').isNumeric(),
    check('email').custom(existeCorreo ),
    check('id').custom(noExisteId ),
    validarCampos
  ]
,updateUser);
router.delete('/:id',
[
  check('id','El id es invalido').isNumeric(),
  check('id').custom(noExisteId ),
  validarCampos
]
  ,deleteUser);


export default router;