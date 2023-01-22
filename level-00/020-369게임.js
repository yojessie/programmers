// 2023-01-22
// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  return order
    .toString()
    .split("")
    .map((n) => Number(n))
    .filter((n) => n % 3 == 0 && n !== 0).length;
}
