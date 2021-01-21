function echWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echWithArr([1, 2, 3])


interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return  arg
}

const str = echoWithLength('str')
const obj = echoWithLength({length: 10})
const arr2 = echoWithLength([1, 2, 3])