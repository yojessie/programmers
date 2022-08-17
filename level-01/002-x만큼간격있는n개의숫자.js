// 2022-08-17

// 함수 solution은 정수 x와 자연수 n을 입력 받아,
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

function solution(x, n) {
  let answer = [];

  answer.push(x);
  for (let i = 0; i < n - 1; i++) {
    answer.push(answer[i] + x);
  }

  return answer;
}

// 배운 것
// 더 좋은 방법이 있을 것 같아 고민하다가.. 일단 제출

// 그냥 x에 i를 곱하고, for문 조건값을 조금 수정해줬어도 되는구나
function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}
