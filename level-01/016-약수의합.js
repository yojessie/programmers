// 2022-08-22

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// n은 0 이상 3000이하인 정수입니다.
// 입출력 예 #1 : 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer = answer + i;
    }
  }

  return answer;
}

// 이건 앞에 비슷한 문제가 있어서 바로 통과
