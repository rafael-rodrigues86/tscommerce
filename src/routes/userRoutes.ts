import express from 'express';
import {createUser, getAllUsers} from '../controllers/userController'
import {authenticateToken} from '../middlewares/authMiddleware'

const router = express.Router();

router.post('/', createUser)
router.get('/', authenticateToken, getAllUsers)

export default router;