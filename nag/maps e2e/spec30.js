describe("login functionality", function() {
    browser.driver.manage().window().maximize();
  
    //browser.ignoreSynchronization = true;
     it('user info', function() {
        browser.get('https://dya4247t866iy.cloudfront.net');
        // browser.get('https://chatapp.aadhya-analytics.com:4201');
         browser.waitForAngularEnabled(false)
       element(by.xpath('//*[@id="Username"]')).sendKeys("nagaraju");
       element(by.id("Password")).sendKeys("nag");
     
     
       element(by.buttonText("Sign In")).click();
       browser.driver.sleep(20000);
       });
     it("ddsdsdsd",function()           
    {
        browser.waitForAngularEnabled(false)
        element(by.xpath('//*[@id="navbar"]/ul/li[3]/a')).click();
        browser.driver.sleep(30000);
        
        element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[37]/div')).click();
        browser.driver.sleep(20000);
  
    });
  
  });