class Students{
    public student_name:string;
    public student_email:string;
    public student_phone_number:string;
    static count_studnet:number=0;
    constructor(public Student_name:string,public Student_email:string,public Student_phone_number:string){
        this.student_name = Student_name;
        this.student_email =Student_email;
        this.student_phone_number = Student_phone_number;
        //count_student++;
    }
}
class newStudent extends Students{
    constructor(public Student_name:string,public Student_email:string,
        public Student_phone_number:string,public Student_mark:string){
        super(Student_name,Student_email,Student_phone_number);
        this.Student_mark = Student_mark;
        Students.count_studnet++;
    }
}

let  student1 = new Students("vikcy","vickycs2024@gmail.com","+91 9940804238");
console.log(student1);
let student2 = new newStudent("vignesh","vigneshcs2024@gmail.com","+91 9940804238","9.22");
console.log(student2);
console.log("student_count:"+Students.count_studnet);