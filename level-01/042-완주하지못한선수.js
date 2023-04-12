// 2022-09-03
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  let answer = participant
    .filter((ele) => !completion.includes(ele))
    .toString();
  return answer;
}

// 이렇게 쉽게 풀리는 것인가? 했으나 NOPE!
// 일단 filter를 사용할때 includes를 써서 요소를 걸러내는 법을 알게되었다.
// 근데 저렇게하면 중복되는 이름을 모두 빼버리기때문에 다른 로직이 필요했다.

function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    for (let j = 0; j < participant.length; j++) {
      if (completion[i] == participant[j]) {
        participant[j] = null;
        completion[i] = null;
      }
    }
  }

  let answer = participant.filter((ele) => ele !== null).toString();
  return answer;
}

// 반복문을 돌려서 각 아이템을 비교하는 방식.
// 이것도 간단한건데 종일 멍때리다 오래걸렸다.
// 근데 이 코드는 효율성 테스트에서 실패

// 답을 스포당하지 않는 선에서 질문게시판을 대략 둘러봤을때 효율성 관련은 역시 반복문이 문제인가보다.
// 최대 100,000명의 참가자가 있을 수 있기때문에..

// 그럼 처음에 사용한 filter로 먼저 걸러준다음 중복이름을 따로 처리하는 방식은 어떨까?

function solution(participant, completion) {
  let fail = participant.filter((ele) => !completion.includes(ele)).toString();

  let repeat = participant
    .filter((item, index) => participant.indexOf(item) !== index)
    .toString();

  return completion.includes(repeat) ? repeat : fail;
}

// fail은 participant 중 completion에 없는 값을 도출하고 (실패한사람)
// repeat은 participant 내부에 반복되는 값을 도출한다 (동명이인)
// 동명이인이 완주자 목록에 있으면 앞에 계산한 실패한사람을 리턴하고, 완주자 목록에 없으면 동명이인을 출력한다..
// 하지만 이건 테스트케이스도 두개 실패했다. 효율성도 실패.

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }
}

// 아니 근데 이게 되도 괜찮나..? 예외 케이스 있지 않을까..? 하면서 제출했는데 통과해버려???????
// 두 자료의 값이 다 동일한데 딱 하나만 다른거니까.. sort하면 겹치는 자료는 모두 순서가 같아질 것이고,
// 다른값 하나가 나왔을때 순서가 틀어질테니, 그때 안맞는 자리의 participant 값을 출력하면 끗???
// ... 허무하고 재밌다 ㅎ


// 2023-04-04 업데이트
// 해시테이블을 배우고 map을 이용해 다시 문제를 해결했다.

function solution(p, c) {    
  const table = new Map()
  p.forEach((e) => table.set(e, table.get(e) + 1 || 1))
  c.forEach((e) => table.set(e, table.get(e) - 1 || -1))
  
  for ([k, v] of table) {
      if (v == 1) return k
  }
}