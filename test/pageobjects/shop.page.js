import { $, browser,expect } from "@wdio/globals"


class shopPage {
    //element locators
  
    get variant() { return $('//a[@class="swatch sparkling-water h-5 w-5 mr-4"]') }
    get variantText() { return $('//div[@class="product__option-title text-dark"]') }
    get addToCart() { return $('//div[@class="animated-button-block-hero w-full h-14"]') }
    get cartText() { return $('//div/div[1]/div[1]/h3/a') }
    get itemText() { return $('//div[2]/div/div[1]/h2') }    
    get shoppingCartText() { return $('//a[@class="font-bold text-black hover:text-gold text-lg"]') }
    get cart() { return $('//a[@id="cart-icon-bubble"]') }
    get increase() { return $('//button[@name="plus"]') }
    get qtyText() { return $('//input[@class="quantity__input"]') }
    get remove() { return $('//div[@class="absolute top-0 right-0"]') }
    get removePopUp() { return $('//span[@class="md-icon"]') }
    get wishList() { return $('wishlist-button[title="Reusable Slaughter Bottle"]:nth-child(2)') }
    get wishListAfter() { return $('svg[class="text-black invert duration-500 group-hover:text-white fill-white"]') }
    get zoomBtn() { return $('div[class="absolute bottom-2 left-2 z-40 zoom-img"]') }
    get imgAfterZoomed() { return $('img[class="w-full h-auto product__media "]') }
    get detailsBtn() { return $('#tab2') }
    get detailsText() { return $('ul.pt-6') }
    get facebook() { return $('ul.flex:nth-child(2) > li:nth-child(4) > a') }
    get cartFlyout() { return $('.rebuy-cart__flyout') }
    get closeCartFlyout() { return $('.rebuy-cart__flyout-close') }
    get review() { return $('#yotpo-main-widget-btn') }
    get reviewBlock() { return $('#yotpo-modal') }
    get currency() { return $('//button[@class="disclosure__button flex"]') }
    get currencySGD() { return $('//a[@data-value="SG"]') }
    get priceSGD() { return $('#price__main') }



    //page actions  
    async openPage(){
        await browser.url('https://liquiddeath.com/en-id/products/reusable-slaughter-bottle-white/')
        // await browser.execute(()=>{
        //     window.localStorage.setItem("_tt_enable_cookie", "1")
        // })
        // await browser.setCookies({
        //     name : "_tt_enable_cookie",
        //     value : "1",
        //     path : "/",
        //     hostOnly : false,
        //     domain : ".liquiddeath.com"
        // })
    
    }

    async klikCurrencySGD(){
        await this.currencySGD.click()
    }

    async klikCurrency(){
        await this.currency.click()
    }

    async klikReview(){
        await this.review.click()
    }

    async goToCart(){
        await browser.url('https://liquiddeath.com/cart/')
    }


    async klikFacebook(){
        await this.facebook.click()
    }

    async klikDetailsBtn(){
        await this.detailsBtn.click()
    }

    async klikZoomBtn(){
        await this.zoomBtn.click()
    }

    async klikWishList(){
        await this.wishList.click()
    }

    async kliVariant(){
        await this.variant.click()
    }

    async klikAddToCart(){
        await this.addToCart.click()
    }

    async klikCart(){
        await this.cart.click()
    }

    async klikIncrease(){
        await this.increase.click()
    }

    async klikRemove(){
        await this.remove.click()
    }

    async klikRemovePopUp(){
        await this.removePopUp.click()
    }
    
}

export default new shopPage()

