// 2023-01-11
// 코딩테스트 연습을 너무 오랫동안 떠나있었더니 어색하다.
// 다시 매일매일 풀면서 익숙해지자.

// https://school.programmers.co.kr/learn/courses/30/lessons/120898

function solution(message) {
    let answer = 0
    for (i of message) {
        answer += 2
    }
    return answer
}

// 아.. 그러네 전체 문자길이의 2배값을 구해줘도 해결되는구나.

function solution(message) {
    return message.length * 2
}