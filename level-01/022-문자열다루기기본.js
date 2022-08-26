// 2022-08-26

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

function solution(s) {
  return isNaN(parseInt(s))
    ? false
    : s.length == 4 || s.length == 6
    ? true
    : false;
}

// 이렇게 바로 푼 줄 알았는데, 몇가지 실패 케이스가 있었다.
// 테스트하다보니 문자가 뒤쪽에 있는 경우, parseInt가 뒷 문자를 강제로 떼어내고 숫자로 변환시키는 문제가 있었다.
// NaN을 반환하는 경우는 공백이 아닌 첫 문자를 숫자로 변환할 수 없는 경우라고 MDN문서에 나와있다.

// 그래서 각 문자를 분리한다음 체크하는 방식으로 다시 풀었다
// 그리고 배열중 하나라도 숫자가 아닌것은 그대로 false로 종료시키고,
// 숫자인경우 배열 길이를 체크하기위해 반복문을 두번 돌렸다.
// 더 좋은 방법이 있을거같고 간질간질한데.. 일단 빠르게 진도 빼고 다시 생각해보는걸로!

function solution(s) {
  arr = s.split("").map(Number);

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return false;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr.length == 4 || arr.length == 6) {
      return true;
    } else {
      return false;
    }
  }
}
