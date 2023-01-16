// 2023-01-16
// https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
    const arr = String(n).split("").map(str => Number(str))
    return arr.reduce((acc, cur) => acc + cur)
}