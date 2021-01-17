// 声明 number 类型的数组，数组的元素只能是 number 类型
let arrOfNumbers: number[] = [1, 2, 3]
// 在进行数组操作的时候也会限制类型
arrOfNumbers.push(4)

// 元组类型和数组类型很像，可以是一定程度上限制了数组的内容
let user: [string, number] = ['ConstOwn', 20]
