// 2022-08-28
// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].toString(2).padStart(n, "0").split("");
    arr2[i] = arr2[i].toString(2).padStart(n, "0").split("");

    for (let j = 0; j < n; j++) {
      if (arr1[i][j] == "1" || arr2[i][j] == "1") {
        arr1[i][j] = "#";
      } else if (arr1[i][j] == "0" && arr2[i][j] == "0") {
        arr1[i][j] = " ";
      }
    }

    arr1[i] = arr1[i].join("");
  }

  return arr1;
}

// 생각의 흐름대로 풀었다. 요건 한시간 정도 걸린 것 같다. 쪼끔이나마 발전..

function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(
      (arr1[i] | arr2[i])
        .toString(2)
        .padStart(n, 0)
        .replace(/1/gi, "#")
        .replace(/0/gi, " ")
    );
  }
  return answer;
}

// 다른사람의 풀이를 보다보니 요 코드가 깔끔하고 좋아보였다. arr1[i] | arr2[i]로 두 배열을 다 처리할 수 있구나~
