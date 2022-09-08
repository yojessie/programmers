// 2022-09-08
// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let miss = win_nums.filter((x) => !lottos.includes(x));

  for (let i = 0; i < miss.length; i++) {
    for (let j = 0; j < lottos.length; j++) {
      if (lottos[j] == 0) {
        lottos[j] = miss[i];
        break;
      }
    }
  }

  let winRank = 7 - win_nums.filter((x) => lottos.includes(x)).length;
  let loseRank = 7 - (6 - miss.length);

  if (winRank > 6) winRank = 6;
  if (loseRank > 6) loseRank = 6;

  let answer = [winRank, loseRank];

  return answer;
}

// 그래두 이 문제는 하루 채 안걸려서 완전히 내가 생각한 로직으로 풀었다.
// 마지막에 테스트케이스 한개 실패하는 이유를 못찾아서 질문게시판을 둘러봤고
// [ 1, 2, 3, 4, 5, 6] [7, 8, 9, 10, 11, 12] [6, 6] 으로 0 이 없는 경우에 대응이 필요했다.
