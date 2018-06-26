
describe("login functionality", function() {
    //browser.ignoreSynchronization = true;
     it('user info', function() {
         browser.get('https://dya4247t866iy.cloudfront.net/#/login');
         browser.waitForAngularEnabled(false)
       element(by.xpath('//*[@id="Username"]')).sendKeys("nagaraju");
       element(by.id("Password")).sendKeys("laxmirao");
     
     
       element(by.buttonText("Sign In")).click();
       browser.driver.sleep(50000);
       });
    it("ddsdsdsd",function()
    {
       element(by.xpath('//*[@id="userId71"]')).click();
       
    
    browser.driver.sleep(40000); 
    });
    
      it("aaa",function(){
       
       // element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello nagaraju");
      // browser.driver.sleep(40000);
    //element(by.xpath('//*[@class="fa fa-telegram"]')).click();
    //browser.driver.sleep(5000); 
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[2]/p')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[3]/span/a/span')).click();
    browser.driver.sleep(6000);
   element(by.xpath('//*[@id="message-text"]')).sendKeys('helooo haii ram');
   var enter = browser.actions().sendKeys(protractor.Key.ENTER);
enter.perform();
    browser.driver.sleep(40000);
    ///element(by.xpath('//*[@id="envoi"]/span/i')).click();
    //$('body').sendKeys(protractor.Key.ENTER);
    //browser.driver.sleep(60000);
   // element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[2]/div[2]/form/div/div[1]/span[2]')).click();
    //browser.driver.sleep(6000);
},1000000);
    
    });