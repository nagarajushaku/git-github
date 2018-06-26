describe("login functionality", function() {
    //browser.ignoreSynchronization = true;
     it('user info', function() {
         browser.get('https://dya4247t866iy.cloudfront.net/#/login');
         browser.waitForAngularEnabled(false)
       element(by.xpath('//*[@id="Username"]')).sendKeys("nagaraju");
       element(by.id("Password")).sendKeys("laxmirao");
     
     
       element(by.buttonText("Sign In")).click();
       browser.driver.sleep(40000);
       });
    it("ddsdsdsd",function()
    {
       element(by.xpath('//*[@id="userId23"]')).click();
       
    
    browser.driver.sleep(4000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div/div/div[1]/div/div/div[1]/a/img')).click();
   browser.driver.sleep(4000);
    //element(by.xpath('//*[@class="fa fa-telegram"]')).click();
    //browser.driver.sleep(40000);
  });
                    
  });
  