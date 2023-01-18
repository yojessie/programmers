// 2023-01-18
// https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
    let vowel = /a|e|i|o|u/g
    return my_string.replace(vowel, '')
}

// 아래처럼 써도 되는구나

function solution(my_string) {
    let vowel = /[aeiou]/g
    return my_string.replace(vowel, '')
}