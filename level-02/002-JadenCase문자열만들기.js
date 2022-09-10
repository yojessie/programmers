// 2022-09-08
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .forEach((x) => x[0].toUpperCase());
}

// 왜 toUpperCase가 적용이 안되는가로 한참 고민했는데, string 자료와 array 자료 다루는 것의 차이점을 잘 알아야 할 것 같다.

function solution(s) {
  let answer = [];
  let arr = s.toLowerCase().split(" ");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      answer.push(" ");
    } else {
      let temp = arr[i].split("");

      for (let j = 0; j < temp.length; j++) {
        temp[0] = temp[0].toUpperCase();
        answer.push(temp.join(""));
        break;
      }
    }

    return answer.join(" ");
  }
}

// 이렇게 풀이하다가 도처히 앞, 뒤, 중간에 공백이 여러개 들어가는 케이스가 풀리지 않아서 풀이들을 보고 공부했다.
// string 자료를 다룰때 charAt과 substring을 사용할 수 있다는 것을 알게되어서 공부하고 활용했다.
// for, forEach, map 사용의 차이점을 잘 알아야겠다.

function solution(s) {
  let answer = s
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase())
    .join(" ");
  return answer;
}
