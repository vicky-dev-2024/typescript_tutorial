var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Students = /** @class */ (function () {
    function Students(Student_name, Student_email, Student_phone_number) {
        this.Student_name = Student_name;
        this.Student_email = Student_email;
        this.Student_phone_number = Student_phone_number;
        this.student_name = Student_name;
        this.student_email = Student_email;
        this.student_phone_number = Student_phone_number;
        //count_student++;
    }
    Students.count_studnet = 0;
    return Students;
}());
var newStudent = /** @class */ (function (_super) {
    __extends(newStudent, _super);
    function newStudent(Student_name, Student_email, Student_phone_number, Student_mark) {
        var _this = _super.call(this, Student_name, Student_email, Student_phone_number) || this;
        _this.Student_name = Student_name;
        _this.Student_email = Student_email;
        _this.Student_phone_number = Student_phone_number;
        _this.Student_mark = Student_mark;
        _this.Student_mark = Student_mark;
        Students.count_studnet++;
        return _this;
    }
    return newStudent;
}(Students));
var student1 = new Students("vikcy", "vickycs2024@gmail.com", "+91 9940804238");
console.log(student1);
var student2 = new newStudent("vignesh", "vigneshcs2024@gmail.com", "+91 9940804238", "9.22");
console.log(student2);
console.log("student_count:" + Students.count_studnet);
