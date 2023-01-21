// 2023-01-21
// https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
  const index = num.toString().indexOf(k.toString());
  return index == -1 ? -1 : index + 1;
}

// 다른사람의 풀이를 보고 아래방식으로도 표현 가능하다는걸 알게 됐다.
// 마지막에 or 연산자를 사용하지 않아도 찾는 인덱스가 없는경우 자동으로 -1이 return 되긴 하지만
// 자릿수를 찾아주기위해 +1을 했고, 찾는게 없으면 -1 리턴의 의미로 || -1 을 붙여준 것으로.. 추정..ㅎ

function solution(num, k) {
  return num.toString().indexOf(k.toString()) + 1 || -1;
}
