// 2022-08-29
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  let num = n.toString(3).split("").reverse().join("");
  return parseInt(num, 3);
}

// 문제의 흐름대로 쭉 풀 수 있었는데, 다른 진수에서 10진수로 변환하는건 parseInt를 사용해야한다는 것을 알게되었다.
