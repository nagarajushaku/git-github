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
       browser.driver.sleep(40000);
       });
    it("ddsdsdsd",function()
    {
        browser.waitForAngularEnabled(false)
        element(by.xpath('//*[@id="navbar"]/ul/li[3]/a')).click();
        browser.driver.sleep(40000);
 element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[71]/div')).click();
 browser.driver.sleep(40000);


        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/button')).click();
        browser.driver.sleep(40000);

    });
    it("ddsdsdsd",function()
    {
        

        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/button')).click();
        browser.driver.sleep(40000);


    });
    it("ddsdsdsde",function()
    {
       // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div')).click();
element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[2]')).click();
browser.driver.sleep(40000);
element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]')).click();
browser.driver.sleep(40000);
element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div[3]/div[1]')).click();
browser.driver.sleep(40000);

});



it("ddsdsdsde",function()
    {
       
        browser.actions().mouseMove(element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')), {
            x: 295
            , y: 225
        }).click().perform();
        browser.driver.sleep(40000)

    
});
 it("ddsdsdsde",function()
     {
       var c = browser.actions().mouseMove(element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')), {
            x: 95
            , y: 25
        }).click().perform();
        browser.driver.sleep(40000)

    
});




it("ddsdsdsde",function()
     {
       var c = browser.actions().mouseMove(element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')), {
            x: 0
            , y: 2
        }).click().perform();
        browser.driver.sleep(40000);

        browser.actions().click(protractor.Button.LEFT).perform();
        browser.driver.sleep(40000)
        

    
});
it("ddsdsdsd",function()
{
    

    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/app-weather/div')).click();
    browser.driver.sleep(40000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/app-weather/div/ul/li[1]/a')).click();
    browser.driver.sleep(40000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[4]')).click();
    browser.driver.sleep(40000);
});

    
});