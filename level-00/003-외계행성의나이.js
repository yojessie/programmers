// 2022-10-17
// https://school.programmers.co.kr/learn/courses/30/lessons/120834#qna

function solution(age) {
  let text = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let arr = age.toString().split("");
  let answer = "";

  for (let i of arr) {
    answer += text.at(Number(i));
  }

  return answer;
}

// 처음에는 arr자료로 만들었다가 뒤에 string 자료로 알파벳을 정의하면서 코드를 수정했다.
// 자료의 형태에 따라 사용할 수 있는 메소드가 다르고
// 각 메소드를 통해 얻는 결과가 원본을 변형하는지, 새로운 자료로 리턴하는지 구분하는 연습이 더 필요하겠다.

function solution(age) {
  let text = "abcdefghijklmnopqrstuvwxyz";
  let arr = age.toString().split("");
  let answer = "";

  arr.map((n) => (answer += text.at(n)));

  return answer;
}

// + 문제도 잘 읽어야겠다. 문자열은 j까지만 있으면 되는거였다..
