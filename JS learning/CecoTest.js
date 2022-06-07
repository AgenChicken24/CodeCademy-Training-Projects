///////////////////////////////////////
////////////////OBJECTS////////////////
///////////////////////////////////////

class Student {
    constructor() {
        this.first = 'Cvetelin'
        this.last = 'Ivanov'
        this.age = 17
        this.height = 185
    }
    studentInfo() {
        return this.first + '\n' + this.last
    }
}

let student2 = {
    first: 'Cvetelin',
    last: 'Ivanov',
    age: 17,
    height: 185,
    studentInfo() {
        return this.first + '\n' + this.last
    }
}

let student = new Student()
console.log(student2.studentInfo());

console.log(student.studentInfo())
console.log(typeof student);
console.log(typeof student2);