// 2023-01-20
// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
    let answer = []
    if (direction == 'right') {
        const temp = numbers.length - 1
        answer.push(numbers[temp])
        for (let i = 0; i < temp; i++) {
            answer.push(numbers[i])
        }
    } else {
        for (let i = 1; i < numbers.length; i++) {
            answer.push(numbers[i])
        }
        answer.push(numbers[0])
    }
    return answer
}

// 아주 원시적으로 풀었군.ㅋㅋ
// unshift 와 pop 이라는 메소드를 알게 되었다.

function solution(numbers, direction) {
    direction == 'right'
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift())
    return numbers
}

// 각 메소드의 반환값이 뭔지 확실히 알고 활용해야겠다.