// 2022-09-04
// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let arr = [];
  let answer = 0;
  for (let i = 0; i < moves.length; i++) {
    let pick = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][pick] !== 0) {
        arr.push(board[j][pick]);
        board[j][pick] = 0;
        break;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      answer += 2;
      arr.splice(i, 2);
      i = -1;
    }
  }

  return answer;
}

// 와 카카오문제 중 처음으로 뭔가 내 스스로 로직을 찾고 정리해서 통과한 문제!
// splice 사용법을 한번 더 정확하게 봐야겠다
// i가 -1로 초기화 되어야 i++ 되었을때 내가 원하는 인덱스값이 되었다는 것도 체크
