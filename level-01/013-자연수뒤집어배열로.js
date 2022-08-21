// 2022-08-20

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// n은 10,000,000,000이하인 자연수입니다.

function solution(n) {
  var answer = [];

  answer = n.toString().split("").reverse().map(Number);

  return answer;
}

// 그동한 사용한 메소드를 활용하면 되는 간단한 문제였다.
