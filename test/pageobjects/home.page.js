import { $, browser } from "@wdio/globals"


class homePage {
    //element locators
  
    get merchShop() { return $('//a[@title="link to: MERCH"]/div[2]') }
    get item() { return $('//div[@class="relative aspect-1"]') }
    get cookies() { return $('//*[@id="shopify-pc__banner__btn-accept"]') }
    get cookiesBlock() { return $('#shopify-pc__banner') }


    //page actions  
    async openPage(){
        await browser.url('https://liquiddeath.com/en-id/')
    }

    async klikMerchShop(){
        await this.merchShop.click()
    }

    async klikItem(){
        await this.item.click()
    }

    async acceptCookies(){
        await this.cookies.waitForClickable({ timeout: 5000 })
        await this.cookies.click()
        await this.cookies.waitForDisplayed({ reverse: true })
    }
    

    
}

export default new homePage()




