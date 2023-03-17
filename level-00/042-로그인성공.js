// 2023-02-09
// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  let result = "fail";
  for (let i of db) {
    if (i[0] == id_pw[0]) {
      if (i[1] == id_pw[1]) {
        result = "login";
        break;
      } else {
        result = "wrong pw";
        break;
      }
    }
  }
  return result;
}
