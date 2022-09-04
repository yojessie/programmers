// 2022-09-04
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let rest = arr.filter((ele) => !numbers.includes(ele));
  return rest.reduce((acc, cur) => acc + cur);
}

// 와.. 다른 풀이 중에 0~9까지의 합에서 numbers의 합을 빼서 구하는 아이디어도 있었다. 짱!
// 역시나 위처럼 arr를 하나하나 선언해놓는건 좋은 방법이 아닌 것 같다.

function solution(numbers) {
  let answer = [];
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer.push(i);
  }
  return answer.reduce((acc, cur) => acc + cur);
}

// 이게 훨씬 좋겠다!
