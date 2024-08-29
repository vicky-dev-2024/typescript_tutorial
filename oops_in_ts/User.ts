class User{
    email:string;
    name:string;
    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
    }
    
}

const student = new User('vigneshpug50@gmail.com','vicky');
console.log(student);