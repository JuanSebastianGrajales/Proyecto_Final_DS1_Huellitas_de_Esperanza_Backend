//Función para cifrar contraseña
const bcrypt = require('bcryptjs');
//funcion para encriptar password
async function cryptPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

module.exports = {cryptPassword};




/*const bcrypt = require('bcryptjs')
//const { password } = require('pg/lib/defaults')

//Encriptamos la password
const encrypt = async (textPlain) => {
    const hash = await bcrypt.hash(textPlain, 10)
    return hash
}
//Comparamos que sean iguales las passwords
const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}


module.exports = { encrypt,compare }
*/