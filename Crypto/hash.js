const crypto = require('crypto');

const pwd1 = "123123";
const pwd2 = "12345";
const pwd3 = "12";
const base64 = crypto.createHash('sha512').update(pwd1).digest('base64');
const base64_2 = crypto.createHash('sha512').update(pwd2).digest('base64');
const base64_3 = crypto.createHash('sha512').update(pwd3).digest('base64');
const hex = crypto.createHash('sha512').update(pwd1).digest('hex');
const hex2 = crypto.createHash('sha512').update(pwd2).digest('hex');

console.log("pwd1:", base64);
console.log("pwd3:", base64_2);
console.log("pwd4:", base64_3);
console.log("pwd1:", hex);
console.log("pwd2:", hex2);