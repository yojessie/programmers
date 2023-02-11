// 2023-02-11
// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let answer = 0;
  let left = 0;
  while (chicken > 0) {
    left += chicken % 10;
    chicken = Math.floor(chicken / 10);
    answer += chicken;
  }
  while (left > 0) {
    left = Math.floor(left / 10);
    answer += left;
  }

  return answer;
}
