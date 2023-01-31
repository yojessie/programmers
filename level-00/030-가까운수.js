// 2023-01-31
// https://school.programmers.co.kr/learn/courses/30/lessons/120890#

function solution(array, n) {
    array.sort((a, b) => a - b)
    let arr = []
    for (let i of array) {
        arr.push(Math.abs(i - n))
    }
    return array[arr.indexOf(Math.min(...arr))]
}