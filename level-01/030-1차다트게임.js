// 2022-08-27

// 다트게임 점수 계산 로직 만들기
// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

// 점수는 0에서 10 사이의 정수이다.
// 보너스는 S, D, T 중 하나이다.
// 옵선은 *이나 # 중 하나이며, 없을 수도 있다.

// 생각의 과정

// 1. 처음에는 일단 점수와 S, D, T를 분리해야겠다고 생각했다.

function solution(dartResult) {
  let score = dartResult
    .split("")
    .map(Number)
    .filter((item) => item % 1 == 0);
  // filter(Number)은 0을 없애버리는게 문제..
  for (let i = 0; i < score.length; i++) {
    if (score[i] == 1 && score[i + 1] == 0) {
      score[i] = 10;
      score.splice(i + 1, 1);
    }
  }
  console.log(score);
}
// 이렇게 점수까지는 걸러냈는데 벌써 코드가 지저분한 너낌...  일단 뚝심있게 풀어보자

// 2. 정규식을 공부하니까 위 코드가 이렇게 줄었다.

function solution(dartResult) {
  let score = dartResult.match(/\d+/g).map(Number);
  console.log(score);
}
// \d+\를 사용하니까 숫자가 한개이상 반복되는것을 한번에 잡아줘서 10을 바로 잡을 수 있었다.

function solution(dartResult) {
  let score = dartResult.match(/\d+/g).map(Number);
  let string = dartResult.match(/\D/g);

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "S") {
      score[i] = Math.pow(score[i], 1);
    } else if (string[i] == "D") {
      score[i] = Math.pow(score[i], 2);
    } else if (string[i] == "T") {
      score[i] = Math.pow(score[i], 3);
    } else if (string[i] == "*") {
      score[i] = score[i] * 2;
    } // ...?
  }
}

// 스타상과 아차상이 들어오는 경우 처리가 안된다.
// 숫자와 문자 배열이 동일한 인덱스 값으로 돌아가게 하려니 중간에 특수문자가 들어오면 틀어져버린다.

// 도저히 못잡고 하루 이상의 시간이 지나버려서 다른사람의 풀이를 보고 공부하기로 했다.
// 전체 문자열을 반복으로 돌려주고, 숫자를 임시로 num에 담은다음 (10은 별도처리), 각 문자가 오면 num을 처리해서 score 배열에 넣어준다.
// 순서대로 처리된 num이 score에 담기기때문에, 특수문자가 왔을때 직전 점수와 그 앞의 점수를 계산할 수 있게된다.

function solution(dartResult) {
  let score = [];
  let num = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i].match(/\d/g)) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        num = 10;
        i++;
      } else {
        num = dartResult[i];
      }
    } else if (dartResult[i] == "S") {
      score.push(Math.pow(num, 1));
    } else if (dartResult[i] == "D") {
      score.push(Math.pow(num, 2));
    } else if (dartResult[i] == "T") {
      score.push(Math.pow(num, 3));
    } else if (dartResult[i] == "*") {
      score[score.length - 1] *= 2;
      score[score.length - 2] *= 2;
    } else if (dartResult[i] == "#") {
      score[score.length - 1] *= -1;
    }
  }

  return score.reduce((acc, cur) => acc + cur);
}
