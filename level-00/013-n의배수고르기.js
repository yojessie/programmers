// 2023-01-19
// https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n, numlist) {
    return numlist.filter(x => x % n == 0)
}