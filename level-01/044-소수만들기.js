// 2022-09-04
// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  nums.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let temp = [];
        for (let m = 2; m < sum; m++) {
          if (sum % m == 0) {
            temp.push(false);
          }
        }
        if (temp.length == 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

// ??? 이렇게 해도 되나?? 하면서 푼 방식.
// 너무나 생각의 과정 날것 그대로 인것 같은데.. 아직은 생각의 과정을 풀어내는 연습을 하는 단계가 맞지 않을까 하고 ^^;;; 지나가본다
// 독학하는건 최대한 빨리 피해봐야겠다. 동료나 멘토가 필요해..
