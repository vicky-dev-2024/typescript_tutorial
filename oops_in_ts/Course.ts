class Course{
    private course_name:string;
    private Course_instructor:string;
    private course_hours:string;
    /*constructor(public Course_name:string,public Course_hours:string,public course_instructor:string){
        this.course_name = Course_name;
        this.course_instructor = course_instructor;
        this.course_hours = Course_hours;
    }*/
    public get getCourse_name():string{
        return `java ${this.course_name}`;
    }
    public set setCourse_name(course_name:string){
        this.course_name = course_name;
    }
    public get getCourse_instructor():string{
        return `instructor:${this.Course_instructor}`
    }
    public set setCourse_instructor(Course_instructor:string){
        this.Course_instructor = Course_instructor;
    }
    public get getCourse_hours():string{
        return `course_hours:${this.course_hours}`;
    }
    public set setCourse_hours(Course_hours: string){
         this.course_hours = Course_hours;
    }


}
const Student  = new  Course();
console.log(Student);
Student.setCourse_name = "java development";
Student.setCourse_hours = "45 hours";
Student.setCourse_instructor = "vicky";
console.log(Student);
console.log("---------------------------course-----------------------------------");
console.log("course_name:"+Student.getCourse_name);
console.log("Course_instructor:"+Student.getCourse_instructor);
console.log("Course_hours:"+Student.getCourse_hours);
console.log("-----------------------------end---------------------------------------");
