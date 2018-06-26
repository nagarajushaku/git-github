describe("login functionality", function() {
    //browser.ignoreSynchronization = true;
     it('user info', function() {
         browser.get('https://chatapp.aadhya-analytics.com:4201');
         browser.waitForAngularEnabled(false)
       element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
       element(by.id("Password")).sendKeys("rakesh228");
     
     
       element(by.buttonText("Sign In")).click();
       browser.driver.sleep(50000);
       });
    it("ddsdsdsd",function()
    {
       element(by.xpath('//*[@id="userId68"]')).click();
       
    
    browser.driver.sleep(40000); 
    });
    
      it("aaa",function(){
       
       // element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello nagaraju");
       //browser.driver.sleep(40000);
    //element(by.xpath('//*[@class="fa fa-telegram"]')).click();
   // browser.driver.sleep(5000); 
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[24]/aadhya-chat-message/div/div/div/div/p/span')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[24]/aadhya-chat-message/div/div/div/div[2]/a[1]/a/span')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[24]/aadhya-chat-message/div/div/div/div[2]/a[1]/ul/li[2]/img')).click();
    browser.driver.sleep(6000);
});
    });
//*[@id="default"]/div[1]/ul/li[2]/aadhya-chat-message/div/div/div/div[2]/p/comment()
