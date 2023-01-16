// 2023-01-16
// https://school.programmers.co.kr/learn/courses/30/lessons/120909

function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2
}

// 아.. 그렇지 나머지값도 활용할 수 있었다.

function solution(n) {
    return Math.sqrt(n) % 1 == 0 ? 1 : 2
}