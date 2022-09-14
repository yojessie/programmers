// 2022-09-11
// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[B.length - 1 - i];
  }

  return answer;
}

// 처음엔 조합을 모두 구해놓고 비교하려다가
// 제일 작은 수와 제일 큰 수를 곱하는 식으로 할 수 있지 않을까 해서 풀어봤는데
// 되어버려따!!
