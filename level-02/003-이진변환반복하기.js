// 2022-09-11
// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let answer = [0, 0];
  let zero = 0;

  while (s !== "1") {
    zero = s.split("").filter((x) => x == "0").length;
    answer[1] += zero;
    s = s
      .split("")
      .filter((x) => x !== "0")
      .length.toString(2);
    answer[0]++;
  }

  return answer;
}

// 바보같이 while 조건문을 잘못써서 한참 해맸다..
// while은 조건식이 true인 동안 계속 돌아간다.
