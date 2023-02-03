// 2023-02-04
// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
    let answer = [0, 0]
    
    let x = Math.floor(board[0] / 2)
    let y = Math.floor(board[1] / 2)
    
    for (let i of keyinput) {
        if (i == "left") answer[0] -= 1
        else if (i == "right") answer[0] += 1
        else if (i == "down") answer[1] -= 1
        else if (i == "up") answer[1] += 1
        
        if (Math.abs(answer[0]) > x) {
            answer[0] < 0 ? answer[0] = -x : answer[0] = x
        }
        else if (Math.abs(answer[1]) > y) {
            answer[1] < 0 ? answer[1] = -y : answer[1] = y
        }
    }
    return answer
}

// 복수의 if 조건문이 필요한 경우, switch 문으로 바꿀 수 있다고 한다.
// 다른사람의 풀이를 보고, 문제를 더 자세히 보면서 정리가 필요했던 부분은
// 1. 보드의 가로, 세로 칸의 수는 홀수이므로 Math.floor 할 필요없고, (가로 - 1) / 2 하면 되는 거였다.
// 2. 보드를 벗어나는 경우 keyinput을 무시하면 되는 거였다.
// (구지 모든 input을 계산해놓고 다시 예외를 잡지 않아도 되었던 것.)

function solution(keyinput, board) {
    let answer = [0, 0]
    
    let x = Math.floor(board[0] / 2)
    let y = Math.floor(board[1] / 2)
    
    for (let i of keyinput) {
        switch(i) {
            case 'left' : if (answer[0] > -x) answer[0]--; break;
            case 'right' : if (answer[0] < x) answer[0]++; break;
            case 'down' : if (answer[1] > -y) answer[1]--; break;
            case 'up' : if (answer[1] < y) answer[1]++; break;
        }
    }
    return answer
}
