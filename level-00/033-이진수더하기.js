// 2023-02-02
// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
    const sum = parseInt(bin1, 2) + parseInt(bin2, 2)
    return sum.toString(2)
}

// 큰 의미 없겠지만 아래가 더 좋았겠다.

function solution(bin1, bin2) {
    return parseInt(bin1, 2) + parseInt(bin2, 2).toString(2)
}

// 근데 이렇게 푸는건 의미가 없다는 사람들 의견..
// 직접 이진수를 구현할 수 있느냐에 포인트를 두고 문제를 푼 사람들도 있는 것 같다.