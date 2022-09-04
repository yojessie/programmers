// 2022-09-04
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

// 내적 단어에 멘붕왔다가
// 이게모야?? 아무것도 아닌 문제였다
