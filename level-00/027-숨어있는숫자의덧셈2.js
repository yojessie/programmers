// 2023-01-28
// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
    let answer = 0
    let temp = ''
    for (let i of my_string) {
        if (Number.isInteger(Number(i))) {
            temp += i
        } else {
            answer += Number(temp)
            temp = ''
        }
    }
    answer += Number(temp)
    return answer
}

// 좋았던 다른 사람의 풀이로 다시 풀어보기

function solution(my_string) {
    return my_string.replace(/[A-z]/g, " ").split(" ").map(n => n * 1).reduce((acc, cur) => acc + cur)
}

// 문자는 모두 " "로 바꿔놓고 그걸 기준으로 split 하는 방법이 있었다!