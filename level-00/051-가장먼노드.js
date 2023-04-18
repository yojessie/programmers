// 2023-04-18
// Ch14-3. BFS,DFS - 가장 먼 노드 문제풀이
// https://school.programmers.co.kr/learn/courses/13213/lessons/91097

// 핵심 키워드는 노드, 간선, 최단경로
// 최단경로 값이 가장 큰 경우의 수를 구하는 문제

function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => [])
    // Array.from(배열로 반환하고자 하는 객체, 요소에 맵핑할 함수)
    // : 깊은참조. 한 요소에 값을 넣어도 다른 요소에 영향을 주지 않음

    // Array(arrayLength)
    // : arrayLength를 정수로 넣으면 해당 숫자 만큼 요소를 가진 배열 생성
    // : 얕은참조. 한 요소에 값을 넣으면 다른 요소들도 같이 바뀜

    for (const [src, dest] of edge) {
        graph[src].push(dest)
        graph[dest].push(src)
        // 양방향 그래프니까 시작점 인덱스에 도착점 노드값을 추가하고
        // 도착점 인덱스에 시작점 노드값을 추가한 그래프를 완성한다.
    }

    const distance = Array(n + 1).fill(0)
    // 1번 노드로부터 각 노드의 거리 카운팅을 위한 배열
    // 편의상 0번 요소는 비워둔다
    distance[1] = 1
    // 일단 1번 요소에 1 할당

    // BFS 구현 (queue 활용)
    const queue = [1]
    // 첫번째 노드 값은 미리 넣어놓고 시작
    while (queue.length > 0) {
        // queue에 모든 노드값이 들어왔다 나갈때까지 반복
        const src = queue.shift()
        // 시작점은 큐의 맨 첫번째 요소
        // shift()는 선형시간이 소요되는 메소드 but 제한값이 적을때는 최적화되어 쓸만함
        for (const dest of graph[src]) {
            if (distance[dest] === 0) {
                queue.push(dest)
                distance[dest] = distance[src] + 1
            }
        }
    }
    
    const max = Math.max(...distance)
    // 카운팅 완료된 1로부터의 거리값들 중 가장 큰 값을 추출

    return distance.filter(item => item === max).length
    // max값과 같은 요소의 갯수를 리턴
}

