//para poder usarlo ejecutar desde consola: npm install --save express-validator

const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [ 
    
    check('correo')
    .exists()
    .isEmail()
    .not()
    .isEmpty(),

    check('username')
    .exists()
    .isLength({ min: 2 })
    .not()
    .isEmpty(),      

    check('password')
    .exists()
    .isLength({ min: 8 })
    .not()
    .isEmpty(),      

    check('cedula')
    .exists()
    .isNumeric(),

    check('celular')
    .exists()
    .isNumeric(),

    check('motivo')
    .exists()
    .not()
    .isEmpty(),

    check('ciudad')
    .exists()
    .not()
    .isEmpty(),

    //Validaciones que no se usan por ahora... 
    
    /* 
    check('hogar')
    .exists()
    .not()
    .isEmpty()
    .isString(),
    
    check('id')
    .exists()
    .not()
    .isEmpty()
    .isNumeric(),

    check('direccion')
    .exists()
    .not()
    .isEmpty(),

    check('ocupacion')
    .exists()
    .not()
    .isEmpty(),
    
    check('animales')
    .exists(),

    check('salario')
    .exists()
    .isNumeric(),

    check('discapacidad')
    .exists(),

    check('edad')
    .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
        //verificar rango edad
        if (value < 18 || value > 70) {
            throw new Error('El rango de edad debe ser entre 18 y 70')
        }
        return true
    }),


    check('fecha_nacimiento')
    .exists()
    .not()
    .isEmpty()
    .isDate(), 

    check('apellido')
    .exists()
    .isLength({ min: 2 })
    .not()
    .isEmpty(),
    */

    (req,res,next) => {
        validateResult(req,res,next)
    }


    //LISTO c: YA QUEDARON LAS VALIDACIONES DEL REGISTER BACKEND, TODO FUNCIONA XD 
    //Y NO DEJA PASAR SI NO ESTA BIEN ESCRITO TODO
]
const validatePerfilMascota = [
//nombreMascota,especieMascota,razaMascota, sexoMascota,descripcionMascota,vacunasMascota,historialMascota,localizacionMascota
    check('nombreMascota')
    .exists()
    .isLength({ min: 2 })
    .not()
    .isEmpty(),

    check('especieMascota')
    .exists()
    .isLength({ min: 4 })
    .not()
    .isEmpty(),

    check('razaMascota')
    .exists()
    .isLength({ min: 2 })
    .not()
    .isEmpty(),

    check('sexoMascota')
    .exists()
    .isLength({ min: 1 })
    .not()
    .isEmpty(),

    check('descripcionMascota')
    .exists()
    .isLength({ min: 2 })
    .not()
    .isEmpty(),

    check('vacunasMascota')
    .exists()
    .not()
    .isEmpty(),

    check('historialMascota')
    .exists()
    .not()
    .isEmpty(),

    check('localizacionMascota')
    .exists()
    .not()
    .isEmpty(),



    (req,res,next) => {
        validateResult(req,res,next)
    }

]

const validateAdopcion = [

    check('cedula')
    .exists()
    .not()
    .isEmpty()
    .isNumeric(),


    check('nombre')
    .exists()
    .isLength({ min: 2 })
    .not()
    .isEmpty(),

    check('apellidos')
    .exists()
    .isLength({ min: 2 })
    .not()
    .isEmpty(),

    check('fechaNacimiento')
    .exists()
    .not()
    .isEmpty()
    .isDate(), 

    check('edad')
    .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
        //verificar rango edad
        if (value < 18 || value > 70) {
            throw new Error('El rango de edad debe ser entre 18 y 70')
        }
        return true
    }),

    check('email')
    .exists()
    .isEmail()
    .not()
    .isEmpty(),

    check('telefono')
    .exists()
    .isNumeric(),

    check('direccion')
    .exists()
    .not()
    .isEmpty(),

    check('ocupacion')
    .exists()
    .not()
    .isEmpty(),

    check('masMascotas')
    .exists(),

    check('discapacidad')
    .exists(),

    check('salario')
    .exists()
    .isNumeric(),

    check('tipoCasa')
    .exists()
    .not()
    .isEmpty()
    .isString(),

    check('ciudad')
    .exists()
    .not()
    .isEmpty(),


    (req,res,next) => {
        validateResult(req,res,next)
    }
]




module.exports = { validateCreate, validatePerfilMascota, validateAdopcion }

