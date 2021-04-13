const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log(`salt : ${salt}`);
  crypto.pbkdf2('abcdefg', salt, 10000, 64, 'sha512', (err, key) => {
    console.log(`password1: ${key.toString('base64')}`);
  });
  crypto.pbkdf2('abcdefg', salt, 10000, 64, 'sha256', (err, key) => {
    console.log(`password2: ${key.toString('base64')}`);
  });
});

/*
crypto.pbkdf2('비밀번호', salt, 10000, 64, 'sha256', (err, key) => {
  console.log(`password2: ${key.toString('base64')}`);
});
*/