function echo(arg: number): number {
  return arg
}
const  res = echo(123)

// 这样就丧失了类型
function echo2(arg: any): any {
  return arg
}
const  res2 = echo(123)

// 泛型 在开始不指定类型，在使用的时候指定类型
function echo3<T> (arg: T): T {
  return arg
}
const res3 = echo3('str')

// T 就是泛型的名称

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const res4 = swap(['str', 123])