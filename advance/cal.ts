class cal{
    public a:number;
    public b:number;
    constructor(public a1:number,public b1:number){
        this.a = a1;
        this.b = b1;
    }
    public add(a:number,b:number):void{
        console.log(`add two numbers:${a+b}`);
    }
    public sub(a:number,b:number):void{
        console.log(`sub two numbers:${a-b}`);
    }
}
 class advanceCal extends cal{
    public c:number;
     constructor(  a:number, b:number, c:number){
        super(a,b);
        this.c = c;
     }
     public print():void{
        console.log(this.a+" "+this.b+" "+this.c);
     }
     public add1(a:number,b:number,c:number):void{
        console.log(`add three numbers:${a+b+c}`);
     }

 }
 const cal1 = new advanceCal(1,2,3);
 cal1.add1(20,20,30);
 cal1.add(10,20);
 
