const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser, createPet, getPet, updatePet, deletePet, createForm } = require('../controllers/index.controller');
//---agregado este const-------//
const {validateCreate, validatePerfilMascota, validateAdopcion} = require('../validators/index.controller');
//----------//
//const getUsers = require('../database/base');

//Rutas
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
//---agregado el validateCreate------//
router.post('/users', validateCreate, createUser);
router.post('/pets', validatePerfilMascota,createPet);
//router.get('/pets',getPet);

router.put('/pets',validatePerfilMascota,updatePet);
router.delete('/pets/:id',deletePet);

router.post('/forms',validateAdopcion ,createForm);

//router.post('/users', createUser);
//---------//
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);
module.exports = router;