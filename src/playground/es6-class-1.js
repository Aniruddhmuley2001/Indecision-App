class Person {
    constructor(n = 'User', a = 0){
        this.name = n;
        this.age = a;
    }
    getGreeting(){
        return `Hi ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
}

const me = new Student('Aniruddh', 18, 'ICT');
console.log(me.hasMajor());
console.log(me);
const other = new Student();
console.log(other.hasMajor());
console.log(other);