// 在 JS 中，函数是一等公民

// 参数x， y 都是 number 类型， 返回值也是 number 类型
// z 是可选参数
function add(x: number, y: number, z?: number): number {
    if (typeof z === 'number') {
        return  x + y +z
    } else {
        return x + y
    }
}

add(1, 2)
// add(1, 2, 3)

// 函数的表达式
// 函数本身也有类型
const add2 = (x: number, y: number, z?: number): number => {
    if (typeof z === 'number') {
        return  x + y +z
    } else {
        return x + y
    }
}

// 会报错
// let add3: string = add2()

// 正确的写法
let add4: (x: number, y: number, z?: number) => number = add2

// 通过 interface 来描述函数的写法
interface ISum {
    (x: number, y: number, z?: number): number
}

let add5: ISum = add2