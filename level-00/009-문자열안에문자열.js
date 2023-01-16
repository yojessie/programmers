// 2023-01-16
// https://school.programmers.co.kr/learn/courses/30/lessons/120908

function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2
}

// 너무 간단한 것을.. 돌아돌아 꼬아서 생각하고 있었던 나


function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}
// 이렇게도 풀어볼 수 있었다.
// srt2기준으로 srt1을 나누었을때,
// str2와 정확히 일치하는 문자가 있어서 나눠지면 str1.split(str2)의 결과 배열은 2개의 아이템이 생기고
// 정확히 일치하는 문자가 없어서 나눠지지 않으면 결과 배열은 str1 문자가 통으로 들어가 1개의 아이템이 된다.