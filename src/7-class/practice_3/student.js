import Person from "./person";

class Student extends Person{
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ` I am a Student. I am at Class ${this.klass}.`
    }
}

export default Student;