// 2022-09-03
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0] - 1;
    let end = commands[i][1];
    let pick = commands[i][2] - 1;
    let sliceArr = array.slice(start, end).sort((a, b) => a - b);

    answer.push(sliceArr[pick]);
  }

  return answer;
}

// 바로 풀 수 있는 문제였는데.. 테스트케이스 하나를 놓쳐서 시간이 걸렸다.
// sort를 사용할때 그냥 sort()로 사용하면, 정렬이 1, 10, 2, 20, 3 이런식으로 된다는점 잊지말긔
