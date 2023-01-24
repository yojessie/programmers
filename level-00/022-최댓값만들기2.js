// 2023-01-24
// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
    numbers.sort((a, b) => b - a)
    const frontNum = numbers[0] * numbers[1]
    const backNum = numbers[numbers.length - 1] * numbers[numbers.length - 2]
    return frontNum > backNum ? frontNum : backNum
}

// 마지막에 값을 return 할때 Math.max를 사용하는 방식도 있었다.

function solution(numbers) {
    numbers.sort((a, b) => b - a)
    const frontNum = numbers[0] * numbers[1]
    const backNum = numbers[numbers.length - 1] * numbers[numbers.length - 2]
    return Math.max(frontNum, backNum)
}