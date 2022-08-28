// 2022-08-28
// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i == 1) {
      return i;
    }
  }
}
// 이것도 바로 해결
