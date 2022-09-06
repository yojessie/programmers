// 2022-09-05
// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  function distance(from, to) {
    let key = [
      [1, 4, 7, "*"],
      [2, 5, 8, 0],
      [3, 6, 9, "#"],
    ];
    let fromLo = [];
    let toLo = [];

    for (let i = 0; i < key.length; i++) {
      for (let j = 0; j < key[i].length; j++) {
        if (key[i][j] == from) {
          fromLo.push(i, j);
        } else if (key[i][j] == to) {
          toLo.push(i, j);
        } else if (from == to) {
          fromLo.push(0, 0);
          toLo.push(0, 0);
        }
      }
    }

    return Math.abs(fromLo[0] - toLo[0]) + Math.abs(fromLo[1] - toLo[1]);
  }

  let left = "*";
  let right = "#";
  let answer = "";

  for (let i = 0; i < numbers.length; i++) {
    let toLeft = distance(left, numbers[i]);
    let toRight = distance(right, numbers[i]);
    if (numbers[i] % 3 == 1) {
      left = numbers[i];
      answer += "L";
    } else if (numbers[i] % 3 == 0 && numbers[i] !== 0) {
      right = numbers[i];
      answer += "R";
    } else if (toLeft < toRight) {
      left = numbers[i];
      answer += "L";
    } else if (toLeft > toRight) {
      right = numbers[i];
      answer += "R";
    } else {
      if (hand == "left") {
        left = numbers[i];
        answer += "L";
      } else {
        right = numbers[i];
        answer += "R";
      }
    }
  }

  return answer;
}

// 예외 케이스를 하나씩 찾아가며 겨우 해결..
// 키패드의 배열을 이중배열로 거리구하는 함수에 정의해놓고, 거리값을 구한다음 솔루션 함수에 활용했다.
// numbers[i] % 3 == 0 으로 3, 6, 9를 구분하다보니 0을 걸러내는 케이스 추가가 필요했고,
// 같은 자리 숫자를 연속해서 누를떄 거리를 0으로 나오게 하는 코드도 추가해주니까 통과되었다. 휴
