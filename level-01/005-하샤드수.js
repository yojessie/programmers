// 2022-08-17

// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// x는 1 이상, 10000 이하인 정수입니다.

// 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.
// 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

function solution(x) {
  var answer = true;

  let splited = x.toString().split("").map(Number);
  let sum = splited.reduce((a, b) => a + b);

  if (x % sum !== 0) {
    answer = false;
  }

  return answer;
}

// 배운것
// toString, split, map(Number), reduce 메소드를 사용해봤다.
// 문제풀이에 적합한 메소드를 찾아보고 활용하는게 재밌다.

// !== 연산자를 ==! 로 잘못 적어서 문제 틀리고 당황했다 ㄷㄷ

// 그러고보니 splited와 sum으로 정의한 것을 한줄로 처리할 수 도있었고,
// if문도 삼항연산자로 적어볼 수도 있었겠다.

function solution(x) {
  var answer = true;

  let sum = x
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);

  answer = x % sum !== 0 ? false : true;

  return answer;
}
