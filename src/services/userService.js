const userRepository = require('../repositories/userRepository');

async function add(email, name) {
  try {
    console.log(email,' ', name)
    const user = await userRepository.add(email, name);
    return user;
  } catch (error) {
    throw new Error('Erro ao criar usuário no serviço');
  }
}


module.exports = {
  add
};
