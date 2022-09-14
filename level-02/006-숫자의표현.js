// 2022-09-14
// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let temp = 0;

    for (let j = i; j <= n; j++) {
      temp += j;

      if (temp == n) {
        answer += 1;
      } else if (temp > n) {
        break;
      }
    }
  }

  return answer;
}

// 수학적 지식은 없으니 문제에 나온 내용 그대로 옮겨적듯이 풀어내는 중..
// 이제 조금씩 시간도 신경써서 풀어봐야하지 않을까 싶다
