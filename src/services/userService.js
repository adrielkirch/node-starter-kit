const userRepository = require('../repositories/userRepository');

async function add(email, name, password) {
    const user = await userRepository.add(email, name, password);
    return user;
  
}


module.exports = {
  add
};
