// 2022-09-08
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .forEach((x) => x[0].toUpperCase());
}

// 왜 toUpperCase가 적용이 안되지..?
