// 2022-09-03
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  let half = nums.length / 2;
  let deleteRepeat = new Set(nums).size;

  return deleteRepeat > half ? half : deleteRepeat;
}

// ㅎㅎㅎㅎ 이건 보자마자 바로 풀었다!
