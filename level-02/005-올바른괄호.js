// 2022-09-14
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  return s.charAt(s.length - 1) == "(" ? false : true;
}

// 처음에는 이렇게 풀었다.
// 문자열의 마지막이 ( 이면 닫히지 않은 괄호로 취급하면 되는 것이 아닌가 하고. 근데 아닌가보다.
// 효율성 테스트도 하나 실패함

function solution(s) {
  let answer = s.replaceAll("()", "");

  for (let i = 0; i < s.length; i++) {
    answer = answer.replaceAll("()", "");
    if (answer == "") {
      return true;
    } else if (answer == answer.replaceAll("()", "")) {
      return false;
    }
  }
}

// 이렇게 풀고 싶었는데 이 방식으로는 도저히 효율성테스트를 통과할 수 없었다.
// replace 시키는 값을 answer에 바뀔때마다 저장하기 때문일까??

function solution(s) {
  let answer = 0;

  for (let i of s) {
    if (i === "(") {
      answer += 1;
    } else {
      if (answer === 0) {
        return false;
      }
      answer -= 1;
    }
  }

  return answer === 0 ? true : false;
}

// 배운것
// 효율성 체크가 필요할때는 데이터를 누적해서 남기는 방식으로 처리하지 말것
// for 문을 쓸때 i of data 방식을 처음 사용해봤다. i in data 방식은 효율성에 별로 좋지 않다고 한다.
// 조건문을 잘 설정해야 효율성을 높일 수 있다.
