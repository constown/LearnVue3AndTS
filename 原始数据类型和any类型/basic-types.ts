// 最新的ECMAScript标准定义了 8 种数据类型
// 7 种原始数据类型
// - Boolean
// - Null
// - Undefined
// - Number
// - BigInt
// - String
// - Symbol
// 以及 Object


let isDone: boolean = false

let age: number = 10

let firstName: string = 'ConstOwn'
let message: string = `hello ${firstName}`

let u: undefined = undefined
let n: null = null

// undefined 可以给任意类型
let num: number = undefined

// any 表示允许赋值为任意类型,在有明确数据类型的时候应该避免使用any类型

let notSure: any = 4
notSure = 'hello'
notSure = false

notSure.myName
notSure.getName()