// 2023-04-19
// Ch15-2. 그리디 - 큰수만들기 문제풀이
// https://school.programmers.co.kr/learn/courses/13213/lessons/91101

// stack에 더 큰 값이 들어오면 stack의 top 값(더 작은 값)은 pop
// pop하는만큼 count해서 k값과 비교한다

function solution(number, k) {
    const stack = []
    let count = 0

    for (const num of number) {
        while (count < k && stack[stack.length - 1] < num) {
            stack.pop()
            count++
        }
        stack.push(num)
    }
    // 위까지만하면 count를 k만큼 못채우고 종료되는 경우가 생김 (작은수가 뒤에 몰려있는 경우)

    while (count < k) {
        stack.pop()
        count++
        // 그래서 남은 카운트 수만큼 뒤에 숫자는 그냥 빼준다
    }
    return stack.join("")
}