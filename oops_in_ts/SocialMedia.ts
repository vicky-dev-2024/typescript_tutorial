abstract class SocialMedia{
    abstract jobRole():string;
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
class FullTimeEmployee extends SocialMedia {
    jobRole(): string {
        throw new Error("Method not implemented.");
    }
   
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}
class NewFullTimeEmployees extends FullTimeEmployee{
    constructor(firstName: string, lastName: string,private getsalary:number,private jobrole:string) {
        super(firstName, lastName,getsalary);
        
    }
    jobRole(): string {
        return `${this.jobRole}`;
    }
}
let newEmployee = new NewFullTimeEmployees('vicky','v',1200,"SDE-1(SRE)");

console.log(newEmployee);

//console.log(john.print());