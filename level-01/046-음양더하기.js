// 2022-09-04
// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) {
      absolutes[i] = -absolutes[i];
    }
  }

  let answer = absolutes.reduce((a, b) => a + b);
  return answer;
}

// 이것도 가볍게 패쓰
// 다른 코드를 보니 역시나 좋은 방법들이 참 많다!
