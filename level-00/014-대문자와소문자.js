// 2023-01-19
// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
    let answer = ''
    for (let i of my_string) {
        if (i === i.toUpperCase()) {
            answer += i.toLowerCase()
        } else {
            answer += i.toUpperCase()
        }
    }
    return answer
}