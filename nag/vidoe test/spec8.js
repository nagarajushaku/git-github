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
       
        element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[83]/div')).click();
        browser.driver.sleep(20000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div[1]/div/div[2]/ul/li[2]/a')).click();
        browser.driver.sleep(50000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/aadhya-videopanel/div/div/div[1]/div[3]/button')).click();
        browser.driver.sleep(50000);
 


    });

});