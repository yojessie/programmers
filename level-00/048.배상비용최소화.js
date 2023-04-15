// 2023-04-12
// Ch010-2. 힙_배상비용 최소화 실습


// 01. MaxHeap 구현 연습
class MaxHeap {
    constructor() {
        this.heap = [null]
    }

    push(value) {
        this.heap.push(value)
        let currentIndex = this.heap.length - 1
        let parentIndex = Math.floor(currentIndex / 2)

        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            const parentValue = this.heap[parentIndex]
            this.heap[parentIndex] = value
            this.heap[currentIndex] = parentValue

            currentIndex = parentIndex
            parentIndex = Math.floor(currentIndex / 2)
        }
    }

    pop() {
        const returnValue = this.heap[1]
        this.heap[1] = this.heap.pop() //LeafNode가 RootNode 처리됨

        let currentIndex = 1
        let leftIndex = 2
        let rightIndex = 3

        while (
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
        ) {
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                const currentValue = this.heap[currentIndex]
                this.heap[currentIndex] = this.heap[rightIndex]
                this.heap[rightIndex] = currentValue
                currentIndex = rightIndex // right이 있던 자리에서 다시 반복하기 위해
            } else {
                const currentValue = this.heap[currentIndex]
                this.heap[currentIndex] = this.heap[leftIndex]
                this.heap[leftIndex] = currentValue
                currentIndex = leftIndex
            }
            leftIndex = currentIndex * 2
            rightIndex = currentIndex * 2 + 1
        }

        return returnValue
    }
}

const heap = new MaxHeap

heap.push(45)
heap.push(36)
heap.push(54)
heap.push(27)
heap.push(84)
heap.push(15)

console.log(heap.heap)

heap.pop()


// 02. 배상비용 최소화 문제풀이
// https://school.programmers.co.kr/learn/courses/13213/lessons/91086
// 매 루프마다 가장큰값, 가장적은값을 찾아야하는 경우 Heap을 통한 우선순위큐 구현이 효율적

class MaxHeap {
    constructor() {
        this.heap = [null]
    }

    push(value) {
        this.heap.push(value)
        let currentIndex = this.heap.length - 1
        let parentIndex = Math.floor(currentIndex / 2)

        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            const parentValue = this.heap[parentIndex]
            this.heap[parentIndex] = value
            this.heap[currentIndex] = parentValue

            currentIndex = parentIndex
            parentIndex = Math.floor(currentIndex / 2)
        }
    }

    pop() {
        if (this.heap.length === 2) return this.heap.pop()

        const returnValue = this.heap[1]
        this.heap[1] = this.heap.pop()

        let currentIndex = 1
        let leftIndex = 2
        let rightIndex = 3
        while (
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
        ) {
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                const currentValue = this.heap[currentIndex]
                this.heap[currentIndex] = this.heap[rightIndex]
                this.heap[rightIndex] = currentValue
                currentIndex = rightIndex
            } else {
                const currentValue = this.heap[currentIndex]
                this.heap[currentIndex] = this.heap[leftIndex]
                this.heap[leftIndex] = currentValue
                currentIndex = leftIndex
            }
            leftIndex = currentIndex * 2
            rightIndex = currentIndex * 2 + 1
        }

        return returnValue
    }
}

function solution(no, works) {
    if (works.reduce((a, b) => a + b) <= no) {
        return 0
    }

    const heap = new MaxHeap()
    for (const work of works) {
        heap.push(work)
    }

    for (let i = 0; i < no; i++) {
        heap.push(heap.pop() - 1)
    }

    return heap.heap.reduce((a, b) => a + b * b)
}


