// 2022-10-12
// https://school.programmers.co.kr/learn/courses/30/lessons/120808#qna

// 프로그래머스가 뭔가 업데이트 되어서 레벨0 문제들이 생겼다.
// 간단한것들은 바로 풀어보고, 공부거리가 됐던 것들만 코드를 남겨본다.

// 분수계산을 하면서 최대공약수, 최소공배수 구하는 알고리즘을 복습하고
// 급하다고 그냥 넘겼던 유클리드 호제법에 대해서도 제대로(?) 공부했다.

function solution(denum1, num1, denum2, num2) {
  let child = denum1 * num2 + denum2 * num1;
  let mother = num1 * num2;

  function getGCD(a, b) {
    return a % b == 0 ? b : getGCD(b, a % b);
  }
  let gcd = getGCD(mother, child);

  return [child / gcd, mother / gcd];
}

// 뭔가 훨씬 좋은 풀이가 있을 것 같았는데
// 일단 사람들 답도 비슷비슷한 것 같다!
