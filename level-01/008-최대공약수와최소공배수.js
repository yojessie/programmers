// 2022-08-18

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 두 수는 1이상 1000000이하의 자연수입니다.

// 입출력 예 #2 : 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.

function solution(n, m) {
  var answer = [];

  let a = 0;
  let b = 0;

  let c = n < m ? m : n;

  for (let i = 1; i <= c; i++) {
    if (n % i == 0 && m % i == 0) {
      a = i;
    }
  }

  b = (n * m) / a;

  answer = [a, b];
  return answer;
}

// https://celltong.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-level-1-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98
