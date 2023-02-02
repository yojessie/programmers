// 2023-02-02
// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
    const string = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for (let i = 0; i < 10; i++) {
        numbers = numbers.replaceAll(string[i], i)
    }
    return Number(numbers)
}