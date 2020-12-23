const sayHi = (name:string, age:number, gender:string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
}
//name, age, gender? => name, age 필수 / gender + ? 선택 argument
console.log(sayHi("Nicolas", 444, "male"));
export {};