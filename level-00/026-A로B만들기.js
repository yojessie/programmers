// 2023-01-27
// https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
    const a = before.split("").sort().join("")
    const b = after.split("").sort().join("")
    return a === b ? 1 : 0
}