// 2022-09-01
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let arr = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];
  let answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (one[i] == answers[i]) {
      arr[0][1] += 1;
    }
    if (two[i] == answers[i]) {
      arr[1][1] += 1;
    }
    if (three[i] == answers[i]) {
      arr[2][1] += 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == 0) {
      delete arr[i];
    }
  }

  arr.sort((a, b) => b[1] - a[1]);
  arr.map((item) => answer.push(item[0]));

  return answer;
}
