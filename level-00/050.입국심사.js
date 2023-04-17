// 2023-04-16
// Ch012-2. 이진탐색_입국심사 문제풀이

// 제한사항에 최대값이 10억이라는 큰 숫자가 들어옴
// 무조건 O(log n) 시간복잡도의 자료구조를 활용해야함 >> 이진탐색 활용

function solution(n, times) {
    const sortedTimes = times.sort((a, b) => a - b)
    // 이진탐색을 위한 정렬

    let left = 1
    // 최소시간
    let right = Math.max(...times) * n
    // let right = sortedTimes[sortedTimes.length - 1] * n
    // 작업시간 제일 오래걸리는 면접관이 n명을 처리하는데 걸리는 시간 (최대시간)

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const sum = times.reduce((acc, time) => 
            acc + Math.floor(mid / time), 0
        ) // sum : 임의값 mid 시간동안 심사시간 time이 걸리면 몇 명 처리할 수 있는지?

        if (sum < n) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return left
}

// 이것도 아직 확실히 이해되지 않는다..




// Array로 이진탐색 구현
function binarySearch(array, findValue) {
    let left = 0
    let right = array.length - 1
    let mid = Math.floor((left + right) / 2)
    while (left < right) {
        if (array[mid] === findValue) {
            return mid
        }
        if (array[mid] < findValue) {
            left = mid + 1
        } else {
            right = mid - 1
        }
        mid = Math.floor((left + right) / 2)
    }
    return -1
}