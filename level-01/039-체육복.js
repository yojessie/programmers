// 2022-08-30
// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
    let answer = n - lost.length;
    let lostArr = lost.sort()
    let reserveArr = reserve.sort()
    
    for (let i = 0; i < lostArr.length; i++) {
        for (let j = 0; j < reserveArr.length; j++) {
            if (lostArr[i] == reserveArr[j]) {
                lostArr[i] = '본인것여분'
                reserveArr[j] = '본인것여분씀'
                answer++
            }
        }
    }
    
    for (let i = 0; i < lostArr.length; i++) {
        for (let j = 0; j < reserveArr.length; j++) {
            if (lostArr[i] - 1 == reserveArr[j] || lostArr[i] + 1 == reserveArr[j]) {
                lostArr[i] = '빌림'
                reserveArr[j] = '빌려줌'
                answer++
            }
        }
    }

    return answer;
}

// 분명 맞는 로직인거 같은데 예외 케이스를 찾느라 오래 걸렸다.
// 질문글들을 보다보니.. 자꾸 sort를 해줘야한다고 해서 이해가 안됐는데,
// 케이스중에 lost나 reserve 배열이 번호 순서대로 들어오지 않는 경우가 있었나보다.
// 난 당연히 다 순서대로 오는 줄 알았지.....쩝