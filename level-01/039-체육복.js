// 2022-08-30
// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] - 1 == reserve[j] || lost[i] + 1 == reserve[j]) {
                delete lost[i]
                delete reserve[j]
                answer++
            }
        }
    }
    
    return answer;
}