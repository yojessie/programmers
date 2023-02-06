// 2023-02-05
// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
    const [one, two, three, four] = dots
    const x = [one[0], two[0], three[0], four[0]]
    const y = [one[1], two[1], three[1], four[1]]
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}