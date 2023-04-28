// 2023-04-25
// Ch17-3. 재귀함수를 이용한 순열과 조합, 두개 뽑아서 더하기 문제풀이
// https://school.programmers.co.kr/learn/courses/13213/lessons/91110#note
// https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

// 문제풀이
function getPermutations(arr, n) {
    if (n === 1) return arr.map((v) => [v])
    
    const result = []
    arr.forEach((fixed, index, originArr) => {
        const rest = originArr.slice(index + 1)
        const permutations = getPermutations(rest, n - 1)
        const attached = permutations.map((v) => [fixed, ...v])
        result.push(...attached)
    })
    return result
}

function solution(numbers) {
    return [...new Set(getPermutations(numbers, 2).map((v) => v[0] + v[1]))].sort((a, b) => a - b)
}







// 조합 O(2ⁿ)
// 순서에 상관없이 n개의 요소를 선택 (중복제외)
function getCombinations(arr, n) {
  if (n === 1) return arr.map((v) => [v])

  const result = []
  arr.forEach((fixed, index, originArr) => {
      const rest = originArr.slice(index + 1)
      const combinations = getCombinations(rest, n - 1)
      const attached = combinations.map((combination) => [fixed, ...combination])
      result.push(...attached)
  })
  return result
}

const test1 = getCombinations([1, 2, 3, 4], 3)
console.log(test1)



// 조합 코드 설명
function getCombinations(arr, n) {
    // 1개씩 택한 조합을 만든다면, 모든 원소를 배열로 바꿔서 return
    // 탈출코드로서의 역할도 한다
    if (n === 1) return arr.map((v) => [v])
  
    // 처음 함수가 돌 때 빈 배열로 시작하지만,
    // rest로 함수가 다시 반복되더라도 처음 1이 fixed 된 경우가 아직 종료되지 않았으므로
    // 반환값이 계속 result에 축적됨
    const result = []

    // 모든 arr 요소에 한번씩 실행되는 반복문
    arr.forEach((fixed, index, originArr) => {
        // n번째 숫자를 고정하고, 나머지 뒷 요소들을 rest에 담는다
        const rest = originArr.slice(index + 1)

        // 나머지 뒷 요소들을 가지고 재귀함수 실행 (내부에서 또 같은 로직으로 반복, n===1이 될때까지)
        const combinations = getCombinations(rest, n - 1)

        // n===1이되어 더이상 재귀함수를 돌지 않고 앞의 연산이 끝나면
        // return된 배열을 풀어서 고정값과 합친다
        // 뒤에 요소가 없어 빈배열로 돌아왔을때는 fixed를 붙일 combinations가 없으므로 map할것도, push할것도 없다
        const attached = combinations.map((combination) => [fixed, ...combination])

        // 합쳐진 이중배열을 풀어서 result에 push한다.
        result.push(...attached)
    })

    // 결과 반환
    return result
  }
  
const test2 = getCombinations([1, 2, 3, 4], 3)
console.log(test2)







// 순열 O(n!)
// 순서대로 n개의 요소를 선택 (중복포함(순서가 다르니까))
function getPermutations(arr, n) {
    if (n === 1) return arr.map((v) => [v])

    const result = []

    arr.forEach((fixed, index, originArr) => {
        const rest = originArr.filter((_, idx) => idx !== index)
        const permutations = getPermutations(rest, n - 1)
        const attached = permutations.map((permutation) => [fixed, ...permutation])
        result.push(...attached)
    })
    return result
}

const test3 = getPermutations([1, 2, 3, 4], 3)
console.log(test3)



// 순열 코드 설명
function getPermutations(arr, n) {
    // 1개씩 택하는 순열이면 각 원소를 배열로 만들어서 바로 return
    if (n === 1) return arr.map((v) => [v])

    const result = []

    arr.forEach((fixed, index, originArr) => {
        // index번째 요소를 제외한 배열 반환
        const rest = originArr.filter((_, idx) => idx !== index)

        // 위에서 만든 rest 배열에서 다시 재귀함수 실행
        const permutations = getPermutations(rest, n - 1)

        // 얻은 결과에 처음 fixed한 값을 붙인다
        const attached = permutations.map((permutation) => [fixed, ...permutation])

        // 붙인 배열들을 풀어서 result에 push
        result.push(...attached)
    })

    return result
}

const test4 = getPermutations([1, 2, 3, 4], 3)
console.log(test4)





