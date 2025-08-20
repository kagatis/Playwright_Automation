exports.CartPage=
class CartPage{
    constructor(page){
        this.page=page;
        this.noOfProducts='//*[@id="tbodyid"]/tr/td[2]';
    }
    async checkProductInCart(ProductName){
        const productsInCart=await this.page.$$(this.noOfProducts);
        for(const product of productsInCart){
            console.log(await product.textContent())
            if(ProductName===await product.textContent()){
                return true;
                break;
            }
        }
    }
}