// 2022-09-07
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  let txt = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  while (isNaN(s)) {
    for (let i = 0; i < txt.length; i++) {
      s = s.replace(txt[i], i);
    }
  }

  return Number(s);
}

// 별것도 아닌것을 오늘의 엉망진창인 컨디션에 파뭍혀서 해결하지 못하고있었다.
// isNaN로 불리언 값을 불러올 수 있다는 것도 배웠다.
