describe("login functionality", function() {
    browser.driver.manage().window().maximize();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;
    //browser.ignoreSynchronization = true;
     it('user info', function() {
         browser.get('https://dya4247t866iy.cloudfront.net');
      // browser.get('https://chatapp.aadhya-analytics.com:4201');
         browser.waitForAngularEnabled(false)
       element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
       element(by.id("Password")).sendKeys("rakesh");
     
     
       element(by.buttonText("Sign In")).click();
       browser.driver.sleep(60000);
       });
     it("ddsdsdsd",function()
     {
      browser.driver.sleep(60000);
      element(by.xpath('/html/body/aadhya-root/app-chat-page/aadhya-call-popup/div/div/div/p/a[1]/span')).click();
      browser.driver.sleep(80000);
      
     // browser.driver.sleep(70000);
    });

});