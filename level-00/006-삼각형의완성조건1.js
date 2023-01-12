// 2023-01-12
// https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
    sides.sort((a, b) => a - b)
    const [short1, short2, longest] = sides
    
    return longest < short1 + short2 ? 1 : 2
}