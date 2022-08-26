// 2022-08-27

// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

// 입출력 예#1 : arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

function solution(arr, divisor) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }

  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

// sort를 사용할떄 그냥 sort()로 사용하면 10이 5를 앞지르는 사태 발생.. 함수를 확실하게 써줘야했다.
// 생각의 흐름대로 풀수는 있었지만 불만족.. 좋은 풀이들이 참 많다.

function solution(arr, divisor) {
  var answer = arr.filter((i) => i % divisor == 0);
  // arr의 아이템에 divisor을 나눴을때 나머지가 0인것만 필터링함

  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
  // answer 배열에 암것도 없으면 -1을 리턴하고, 뭔가 있으면 오름차순 정렬해라
}
