// 2023-01-11
// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
    let answer = 0;
    
    if(dot[0] > 0) {
        dot[1] > 0 ? answer = 1 : answer = 4
    } else {
        dot[1] > 0 ? answer = 2 : answer = 3
    }
    
    return answer
}

// 구조분해 할당을 좀 더 적극적으로 활용해보자

function solution(dot) {
    const [num1, num2] = dot

    if (num1 > 0) {
        return num2 > 0 ? 1 : 4
    } else {
        return num2 > 0 ? 2 : 3
    }
}