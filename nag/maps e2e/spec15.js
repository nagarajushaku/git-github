describe("login functionality", function() {
    browser.driver.manage().window().maximize();
    //browser.ignoreSynchronization = true;
     it('user info', function() {
         browser.get('https://dya4247t866iy.cloudfront.net');
         browser.waitForAngularEnabled(false)
       element(by.xpath('//*[@id="Username"]')).sendKeys("nagaraju");
       element(by.id("Password")).sendKeys("nag");
     
     
       element(by.buttonText("Sign In")).click();
       browser.driver.sleep(40000);
       });
    it("ddsdsdsd",function()
    {browser.waitForAngularEnabled(false)
        element(by.xpath('//*[@id="navbar"]/ul/li[3]/a')).click();
        browser.driver.sleep(40000);
        
        
 element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[38]/div')).click();
 browser.driver.sleep(40000);

 
    });
    it("ddsdsdsde",function()
    {
       // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div')).click();
element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[3]')).click();
browser.driver.sleep(40000);
element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]')).click();
browser.driver.sleep(40000);
element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div[3]/div[1]')).click();
browser.driver.sleep(40000);

});

// element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div[3]/div[1]')).click();
// browser.driver.sleep(40000);
it("ddsdsdsde",function()
    {
       // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div')).click();
// element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[3]')).click();
// browser.driver.sleep(40000);
// element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]')).click();
// browser.driver.sleep(40000);
// element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div[3]/div[1]')).click();
// element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div[3]')).click();
var a =element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')).click();
browser.driver.sleep(40000);
browser.actions().
    mouseMove(a).
    mouseMove({x: 50, y: 0}).
    doubleClick().
    perform();
    browser.driver.sleep(40000);

});

it("ddsdsdsde",function()
    {
        browser.actions().mouseMove({x: 45, y: 45}).perform().then(() => browser.actions()
        .click()
        .perform()).then(function() {
            browser.driver.sleep(40000);
         var c =  element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')).click();
           
});
// it("ddsdsdsde",function()
//     {
//         browser.actions().mouseMove({x: 15, y: 15}).perform().then(() => browser.actions()
//         .click()
//         .perform()).then(function() {
//             browser.driver.sleep(40000);

//          var c =  element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]')).click();
//          browser.driver.sleep(40000);

//         });
// });

    });
});