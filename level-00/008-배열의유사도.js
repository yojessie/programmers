// 2023-01-12
// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
    const sum = [...s1, ...s2]
    const check = [...new Set(sum)]
    
    return sum.length - check.length
}

// 걸러내는 거니까 filter를 쓰는게 더 좋았겠다.

function solution(s1, s2) {
    const newArr = s1.filter((x) => s2.includes(x))
    return newArr.length
}