// 2022-08-17

// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let a = [];
    for (let j = 0; j < arr1[i].length; j++) {
      a.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(a);
  }

  return answer;
}

// 간단한 문제같은데,,, 구글링을 많이 했다. 완전히 이해하기까지 시간이 꽤 걸렸다 😭😭
// 할 수 있을까.. 하다보면 능숙해지겠지..?
//
// 생각의 과정 펼쳐보기
//
// 일단 arr1의 item 수만큼 내부 arr를 생성해서 answer arr에 넣었다.
// 이중 arr의 값을 더해야하므로 for문이 추가로 필요했다.
// 각 arr의 i번째 arr 안에서 j번째 값들끼리 더한다.
// 더한것을 생성한 내부 arr에 넣는다.
