const a: Array<number> = [1,2,3]

const date = new Date()

date.getTime()

const reg = /abc/
reg.test('abc')

Math.pow(2, 2)

let body = document.body
let allLis = document.querySelectorAll("li")

document.addEventListener('click', (e) => {
    e.preventDefault()
})

interface IPerson {
  name: string,
  age: number
}

let lucy:IPerson = {
  name: 'lucy',
  age: 20
}

type IPartial = Partial<IPerson>

let lili: IPartial = {
  name: 'lili',
}
