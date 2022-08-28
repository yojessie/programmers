// 2022-08-28
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let num = [];
  let temp = 1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = temp; j < numbers.length; j++) {
      num.push(numbers[i] + numbers[j]);
    }
    temp++;
  }

  return [...new Set(num)].sort((a, b) => a - b);
}

// 금방 해결했지만 다른분들 코드를 보니 아쉬웠던 문제

// 배열을 돌떄마다 j 처음값이 1씩 추가되길 바랬으면 그냥 let j = i + 1 로 표현하면 되는거였다.

// [...new Set(num)] 은 배열의 중복값을 없애는 방법을 찾다가 알게 된 것.
const arr = [1, 2, 3, 1, 2, 3];
const set = new Set(arr); // Set {1, 2, 3} 형태의 set 객체로 바꾼 후
const newArr = [...set]; // 객체의 값들을 배열로 다시 펼쳤다
console.log(newArr); // [1, 2, 3]
