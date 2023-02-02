// 2023-02-03
// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
    const arr = s.split(" ")
    let answer = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] == 'Z'
        ? answer -= Number(arr[i - 1])
        : answer += Number(arr[i])
    }
    return answer
}