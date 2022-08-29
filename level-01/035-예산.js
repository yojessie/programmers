// 2022-08-29
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  let arr = d.sort((a, b) => a - b);
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];

    if (temp > budget) {
      return i;
    } else if (temp == budget) {
      return i + 1;
    }
  }
}

// 처음에는 d 배열을 오름차순 정렬해서 작은값부터 더하다가, 그 합계가 예산을 초과하면 그 값을 잡아오려고 했다.
// 그러나 케이스 2, 6, 18, 19 실패. 로직이 잘못됐던것 같아서 한참 생각했지만.. 로직은 맞는거같은데..

// 질문 목록을 돌아다니다가 부서가 하나인 경우에도 대응이 필요하다는 글 발견. 한개의 부서도 지원 못해주는 케이스도 생각해야겠다.
// 이런 예외 케이스를 직접 찾아낼 수 있는 힘을 길러야한다.

function solution(d, budget) {
  let arr = d.sort((a, b) => a - b);
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];

    if (temp > budget) {
      return i;
    } else if (temp == budget) {
      return i + 1;
    } else if (temp < budget && i + 1 >= arr.length) {
      return i + 1;
    }
  }
}

// 예산까지 아직 돈이 남았는데, 더 이상 계산할 부서요청건이 없는 경우 조건문을 마지막에 추가했다.
