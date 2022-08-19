// 2022-08-19

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

function solution(arr) {
  var answer = [];

  answer =
    arr.length == 1 ? [-1] : arr.filter((num) => num !== Math.min(...arr));

  return answer;
}

// arr 배열의 갯수가 1개면 answer은 [-1]이고
// 아니면 arr에서 각 숫자 중 가장 작은 값이 아닌 것만 filter 해라

// Math.min(arr)가 반환하는것은 배열 형태이므로 spread oparator로 분해시켜서 number타입으로 만들어줘야 했다.

// 막힐땐 코드를 조각조각 뜯어서 실행해보면서 문제점을 찾아보자
