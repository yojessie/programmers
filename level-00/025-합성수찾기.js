// 2023-01-26
// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
    let answer = 0
    for (let i = 1; i <= n; i++) {
        let temp = 0
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) temp++
            if (temp == 3) break
        }
        if (temp == 3) answer++
    }
    return answer
}