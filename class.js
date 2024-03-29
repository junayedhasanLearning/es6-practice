class student{
    constructor(stuName, stuID, stuBatch){
        this.Name = stuName;
        this.ID = stuID;
        this.Batch = stuBatch;
    }
};

const student1 = new student("Junayed Hasan Sakib", 6889, "HSC-26");
const student2 = new student("Kuddus Boyati", 5675, "HSC-06");
console.log(student1);
console.log(student2.ID);