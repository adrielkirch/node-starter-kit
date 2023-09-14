const jwt = require("jsonwebtoken");
const crypto = require('crypto');



function generateJsonwebtoken(userId) {
  const payload = { user: userId };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
  return token;
}
function decodedJsonwebtoken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded.userId;
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
