// 2022-08-19

// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

function solution(num) {
  var answer = "";

  if (num % 2 == 0 || 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }

  return answer;
}

// 보자마자 풀 수 있었던 쉬운 문제! 삼항연산자를 이용하면 더 단축할 수 있었겠다.

function solution(num) {
  var answer = "";

  answer = num % 2 == 0 || 0 ? "Even" : "Odd";

  return answer;
}
