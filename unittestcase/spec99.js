describe("login functionality", function() {
    //browser.ignoreSynchronization = true;
     it('user info', function() {
         browser.get('https://chatapp.aadhya-analytics.com:4201');
         browser.waitForAngularEnabled(false)
       element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
       element(by.id("Password")).sendKeys("rakesh228");
     
     
       element(by.buttonText("Sign In")).click();
       browser.driver.sleep(40000);
       });
    it("ddsdsdsd",function()
    {
       element(by.xpath('//*[@id="userId69"]')).click();
    browser.driver.sleep(5000); 
    element(by.getText('hiii')).click();
    browser.driver.sleep(5000); 
});

});