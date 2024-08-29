var Course = /** @class */ (function () {
    function Course() {
    }
    Object.defineProperty(Course.prototype, "getCourse_name", {
        /*constructor(public Course_name:string,public Course_hours:string,public course_instructor:string){
            this.course_name = Course_name;
            this.course_instructor = course_instructor;
            this.course_hours = Course_hours;
        }*/
        get: function () {
            return "java ".concat(this.course_name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "setCourse_name", {
        set: function (course_name) {
            this.course_name = course_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "getCourse_instructor", {
        get: function () {
            return "instructor:".concat(this.Course_instructor);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "setCourse_instructor", {
        set: function (Course_instructor) {
            this.Course_instructor = Course_instructor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "getCourse_hours", {
        get: function () {
            return "course_hours:".concat(this.course_hours);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "setCourse_hours", {
        set: function (Course_hours) {
            this.course_hours = Course_hours;
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
var Student = new Course();
console.log(Student);
Student.setCourse_name = "java development";
Student.setCourse_hours = "45 hours";
Student.setCourse_instructor = "vicky";
console.log(Student);
console.log("---------------------------course-----------------------------------");
console.log("course_name:" + Student.getCourse_name);
console.log("Course_instructor:" + Student.getCourse_instructor);
console.log("Course_hours:" + Student.getCourse_hours);
console.log("-----------------------------end---------------------------------------");
