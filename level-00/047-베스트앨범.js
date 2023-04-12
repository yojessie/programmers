// 2023-04-04
// https://school.programmers.co.kr/learn/courses/13213/lessons/91081


// 인덱스가 노래의 번호
// 각 장르별 노래들의 플레이횟수 총 합이 필요함
// 더 인기있는 장르부터 2곡씩 수록
// 재생횟수가 같다면 인덱스가 낮은 노래가 먼저 수록
// 파라미터값을 통해 여러 데이터를 저장해야하므로 해시테이블 자료구조 활용?

function solution(genres, plays) {
    const table = new Map()

    genres
        .map((genre, index) => [genre, plays[index]])
        .forEach(([genre, play], index) => {
            const data = table.get(genre) || { total: 0, songs: []}
            table.set(genre, {
                total: data.total + play,
                songs: [...data.songs, {play, index}]
                    .sort((a, b) => b.play - a.play)
                    .slice(0, 2)
            })
        })

    return [...table]
        .sort((a, b) => b[1].total - a[1].total)
        .flatMap((each) => each[1].songs)
        .map((each) => each.index)
}