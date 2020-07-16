class Person {
    constructor(n = 'User', a = 0){
        this.name = n;
        this.age = a;
    }
    getGreeting(){
        return `Hi ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
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
    getDescription(){
        let description = super.getDescription();

        if(this.major){
            description += `, studying ${this.major}.`
        }

        return description;
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.homeLocation){
            description += `. I am from ${this.homeLocation}`
        }

        return description;
    }
}

// const me = new Student('Aniruddh', 18, 'ICT');
// console.log(me.getDescription());
// console.log(me);
// const other = new Student();
// console.log(other.getDescription());
// console.log(other);

const me = new Traveller('Aniruddh', 18, 'India');
console.log(me.getDescription());
const other = new Traveller();
console.log(other.getDescription());