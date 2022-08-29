// 2022-08-29
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let arr = [];
  let count = [];
  let answer = 0;

  for (let i = left; i <= right; i++) {
    arr.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;

    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j == 0) {
        temp++;
      }
    }
    count.push(temp);
  }

  for (let i = 0; i < arr.length; i++) {
    if (count[i] % 2 == 0) {
      answer += arr[i];
    } else {
      answer -= arr[i];
    }
  }

  return answer;
}

// 어찌저찌 풀었지만 왕 길다..ㅎㅎ
// 이제 슬슬 일단 풀었다는 것 보다는 어떻게 하면 더 간결한? 가독성 좋고 효율성 있는 코드를 만들 수 있는지 같이 생각해야하나보다.

// 위 코드를 이렇게 정리할 수 있겠다.

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }

    if (count % 2 == 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}
