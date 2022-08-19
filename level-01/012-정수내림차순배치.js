// 2022-08-19

// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// n은 1이상 8000000000 이하인 자연수입니다.

function solution(n) {
  var answer = 0;

  arr = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join()
    .replace(/,/g, "");
  answer = parseInt(arr, 10);

  return answer;
}

// 내림차순 정렬을 위해 매개변수로 받은 수를 string으로 변환하고, 분해해서, 내림차순으로 정렬하고,
// 배열을 문자열로 join시킨다음 , 기호를 없애고 다시 숫자로 바꿨다.

// 각종 메소드의 향연 ㅋ

// 다른사람 코드를 보고 배운것 1
// n + "" 만으로 숫자를 문자로 바꿀 수 있구나

// 다른사람 코드를 보고 배운것 2
// 그냥 기본 sort로 오름차순 정렬한다음 reverse 시켜도 내림차순 정렬이 되는구나

// 다른사람 코드를 보고 배운것 3
// join("")를 하면 replace가 필요없구나

function solution(n) {
  var answer = 0;

  answer = parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

  return answer;
}
