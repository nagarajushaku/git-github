
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
       element(by.xpath('//*[@id="userId68"]')).click();
       
    
    browser.driver.sleep(40000); 
    });
    
      it("aaa",function(){
       
       // element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello nagaraju");
      // browser.driver.sleep(40000);
    //element(by.xpath('//*[@class="fa fa-telegram"]')).click();
    //browser.driver.sleep(5000); 
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[9]/aadhya-chat-message/div/div/div/div[3]/p/span/span')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[9]/aadhya-chat-message/div/div/div/div[4]/span')).click();
    browser.driver.sleep(6000);
   element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[2]/aadhya-reply-message/div[2]/p')).click();
   browser.driver.sleep(6000);
   element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[2]/aadhya-reply-message/div[2]/span')).click();
   browser.driver.sleep(6000);
   element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[2]/aadhya-reply-message/div[2]/span/ul/li[2]/a')).click();
    //$('body').sendKeys(protractor.Key.ENTER);
   //browser.driver.sleep(6000);
   //element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[1]/aadhya-reply-message/input')).sendKeys("hai nagaraju");
  // var enter = browser.actions().sendKeys(protractor.Key.ENTER);
//enter.perform();
//browser.driver.sleep(6000);
    //element(//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span)).click();
    //browser.driver.sleep(6000);
},1000000);
    
    });