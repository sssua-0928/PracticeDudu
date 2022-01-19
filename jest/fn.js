const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({name, age}),
  makeUser2: (name, age) => ({name, age, gender: undefined}),
  makeUser3: (name, age, gender) => ({name, age, gender: undefined}),
  makeUser4: (name, age, gender) => ({name, age, gender}),
};

module.exports = fn;