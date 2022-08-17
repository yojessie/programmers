// 2022-08-17

// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를
// 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// phone_number는 길이 4 이상, 20이하인 문자열입니다.

function solution(phone_number) {
  var answer = "";

  front = phone_number.substring(0, phone_number.length - 4);
  replaceNum = front.replace(/[0-9]/g, "*");
  last = phone_number.substring(phone_number.length - 4);

  answer = replaceNum + last;

  return answer;
}

// 정말 생각의 과정대로 차근차근 풀었다.
// 치환이 필요한 문자열을 따로 빼서 가공하고, 뒷 4자리를 따로 저장한다음 합쳤다.

// 배운 것
// substring() 을 알게되었다.
// replace 정규식을 알게되었다. 심지어 정규식을 이용해 한줄로 정리한 답안도 있었다.
