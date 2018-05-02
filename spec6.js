describe("login functionality", function() {
    //browser.ignoreSynchronization = true;
     it('user info', function() {
         browser.get('https://chatapp.aadhya-analytics.com:4201');
         browser.waitForAngularEnabled(false)
       element(by.xpath('//*[@id="Username"]')).sendKeys("nagaraju");
       element(by.id("Password")).sendKeys("laxmirao");
     
     
       element(by.buttonText("Sign In")).click();
       browser.driver.sleep(50000);
       });
    it("ddsdsdsd",function()
    {
       element(by.xpath('//*[@id="userId23"]')).click();
       browser.driver.sleep(40000); 
    
       element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div/p/span/span')).click();
    browser.driver.sleep(40000); 
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div')).click();
    browser.driver.sleep(40000);   
  });
    
  });
