const jwt = require("jsonwebtoken");
const crypto = require('crypto');

const token = generateJsonwebtoken("64f14323a319e1b66583ce70");
console.log(token);
const decoded = decodedJsonwebtoken(token);
console.log(decoded);

function generateJsonwebtoken(userId) {
  const payload = { user: userId };
  const secret = "your_secret_key"; // Replace 'your_secret_key' with your actual secret key
  const token = jwt.sign(payload, secret);
  return token;
}

function decodedJsonwebtoken(token) {
  const secret = "your_secret_key"; // Replace 'your_secret_key' with your actual secret key
  const decoded = jwt.verify(token, secret);
  return decoded.user; // You should return 'user', not 'userId'
}

function generateHashWithSalt(data) {
    return crypto
        .createHash('sha512' )
        .update(data + process.env.SALT)
        .digest('hex');
}

function generateHashDigitalSignature(data) {
    return crypto
        .createHash('sha512')
        .update(data + new Date() + genRandomBytes(64))
        .digest('hex');
}

function genRandomBytes(len) {
    const buf = crypto.randomBytes(len);
    return buf.toString("hex");
}

module.exports = { 
    generateJsonwebtoken,
    generateHashWithSalt,
    generateHashDigitalSignature,
    decodedJsonwebtoken
};
