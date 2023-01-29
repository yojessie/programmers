// 2023-01-29
// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
    let answer = 10
    let temp = 1
    for (let i = 2; i <= 10; i++) {
        if (temp > n) {
            answer = i - 2
            break
        } else {
            temp *= i
        }
    }
    return answer
}