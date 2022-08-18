// 2022-08-18

// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

function solution(arr) {
  var answer = 0;

  let sum = arr.reduce((a, b) => a + b);
  answer = sum / arr.length;

  return answer;
}

// 배운것
// 앞 문제에서 사용했던 reduce를 활용해서 30초만에 푼 문제 🥳
// 이것도 한줄로 정리해볼 수 있었겠다.

function solution(arr) {
  var answer = 0;

  answer = arr.reduce((a, b) => a + b) / arr.length;

  return answer;
}
