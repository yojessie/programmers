// 2023-03-17
// Ch05-2. 스택_올바른 괄호 실습
// https://school.programmers.co.kr/learn/courses/13213/lessons/91074

function solution(s){
    let arr = []
    for (let i of s) {
        if (i == '(') {
            arr.push(i)
        } else {
            if (arr.length == 0) {
                return false
            } else {
                arr.pop()
            }
        }
    }
    return arr.length == 0
}

// 스택을 활용한 문제풀이
// 스택 : 선형자료구조, Last in First out

// 스택의 원리를 이용해서 아래와 같이 풀 수도 있는데, 몇가지 체크 포인트가 있었다.

function solution(s){
    let count = 0
    for (let i of s) {
        if (i == '(') {
            count++
        } else {
            if (count == 0) {
                return false
            } else {
                count--
            }
        }
    }
    return count == 0
}

// 위 풀이는 효율성 테스트를 통과하지 못했다.

// 1. for문에서 let선언과 const선언의 효율성이 달라진다.
//    : 재할당이 꼭 필요한 경우에만 let을 사용하는 습관을 들이자.

// 2. 비교연산자 사용시 == 보다는 === 사용시 효율성이 좋다.
//    : ==(동등연산자)는 두 값의 타입이 다를경우, 같은 타입으로 먼저 바꾼다음 값을 비교한다.
//    : ===(일치연산자)는 타입 변환을 시도하지 않으므로 절차가 줄어든다.

function solution(s){
    let count = 0
    for (const i of s) {
        if (i === '(') {
            count++
        } else {
            if (count === 0) {
                return false
            } else {
                count--
            }
        }
    }
    return count === 0
}

// 주로 스택을 사용하는 문제 유형은
// 짝 맞추기, Monotonic Stack(단조스택 : 스택을 이용해서 정렬하는 경우), DFS(혹은 백트래킹), 트리전위순회 유형이라고 한다.