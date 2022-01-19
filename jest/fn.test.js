const fn = require('./fn');

/* 
Macher 
: tobe(숫자나 문자 기본타입값 비교시 사용) 
*/

// test("1 = 1", () => {
//   expect(1).toBe(1); //1일때 기대값1
// });

// test("2 + 3 = 5", () => {
//   expect(fn.add(2,3)).toBe(5); //add(2,3)일때 기대값5 (성공)
// });

// test("3 + 3 = 5", () => {
//   expect(fn.add(3,3)).toBe(5); //add(3,3)일때 기대값5 (실패)
// });

// test("3 + 3 /= 5", () => {
//   expect(fn.add(3,3)).not.toBe(5); //add(3,3)일때 기대값5 아님 (성공)
// });

// test("2 + 3 = 5", () => {
//   expect(fn.add(2,3)).toEqual(5); //add(2,3)일때 기대값5 아님 (성공)
// });

// test("[실패] 이름과 나이를 입력받아 개체 반환", () => {
//   expect(fn.makeUser("Sua", 24)).toBe({
//     name: "Sua",
//     age: 20,
//   }); 
// }); //실패: age가 다르기 때문

// test("[실패] 이름과 나이를 입력받아 개체 반환", () => {
//   expect(fn.makeUser("Sua", 24)).toBe({
//     name: "Sua",
//     age: 24,
//   }); 
// }); //실패: 객체나 배열은 재귀적으로 돌면서 값을 확인해야하므로, toEqual 써야함

// test("[성공] 이름과 나이를 입력받아 개체 반환", () => {
//   expect(fn.makeUser("Sua", 24)).toEqual({
//     name: "Sua",
//     age: 24,
//   }); 
// }); //성공 : toEqual

// test("[실패] 이름과 나이, 성별을 입력받아 개체 반환", () => {
//   expect(fn.makeUser3("Sua", 24)).toStrictEqual({
//     name: "Sua",
//     age: 24,
//   }); 
// }); //실패 : toStrictEqual(엄격한 검사)

// test("[성공] 이름과 나이, 성별을 입력받아 개체 반환", () => {
//   expect(fn.makeUser4("Sua", 24, "female")).toStrictEqual({
//     name: "Sua",
//     age: 24,
//     gender: "female",
//   }); 
// }); //성공 : toStrictEqual