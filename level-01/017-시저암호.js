// 2022-08-23

// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
// "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
function solution(s, n) {
  var answer = "";

  answer = s
    .split("")
    .map((item) => {
      let num = item.charCodeAt() + n;
      if (item == " ") {
        return " ";
      } else if (item == item.toUpperCase() && num > 90) {
        return num - 26;
      } else if (item == item.toLowerCase() && num > 122) {
        return num - 26;
      } else {
        return num;
      }
    })
    .map((item) => {
      return item == " " ? " " : String.fromCharCode(item);
    })
    .join("");

  return answer;
}

// 처음엔 각 문자의 아스키코드가 범위를 벗어나는 경우만 조건값으로 확인했는데 그러니까 일부만 성공했다.
// 원인은 아스키코드가 순환할 수 있는 구조를 만들지 못했다는것.
// P에서 n값으로 15가 오면 다시 대분자 A로 돌아가면서 순환해야했다.

// 대문자 Z가 들어온 경우, n값으로 25가 왔을때 소문자 아스키코드 영역과 겹치므로
// 조건값을 설정할때 대문자인지, 소문자인지도 함께 체크하는 방식으로 풀었다.

// 역시나 깔끔하고 기발한 방법으로 푼 좋은 코드들이 참 많구나 ㅎㅎ
