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

// 기본이 되는 로직은 잡았으나 각 패턴을 반복하면서 정답을 확인알 방법을 못찾아 한참 걸림
// 그리고 리턴값을 뽑아내는 부분도 문제를 잘못 이해했다.

function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let arr = [0, 0, 0];
  let answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] == answers[i]) {
      arr[0] += 1;
    }
    if (two[i % two.length] == answers[i]) {
      arr[1] += 1;
    }
    if (three[i % three.length] == answers[i]) {
      arr[2] += 1;
    }
  }

  let maxNum = Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == maxNum) {
      answer.push(i + 1);
    }
  }

  return answer;
}

// one 의 패턴을 answer의 길이만큼 반복하며 체크하기위해 one[i % one.length] == answers[i] 라는 조건값이 필요했다.
// 혼자서는 절대 생각 못했을 것 같은 내용..  잘 기억해뒀다 필요할떄 또 써먹어야지
