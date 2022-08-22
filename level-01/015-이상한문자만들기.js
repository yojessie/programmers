// 2022-08-22

// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다.
// 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

function solution(s) {
  var answer = "";

  answer = s.split(" ");

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[i].length; j++) {
      answer[i][j] =
        j % 2 == 0 ? answer[i][j].toUpperCase() : answer[i][j].toLowerCase();
      // ??????
    }
  }
  return answer;
}

// 각각 단계의 로직은 로그로 찍어보면 맞는데, 구한 값을 어떻게 할당해야할지 몰라 해맸다...
// 짝수 자릿수의 문자를 대문자로 변환한것을 어떻게 할당시키는가 하고.. 뭔가 바보같은 고민

// 그러다 도저히 안풀려서 전체문자를 각각 대문자와 소문자로 변환한것을 자리에 맞게 할당시키는 방법으로 풀었다.

function solution(s) {
  var answer = [];
  let capital = s.toUpperCase().split(" ");
  let small = s.toLowerCase().split(" ");

  for (let i = 0; i < capital.length; i++) {
    let a = [];

    for (let j = 0; j < capital[i].length; j++) {
      a.push(j % 2 == 0 ? capital[i][j] : small[i][j]);
    }
    a = a.join("");
    answer.push(a);
  }

  answer = answer.join(" ");
  return answer;
}

// ㅠㅠㅠㅠㅠ 진짜 오래걸려서 통과했다.

// 자릿수와 관련된 문제는 map을 활용하는게 훨씬 좋았을 것 같다. 기본으로 인덱스값을 제공하기 떄문에.
// 그리고 할당은.. 구지 하지않고 값을 리턴시키는 방법으로 정리하면 됐던것 같다.

function solution(s) {
  return s
    .split(" ")
    .map((a) => {
      return a
        .split("")
        .map((b, i) => {
          return i % 2 == 0 ? b.toUpperCase() : b.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}
