// 2023-02-11
// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let answer = 0;
  let left = 0;
  while (chicken > 9) {
    left = chicken % 10;
    chicken = Math.floor(chicken / 10);
    answer += chicken;
    chicken += left;
  }

  return answer;
}

// 아래 풀이가 더 명확한 것 같다.

function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon > 9) {
    answer += Math.floor(coupon / 10);
    coupon = Math.floor(coupon / 10) + (coupon % 10);
  }

  return answer;
}
