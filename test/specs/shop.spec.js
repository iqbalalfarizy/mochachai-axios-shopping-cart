import{ browser, $, expect } from "@wdio/globals"
import homePage from '../pageobjects/home.page.js'
import shopPage from "../pageobjects/shop.page.js"





describe("FEATURE MERCH SHOP ", function(){

  beforeEach("Navigate to Link", async function(){
    await shopPage.openPage()
    if (await homePage.cookiesBlock.isDisplayed()){
        await homePage.acceptCookies()
      }
  })

  afterEach(async function(){
      await browser.deleteAllCookies()  
      await browser.executeScript('window.localStorage.clear()', [])  
      await browser.executeScript('window.sessionStorage.clear()', [])
    })



    it("Change Variant", async function(){
      await shopPage.kliVariant()
      await expect(shopPage.variantText).toHaveText('Select color: Sparkling Water')       
    
    })


    it("Zoom Product Image", async function(){
      await shopPage.klikZoomBtn()
      await expect(shopPage.imgAfterZoomed).toHaveAttribute('style', expect.stringContaining('scale(3)'))      

    })

    it("Klik Details Product", async function(){
      await shopPage.klikDetailsBtn()
      await expect(shopPage.detailsText).toBePresent()      

    })


    it("Add to Wishlist", async function(){
      await shopPage.klikWishList()
      await expect(shopPage.wishListAfter).toHaveAttribute('class', expect.stringContaining('fill-white'))      

    })
  

    it("Add to Cart", async function(){ 
      let itemText = await shopPage.itemText.getText()
      await shopPage.klikAddToCart()
      if (await shopPage.cartFlyout.isDisplayed()){
        await shopPage.goToCart()
      }else{
        await shopPage.klikCart()
      } 
      let cartText = await shopPage.cartText.getText()
      await expect(cartText.toUpperCase()).toBe(itemText.toUpperCase())    
 
    })

    
    it("Increase Qty from Cart", async function(){
      await shopPage.klikAddToCart()
      if (await shopPage.cartFlyout.isDisplayed()){
        await shopPage.goToCart()
      }else{
        await shopPage.klikCart()
      } 
      await shopPage.klikRemovePopUp() 
      await shopPage.klikIncrease()
      await expect(shopPage.qtyText).toHaveAttribute('value', '2')    

    })


    it("Remove Item from Cart", async function(){
      await shopPage.klikAddToCart()
      if (await shopPage.cartFlyout.isDisplayed()){
        await shopPage.goToCart()
      }else{
        await shopPage.klikCart()
      } 
      await shopPage.klikRemovePopUp()
      await shopPage.klikRemove()
      await expect(shopPage.shoppingCartText).not.toBeDisabled()    

    })


    it("Klik Write a Review", async function(){
      await shopPage.klikReview()
      await expect(shopPage.reviewBlock).toBePresent()      

    })


    it("Change Currency to SGD", async function(){
      await shopPage.klikCurrency()
      await shopPage.klikCurrencySGD()
      await expect(shopPage.priceSGD).toHaveText("$72.00")      

    })


    it("Go to Facebook Media", async function(){
      await shopPage.klikFacebook()
      await browser.pause(2000)
      const window = await browser.getWindowHandles()
      await browser.switchToWindow(window[1])
      const url = await browser.getUrl() 
      await expect(url).toBe('https://www.facebook.com/DrinkLiquidDeath/')

    })


})