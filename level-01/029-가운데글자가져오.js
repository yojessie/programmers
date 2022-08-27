// 2022-08-27

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
  let index = Math.floor(s.length / 2);

  return s.length % 2 == 0 ? s[index - 1] + s[index] : s[index];
}

// 쉽게 해결
// 문제를 풀때 생각을 손으로 적으면서 정리하면 훨씬 좋은 것 같다.
