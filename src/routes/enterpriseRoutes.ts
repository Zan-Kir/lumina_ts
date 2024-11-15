import express from 'express';
import { register, login, checkAuth, getEmpresa, updateEmpresa, deleteEmpresa } from '../controllers/enterpriseController';

const router = express.Router();

router.post('/register', register); 
router.post('/login', login);
router.get('/check', checkAuth);
router.get('/user/:id', getEmpresa); 
router.put('/user/:id', updateEmpresa);
router.delete('/user/:id', deleteEmpresa);

export default router;
