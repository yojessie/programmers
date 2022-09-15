// 2022-09-15
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let now = n.toString(2).match(/1/g).length;

  for (let i = n + 1; i < n * 2; i++) {
    let next = i.toString(2).match(/1/g).length;
    if (next == now) return i;
  }
}

// 바로 풀 수 있었던 문제이지만 반복문의 조건이 좀 엉성한거같다.
// 다른사람들 풀이를 보니 역시 반복문, 조건문을 어떻게 설정할지가 가장 중요한 것 같다.
