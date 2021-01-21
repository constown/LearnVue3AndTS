class Queue<T> {
  private data = []
  push (item: T) {
    return this.data.push(item)
  }
  pop (): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
// queue.push('str')
console.log(queue.pop().toFixed())
// console.log(queue.pop().toFixed())
// 会报错


interface KeyPair<T, U> {
  key: T,
  value: U
}

let kp1: KeyPair<number, string> = {key: 1, value: 'str'}
let kp2: KeyPair<string, number> = {key: 'str', value: 1}
let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3]