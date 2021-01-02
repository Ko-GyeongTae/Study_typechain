class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

const Lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}
//name, age, gender? => name, age 필수 / gender + ? 선택 argument
console.log(sayHi(Lynn));
export {};