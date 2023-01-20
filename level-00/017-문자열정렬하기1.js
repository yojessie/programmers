// 2023-01-20
// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
    return my_string.match(/[0-9]/g).map(i => Number(i)).sort((a, b) => a - b)
}