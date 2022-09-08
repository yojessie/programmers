// 2022-09-08
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  let arr = s.split(" ").map(Number);

  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);

  return `${minNum} ${maxNum}`;
}

// 한줄로 표현할 수도 있겠지만 난 이게 더 가독성이 좋다고 느껴진다.
// 뭐가 더 좋은 코드인지 물어보고싶다..
