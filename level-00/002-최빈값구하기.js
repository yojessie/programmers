// 2022-10-13
// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  // reduce는 배열을 요소들을 순회하며 함수를 실행하고
  // 초기값에 맞는 하나의 값을 도출한다.
  // 초기값 설정 안하면 배열의 처음 값에 맞춰서 결과를 도출
  let count = array.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    // key가 cur인것의 값에 1을 더하던가, 아니면 0에 1을 더해라
    // 속성이 생성되기전엔 value가 NaN로 되어있기때문에, NaN인경우 초기값 0 셋팅이 필요함
    return acc;
    // 지금까지 reduce된 것을 반환해라
  }, {}); // 초기값을 객체로 설정

  let maxValue = Math.max(...Object.values(count));
  // 객체의 값을 펼쳐 가장 큰 값을 변수에 저장하고

  let maxKey = Object.keys(count).filter((key) => count[key] == maxValue);
  // count 배열에서 maxValue를 가진 key들을 뽑아와 새로운 배열로 생성

  return maxKey.length > 1 ? -1 : Number(maxKey);
}
