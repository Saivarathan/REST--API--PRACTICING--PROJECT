import express from 'express'



import { createUser, getUsers ,getUser ,deleteUsers,updateUsers} from '../controllers/users.js';


const router = express.Router();


//all routes in here starts with /
router.get('/',getUsers);

router.post('/',createUser);
// /user2=> req parame{id:2}
router.get('/:id',getUser)

router.delete('/:id',deleteUsers);

router.patch('/:id',updateUsers);


export default router;