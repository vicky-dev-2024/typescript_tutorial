class Ecommerce{
    private product_id:number;
    private product_name:string;
    private product_details:string;
    private product_price:number;
    constructor(private Product_id:number, private Product_name:string, 
        private Product_details:string, private Product_price:number){
         this.product_id = Product_id;
         this.product_name = Product_name;
         this.product_details = Product_details;
         this.product_price = Product_price;
       }
    public getProduct_id():number{
           return this.product_id;
    }
    public  setProduct_id(product_id:number):void{
        this.product_id = product_id;
    }
    public getProduct_name():string{
        return this.product_name = this.product_name;
    }
    public setProduct_name(product_name:string):void{
        this.product_name = product_name;
    }
    public getProduct_details():string{
        return this.product_details = this.product_details;
    }
    public setProduct_details(product_details:string):void{
        this.product_details = product_details;
    }
    public getProduct_price():number{
        return this.product_price;
    }
    public setProduct_price(product_price:number){
        this.product_price = product_price;
    }
}
const product1 = new Ecommerce(1,"smartPhone","8GB RAM 128GM ROM BLACK COLOR",9000);
console.log(product1);
console.log(product1.getProduct_id());
product1.setProduct_name("new phone");
console.log(product1.getProduct_name());
product1.setProduct_details("good");
console.log(product1.getProduct_details());
product1.setProduct_price(11000);
console.log(`${product1.getProduct_price()}`);
