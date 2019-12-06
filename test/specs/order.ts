import { expect } from 'chai'
import { App } from '../../pages/application'

const regularDuck = 'rubber-ducks-c-1/red-duck-p-3';
const soldOutDuck = 'rubber-ducks-c-1/purple-duck-p-5';
const discountedDuck = 'rubber-ducks-c-1/blue-duck-p-4';

/*
 - verify prices in cart, and after order created
 - verify order is successful

 - Prefer css selectors 
 - Try to implement as much tests as you can
 - Do not overload tests with logic, be simple
 - You SHOULD use PageObjects for this tests
 - Use mocha before/after hooks to reuse pre/post conditions
 - Use ChaiJS (expect, should or assert style) to make assertions
*/

// Each implemented test gives you 15 points

describe("Order", function() {

    beforeEach(function() {
    })


    it("is successful for regular item", function() {
        // Just regular duck without discounts, parameters, or sold our
        App.product.open(regularDuck);
        const productDetail = App.product.getProductDetails()

        console.log('$$$$productDetails', productDetail.toString())     
        App.product.addToCart()
        App.checkout.open()
        expect(App.checkout.isItemsInCart()).to.be.true
        expect(App.checkout.shoppingCart.items.length).to.equal(1);
        const productNameInCart = App.checkout.shoppingCart.items[0].getProductName()
        const productPriceInCart = App.checkout.shoppingCart.items[0].getProductPrice()

        console.log('productNameInCart', productNameInCart)
        console.log('productPriceInCart', productPriceInCart)

        expect(productNameInCart).to.equal(productDetail.name)
        expect(productPriceInCart).to.equal(productDetail.price)
        App.customerInfo.fillCustomerInfo(true)
        browser.pause(200000)

    });

//     it("is successful for discounted item", function() {
//         // this duck always has discount 20%
//         throw new Error("NOT IMPLEMENTED");
//     });

//     it("is successful for sold out item", function() {
//         // this duck always sold out
//         throw new Error("NOT IMPLEMENTED");
//     });

//     it("is successful for 2 same items in card", function() {
//         // Just regular duck without discounts, parameters, or sold our
//         throw new Error("NOT IMPLEMENTED");
//     });

//     it("is successful for 2 different items in card", function() {
//         throw new Error("NOT IMPLEMENTED");
//     });

//     it("is successful for items with parameters", function() {
//         // http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/premium-ducks-c-2/vip-yellow-duck-p-6 
//         // this duck has 3 sizes - small, medium, large. Each size has own price. Verify that price calculated correctly
//         throw new Error("NOT IMPLEMENTED");
//     });
});