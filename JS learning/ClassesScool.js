class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(number) {
        if (isNaN(number)) {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
            return 0;
        }
        this._numberOfStudents = number;
    }
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this.level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
        const pos = Math.floor(Math.random() * (substituteTeachers.length - 1))
        return substituteTeachers[pos]
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents)
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Midle extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents)
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'highSchool', numberOfStudents)
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        console.log(this._sportsTeams.join(', '))
    }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.sportsTeams