











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
       
        element(by.xpath('//*[@id="leftscroll"]/ul[2]/li/a')).click();
        browser.driver.sleep(20000);
        element(by.xpath('//*[@id="navbar"]/ul/li[4]/a/i')).click();
        //browser.driver.sleep(20000);
       // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[2]/div/table/tbody/tr/td/div/div/div[3]/div[1]/table/tbody/tr/td[6]')).click();
        browser.driver.sleep(20000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[1]/div/button[1]/span')).click();
        browser.driver.sleep(20000);

    });
   

});