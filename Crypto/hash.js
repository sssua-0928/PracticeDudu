const crypto = require('crypto');

const pwd1 = "123123";
const pwd2 = "12345";
const base64 = crypto.createHash('sha512').update(pwd1).digest('base64');
const base64_2 = crypto.createHash('sha512').update(pwd2).digest('base64');
const hex = crypto.createHash('sha512').update(pwd1).digest('hex');

console.log(base64);
console.log(base64_2);
console.log(hex);