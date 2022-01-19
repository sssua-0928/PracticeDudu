const fn = require('./fn');

/* 
toBeNull
toBeUndifined
toBeDefined
*/
// test("[성공] null은 null이다 이거에요", () => {
//   expect(null).toBeNull();
// });


/*
toBeTruthy
toBeFalsy
*/
// test("[성공] 1 + (-1)은 false다 이거에요", () => {
//   expect(fn.add(1, -1)).toBeFalsy();
// });

// test("[실패] 비어있지 않은 문자열(hello + world)은 false다 이거에요", () => {
//   expect(fn.add('hello', 'world')).toBeFalsy();
// }); //실패: 빈 문자열이 안돌아감

// test("[성공] 비어있지 않은 문자열(hello + world)은 true다 이거에요", () => {
//   expect(fn.add('hello', 'world')).toBeTruthy();
// });


/*
toBeGreaterThan 크다
toBeGreaterThanOrEqual 크거나 같다
toBeLessThan
toBeLessThanOrEqual 작거나 같다
toBeCloseeTo 근사값
*/


/*
toMatch
*/
// test("[실패] Hello World에 a라는 글자가 있나?", () => {
//   expect(fn.add('Hello World')).toMatch(/a/);
// });
// test("[성공] Hello World에 a라는 글자가 있나?", () => {
//   expect(fn.add('Hello World')).toMatch(/H/);
// });
// test("[성공] Hello World에 a라는 글자가 있나?", () => {
//   expect(fn.add('Hello World')).toMatch(/h/i);
// });


/*
toContain
*/
test("[성공] 유저리스트에 Sua가 있나?", () => {
  const user = "Sua";
  const userList = ["Sehun", "Sua", "Hoyoung"];
  expect(userList).toContain(user);
});

