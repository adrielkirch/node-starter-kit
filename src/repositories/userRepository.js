let users = [];

async function add(email, name) {
   users.push({
    email,name
   })
}

module.exports = {
    add
}