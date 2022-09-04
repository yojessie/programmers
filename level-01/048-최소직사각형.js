// 2022-09-04
// https://school.programmers.co.kr/learn/challenges

function solution(sizes) {
  let a = [];
  let b = [];

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
    a.push(sizes[i][0]);
    b.push(sizes[i][1]);
  }

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  return a[a.length - 1] * b[b.length - 1];
}

// 이것도 생각의 과정 날 것 그대로..
// 더 고민을 해보자

function solution(sizes) {
  let w = 0;
  let h = 0;

  sizes.forEach((arr) => {
    let [a, b] = arr.sort((a, b) => a - b);
    if (a > w) w = a;
    if (b > h) h = b;
  });

  return w * h;
}

// 다른사람들의 풀이를 보면서 다시 정리했다.
// sizes의 각 아이템을 돌아가며 최대값을 얻어오면 되니까, forEach가 좋았을 것 같다.
// 그리고 세로형 명함은 가로로 돌린다음 가장 큰 것을 체크해야하므로 sort가 필요하다.
// 가로, 세로값을 구조분해 할당해서 a, b 로 정의해주는 것도 좋은 것 같다.
