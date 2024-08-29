interface college {
    firstName: string;
    lastName: string;
    email: string;
    printStudentDetails():void;
}

function printStudentDetails(College: { firstName: any; lastName: any; email: any; printStudentDetails?: (College: any) => void; }):void{
    console.log(`FirstName:${College.firstName} LastName:${College.lastName} email:${College.email}`);
}

let student3 = {
    firstName:'vicky',
    lastName:'v',
    email:'vickycs2024@gmail.com',
    printStudentDetails
}
console.log(printStudentDetails(student3));
let studentName:any = "vicky";
let result:number = (<string>studentName).length;
console.log(result);
let ans:number = 123;
let ans1:string = ans+"";
console.log(typeof(ans1));