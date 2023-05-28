//
const {Pool} = require('pg');

 const pool = new Pool({
        user: 'dbkfkgzl',
        host: 'mahmud.db.elephantsql.com',
        database: 'dbkfkgzl',
        password: '0PMftMaBQcJlunRp1wyeNUL7RNTxcr-H',
        port: 5432,
    });

const getUsers = async (req,res) => {
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
  //await client.connect(); no es necesario
  //obtenemos los atributos o campos del body (cuerpo de la solicitud)
  console.log(req.body);
  const {hogar,id,nombre, apellido,fecha_nacimiento,edad,correo,celular,direccion,ocupacion,animales,discapacidad,salario} = req.body;
  
//Consulta SQL
  const response = await pool.query('insert into persona (hogar,id,nombre, apellido,fecha_nacimiento,edad,correo,celular,direccion,ocupacion,animales,discapacidad,salario) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)', [hogar,id,nombre, apellido,fecha_nacimiento,edad,correo,celular,direccion,ocupacion,animales,discapacidad,salario]);

  //Mostramos usuario ingresado o creado
  console.log(response);
  res.json({
    message: 'User Added Succesfully',
    body: {
      user: {id,nombre}
    }
  })
  //await client.end(); no es necesario
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

module.exports = {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser 
}
