// 2023-01-30
// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
    let answer = []
    let temp = []
    for (let i of num_list) {
        if (temp.length % n == 0 && temp.length !== 0) {
            answer.push(temp)
            temp = []
        } 
        temp.push(i)
    }
    answer.push(temp)
    return answer
}

// 역시나 나는 문제를 너무 원초적으로 풀었다.
// splice 활용 사례들을 보고 다시 풀어봤다. splice는 원본을 변형하고 잘라낸 원소를 가진 배열을 반환한다.

function solution(num_list, n) {
    let answer = []
    while(num_list.length) {
        answer.push(num_list.splice(0, n))
    }
    return answer
}