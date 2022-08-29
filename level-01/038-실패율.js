// 2022-08-29
// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  let answer = [];
  let arr = [];
  let person = stages.length;

  for (let i = 1; i <= N; i++) {
    let pass = stages.filter((item) => item == i).length;
    arr.push([pass / person, i]);
    person -= pass;
  }

  arr.sort((a, b) => b[0] - a[0]);
  arr.map((ele) => answer.push(ele[1]));

  return answer;
}

// 실패율을 계산하는 로직까지는 어찌저찌 잘 했는데,
// 도대체가 자료를 sorting했을떄 해당 자료의 인덱스값이 어떻게 같이 움직이게 해야할지 알수가 없어서 결국 검색후에 공부했다.

// 실패율 배열을 만들때 인덱스가 될 i 값을 같이 넣어주고,
// 실패율로 sort해서 정리된 배열 순서에서 index 값을 뽑아 answer에 넣어주면 되는거였다!
// 이런류의 해결이 필요할때가 많았던 것 같은데 다른문제에도 잘 활용해봐야겠다.
