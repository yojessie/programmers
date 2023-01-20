// 2023-01-19
// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
    let answer = 0
    for (let i of my_string) {
        if (Number(i) == i * 1) answer += Number(i)
    }
    return answer
}

// 오랜만에 했더니 한참 해메다가 다른문제들 돌고 와서 바로 해결된 문제
// 매일매일 문제를 풀며 생각의 근육을 키워야한다.

// 근데 내가 한 풀이는 시간복잡도가 O(n)으로, 문자열이 길어질수록 불리하다.
// 문자열이 길다면 아래 풀이가 더 좋겠다.

function solution(my_string) {
    return my_string.match(/[0-9]/g, '').reduce((acc, cur) => Number(acc) + Number(cur))
}