let sum: (x: number, y: number) => number

const res = sum(1,2)

type PlusType = (x: number, y: number) => number
let sum2: PlusType
const  res2 = sum2(1, 2)

type StrOrNumber = string | number
let res3: StrOrNumber
res3 = 123

// 字面量
const str: 'name' = 'name'
const number: 1  =  1

type Directions = 'up' | 'down' | 'left' | 'right'

let toWhere: Directions = 'up'

// 联合类型|、交叉类型&
interface IName {
  name: string
}
type IPerson = IName & {age: number}

let person: IPerson = {name: '123', age: 123}

