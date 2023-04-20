// 2024-04-20
// Ch16-1. 소수찾기 문제풀이
// https://school.programmers.co.kr/learn/courses/13213/lessons/91385

// 소수를 구하는 가장 직관적인 방법
// : 2부터 n-1 까지 루프를 돌며 나눠보기, O(n)
function get_primes(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

// 효율성 개선
// : 어떤 소수도 n의 제곱근보다 큰 수로 나눠지지 않는다는 점 이용, O(sqrt(n))
function get_primes(num) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false
    }
    return true
}

// 에라토스테네스의 체
// : 1부터 n까지 모든 소수 구하기 효율적, O(n log log n)
function get_primes(num) {
    const isPrime = [false, false, ...Array(num - 1).fill(true)]

    for (let i = 2; i * i <= num; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= num; j += i) {
                isPrime[j] = false
            }
        }
    }

    return isPrime.filter(Boolean).length // true값의 갯수 반환
}

// 에라토스테네스의 체 공식을 외워보쟈