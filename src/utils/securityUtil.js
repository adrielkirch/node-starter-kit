const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const secretJwt = process.env.JWT_SECRET_KEY; ; 

function generateJsonwebtoken(userId) {
  const payload = { user: userId };
  const token = jwt.sign(payload, secretJwt);
  return token;
}

function decodedJsonwebtoken(token) {
  const decoded = jwt.verify(token, secretJwt);
  return decoded.user; 
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

function sensiviteDataField(data,field) {
    delete data[field];
    return data;
}

module.exports = { 
    generateJsonwebtoken,
    generateHashWithSalt,
    generateHashDigitalSignature,
    decodedJsonwebtoken,
    sensiviteDataField
};
