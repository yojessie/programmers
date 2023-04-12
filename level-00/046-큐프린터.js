// 2023-03-18
// Ch06-2. 큐_프린터 실습
// https://school.programmers.co.kr/learn/courses/13213/lessons/91078

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
    }
class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }
        
    enqueue(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }
        
    dequeue() {
        const value = this.head.value
        this.head = this.head.next
        return value
    }
        
    peek() {
        return this.head.value
    }
}

function solution(priorities, location) {
    const queue = new Queue()
    for (let i = 0; i < priorities.length; i++) {
        queue.enqueue([priorities[i], i])
    }
    
    priorities.sort((a, b) => b - a)
    
    let count = 0
    while(true) {
        const cur = queue.peek()
        if (cur[0] < priorities[count]) {
            queue.enqueue(queue.dequeue())
        } else {
            count++
            if (queue.dequeue()[1] === location) {
                return count
            }
        }
    }
}





// Implement Queue with Array
class Queue {
    constructor() {
        this.queue = []
        this.front = 0
        this.rear = 0
    }

    enqueue(value) {
        this.queue[this.rear++] = value
    }

    dequeue() {
        const value = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return value
    }

    peek() {
        return this.queue[this.front]
    }
}

const queue = new Queue
queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(8)




// Implement Queue with LinkedList
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    dequeue() {
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    peek() {
        return this.head.value
    }
}

const queue2 = new Queue
queue2.enqueue(1)
queue2.enqueue(3)
queue2.enqueue(6)


