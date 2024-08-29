var Ecommerce = /** @class */ (function () {
    function Ecommerce(Product_id, Product_name, Product_details, Product_price) {
        this.Product_id = Product_id;
        this.Product_name = Product_name;
        this.Product_details = Product_details;
        this.Product_price = Product_price;
        this.product_id = Product_id;
        this.product_name = Product_name;
        this.product_details = Product_details;
        this.product_price = Product_price;
    }
    Ecommerce.prototype.getProduct_id = function () {
        return this.product_id;
    };
    Ecommerce.prototype.setProduct_id = function (product_id) {
        this.product_id = product_id;
    };
    Ecommerce.prototype.getProduct_name = function () {
        return this.product_name = this.product_name;
    };
    Ecommerce.prototype.setProduct_name = function (product_name) {
        this.product_name = product_name;
    };
    Ecommerce.prototype.getProduct_details = function () {
        return this.product_details = this.product_details;
    };
    Ecommerce.prototype.setProduct_details = function (product_details) {
        this.product_details = product_details;
    };
    Ecommerce.prototype.getProduct_price = function () {
        return this.product_price;
    };
    Ecommerce.prototype.setProduct_price = function (product_price) {
        this.product_price = product_price;
    };
    return Ecommerce;
}());
var product1 = new Ecommerce(1, "smartPhone", "8GB RAM 128GM ROM BLACK COLOR", 9000);
console.log(product1);
console.log(product1.getProduct_id());
product1.setProduct_name("new phone");
console.log(product1.getProduct_name());
product1.setProduct_details("good");
console.log(product1.getProduct_details());
product1.setProduct_price(11000);
console.log("".concat(product1.getProduct_price()));
