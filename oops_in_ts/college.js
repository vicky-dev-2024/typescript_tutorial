function printStudentDetails(College) {
    console.log("FirstName:".concat(College.firstName, " LastName:").concat(College.lastName, " email:").concat(College.email));
}
var student3 = {
    firstName: 'vicky',
    lastName: 'v',
    email: 'vickycs2024@gmail.com',
    printStudentDetails: printStudentDetails
};
console.log(printStudentDetails(student3));
var studentName = "vicky";
var result = studentName.length;
console.log(result);
var ans = 123;
var ans1 = ans + "";
console.log(typeof (ans1));
