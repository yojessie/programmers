// 2022-08-22

// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// N의 범위 : 100,000,000 이하의 자연수

function solution(n) {
  var answer = 0;

  answer = n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);

  return answer;
}

// 요것도 바로 풀 수 있었던 비슷한 문제!
