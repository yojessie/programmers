// 2023-04-15
// Ch011-2. 트라이_자동완성 문제풀이

// 자동완성 기능 구현에 효율적인 Trie 구조 활용하기

function makeTrie(words) {
    const root = {}
    for (const word of words) {
        let current = root
        for (const letter of word) {
            if (!current[letter]) current[letter] = [0, {}]
            current[letter][0]++
            current = current[letter][1]
        }
    }
    return root
}

function solution(words) {
    let answer = 0
    const trie = makeTrie(words)

    for (const word of words) {
        let count = 0
        let current = trie
        for (const [index, letter] of [...word].entries()) {
            count++
            if (current[letter][0] <= 1) break
            current = current[letter][1]
        }
        answer += count
    }
    return answer
}

// 지금은 이해가 안가는 부분이 너무 많다... 일단 패스