// 类: 定义了一切事物的抽象特点
// 对象: 类的实例
// 面向对象(OOP)三大特性: 封装， 继承， 多态

class Animal {
    protected readonly name: string;
    constructor(name) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}
const snake = new Animal('lily')
console.log(snake.run())

// 类的继承
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}
const lucy = new Dog('lucy')
console.log(lucy.run())
console.log(lucy.bark())

// 多态
class Cat extends Animal {
    static categories = ['mammal']
    constructor(name) {
        super(name);
        console.log(this.name)
    }
    run(): string {
        return 'Meow,' + super.run();
    }
}
const joe = new Cat('joe')
console.log(joe.run())


// Public 修饰的属性或方法是共有的
// Private 修饰的属性或方法是私有的
// Protected 修饰的属性或方法是受保护的