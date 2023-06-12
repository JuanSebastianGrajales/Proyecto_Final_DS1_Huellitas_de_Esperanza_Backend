//
const {Pool} = require('pg');
const { cryptPassword } = require('../helpers/handleBcrypt');
//nuevo-----
//const bcrypt = require('bcryptjs');
//-------
 const pool = new Pool({
        user: 'dbkfkgzl',
        host: 'mahmud.db.elephantsql.com',
        database: 'dbkfkgzl',
        password: '0PMftMaBQcJlunRp1wyeNUL7RNTxcr-H',
        port: 5432,
    });
/*
//funcion para encriptar password
async function cryptPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}*/
//=========


    const getUsers = async (req,res) => {
      //await client.connect(); no es necesario
      //Consulta SQL
      const response = await pool.query('select * from cliente');
      //Obtenemos los usuarios
      //console.log("El usuario es:");
      //console.log(response.rows);
      //Mostramos los usuarios
      res.status(200).json(response.rows);
      //res.send(response.rows);
  
      //await client.end(); no es necesario
  }

const getUsersOld = async (req,res) => {
    //await client.connect(); no es necesario
    //Consulta SQL
    const response = await pool.query("select * from persona");
    //Obtenemos los usuarios
    console.log(response.rows);
    //Mostramos los usuarios
    res.status(200).json(response.rows);

    //await client.end(); no es necesario
}
const getUserById = async (req,res) =>{
//res.send('User ID ' + req.params.id);
const id = req.params.id;
const response = await pool.query('select * from persona where id = $1', [id]);
res.json(response.rows);
};

const createUser = async (req,res) =>{
  //obtenemos los atributos o campos del body (cuerpo de la solicitud)
  console.log(req.body);
  const {username,password,correo,cedula,ciudad,celular,motivo} = req.body;
  //const passwordHash = await encrypt(password) //Encriptar el password
  const passwordHash = await cryptPassword(password);
  //Consulta SQL
  const response = await pool.query('insert into cliente (username,password,correo,cedula,ciudad,celular,motivo) VALUES($1,$2,$3,$4,$5,$6,$7)', [username,passwordHash,correo,cedula,ciudad,celular,motivo]);
  //Mostramos usuario ingresado o creado
  res.json(response.rows);
};


const updateUser = async(req,res) =>{
const identificador = req.params.id;
const {hogar,nombre, apellido,fecha_nacimiento,edad,correo,celular,direccion,ocupacion,animales,discapacidad,salario} = req.body;
const response = await pool.query('update persona  set hogar = $1, nombre = $2, apellido = $3,fecha_nacimiento = $4, edad = $5, correo = $6, celular = $7, direccion = $8, ocupacion = $9,animales = $10, discapacidad = $11, salario = $12 where id = $13', [hogar,nombre, apellido,fecha_nacimiento,edad,correo,celular,direccion,ocupacion,animales,discapacidad,salario, identificador]);
console.log(response);
res.json('User updated successfully');
};

const deleteUser = async (req,res) =>{
const id = req.params.id; 
const response = await pool.query('delete from persona where id = $1',[id]);
console.log(response);
res.json(`User ${id} deleted successfully`);
};

const createPet = async (req,res) =>{
  //await client.connect(); no es necesario
  //obtenemos los atributos o campos del body (cuerpo de la solicitud)
  console.log("Este el body del frontend: "+ req.body);
  const {nombreMascota,especieMascota,razaMascota, sexoMascota,descripcionMascota,vacunasMascota,historialMascota,localizacionMascota } = req.body;

//Consulta SQL
/*
{fotoMascota,nombreMascota ,especieMascota,razaMascota, sexoMascota,descripcionMascota, vacunasMascota, historialMascota, localizacionMascota }
*/
  const response = await pool.query('insert into mascota (nombre,especie,raza,sexo,descripcion,vacunas,historial,localizacion) VALUES($1,$2,$3,$4,$5,$6,$7,$8)', [nombreMascota,especieMascota,razaMascota, sexoMascota,descripcionMascota,vacunasMascota,historialMascota,localizacionMascota]);

  //Mostramos usuario ingresado o creado
  console.log(response.rows);
  res.json(response.rows);
};

const getPet = async (req,res) => {
  //await client.connect(); no es necesario
  //Consulta SQL
  const response = await pool.query('select * from mascota');
  //Obtenemos los usuarios
  //console.log("El usuario es:");
  //console.log(response.rows);
  //Mostramos los usuarios
  res.status(200).json(response.rows);
  //res.send(response.rows);

  //await client.end(); no es necesario
}
const updatePet = async(req,res) =>{
  //const identificador = req.nombre;
  const {nombreMascota,especieMascota,razaMascota, sexoMascota,descripcionMascota,vacunasMascota,historialMascota,localizacionMascota } = req.body
  const response = await pool.query('update mascota  set especie = $2,raza = $3,sexo=$4,descripcion=$5,vacunas=$6,historial=$7,localizacion=$8 where nombre = $1', [nombreMascota,especieMascota,razaMascota, sexoMascota,descripcionMascota,vacunasMascota,historialMascota,localizacionMascota]);
  console.log(response);
  res.json('Pet updated successfully');
  };

  const deletePet = async (req,res) =>{
    //const id = req.params.id; 
    const {nombreMascota,especieMascota,razaMascota, sexoMascota,descripcionMascota,vacunasMascota,historialMascota,localizacionMascota } = req.body
    const id = req.params.id; 
    console.log("nombre chandoso: " + id);
    const response = await pool.query('delete from mascota where nombre = $1',[id]);
    console.log(response);
    res.json(`Pet ${id} deleted successfully`);
    };

    //let account = {nombre, apellidos,cedula,fechaNacimiento,edad, ciudad, direccion ,email,telefono,ocupacion,salario,tipoCasa,masMascotas, discapacidad}
    const createForm = async (req,res) =>{
      //obtenemos los atributos o campos del body (cuerpo de la solicitud)
      console.log(req.body);
      const {nombre, apellidos,cedula,fechaNacimiento,edad, ciudad, direccion ,email,telefono,ocupacion,salario,tipoCasa,masMascotas, discapacidad} = req.body;
      //Consulta SQL
      const response = await pool.query('insert into persona (id, nombre,apellido,fecha_nacimiento,edad,correo,celular,direccion,ocupacion,animales,discapacidad,salario,hogar,ciudad) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)', [cedula,nombre, apellidos,fechaNacimiento,edad,email,telefono, direccion,ocupacion,masMascotas, discapacidad,salario,tipoCasa,ciudad]);
      //Mostramos usuario ingresado o creado
      res.json(response.rows);
    };
module.exports = {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
  createPet,
  getPet,
  updatePet,
  deletePet,
  createForm 
}
