class Parent{
    constructor() {
        this.fatherName = "Beiber";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.Name = name;
    }

    getFullName(){
        return  `${this.Name} ${this.fatherName}`
    }
}

const child1 = new Child('Justin');
console.log(child1.getFullName());