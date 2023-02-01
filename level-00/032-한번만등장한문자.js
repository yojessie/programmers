// 2023-02-01
// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
    let answer = ''
    const unique = [...new Set(s)].sort().join("")
    for (let i of unique) {
        const temp = s.replace(i, "")
        if (!temp.includes(i)) answer += i
    }
    return answer
}

// 오.. 풀이중에 lastIndexOf() 라는 메소드를 활용한 사례도 있어서 다시 풀어봤다!
// 반복문을 돌려서 해당 알파벳의 인덱스가, 문자열에서 마지막 문자열과 같으면 (유일하다면) 답에 포함시키는 방식

function solution(s) {
    let answer = []
    for (let i of s) {
        if (s.indexOf(i) == s.lastIndexOf(i)) answer.push(i)
    }
    return answer.sort().join("")
}
