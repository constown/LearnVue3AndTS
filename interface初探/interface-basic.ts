// 建议首字母加I，提醒别人这是 interface 接口

interface IPerson {
    // 只读属性 readonly
    readonly id: number;
    name: string;
    // 可选参数
    age?: number
}

// 这样就会形成对应的约束
let ConstOwn: IPerson =  {
    id: 1,
    name: 'ConstOwn',
    age: 24
}
// 只读属性 就会报错
// ConstOwn.id = 9527

// interface 可以对对象的形式进行一个描述，更像是一个规范和契约