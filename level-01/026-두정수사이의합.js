// 2022-08-26

// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

function solution(a, b) {
  answer = 0;

  let big = a > b ? a : b;
  let small = a < b ? a : b;

  for (let i = small; i <= big; i++) {
    answer = answer + i;
  }

  return answer;
}

// 기초적으로 푸는데는 큰 문제 없었으나.. 별로 좋은 코드는 아닌 것 같다.
// 다른풀이에서 Math라는 함수가 있던데 공부해봐야겠다.
