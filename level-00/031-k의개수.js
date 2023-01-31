// 2023-01-31
// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
    let answer = 0
    for (let n = i; n <= j; n++) {
        let arr = n + "".split("")
        for (let m of arr) {
            if (m == k + "") answer++
        }
    }
    return answer
}

// 아래와 같이 풀 수 있다.
// i 부터 j까지 모든 숫자를 string에 더해놓고 k기준으로 split 하는 방식
// split을 참 여기저기 잘 활용할 수 있는 것 같다. split의 여집합을 이용한 문제풀이.

function solution(i, j, k) {
    let temp = ''
    for (i; i <= j; i++) {
        temp += i
    }
    return temp.split(k).length - 1
}