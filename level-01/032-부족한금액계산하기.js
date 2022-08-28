// 2022-08-28
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let pay = 0;
  for (let i = 1; i <= count; i++) {
    pay += price * i;
  }

  return pay - money > 0 ? pay - money : 0;
}

// 금방 풀 수 있었던 문제!
