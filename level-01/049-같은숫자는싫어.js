// 2022-09-04
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

// filter로 앞의 숫자와 같은것은 걸러버리는 방법이 더 좋았겠구나..

function solution(arr) {
  return arr.filter((val, index) => val !== arr[index + 1]);
}
