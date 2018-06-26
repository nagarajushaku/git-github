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
       element(by.xpath('//*[@id="userId68"]')).click();
       
    
    browser.driver.sleep(4000);
    //element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello raheeem");
    //browser.driver.sleep(4000);
    //element(by.xpath('//*[@class="fa fa-telegram"]')).click();
    //browser.driver.sleep(40000);
   // browser.driver.sleep(40000); 
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
    browser.driver.sleep(6000); 
    
   element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[5]/a')).click();
   browser.driver.sleep(4000);   
   element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[2]/ace-editor/textarea')).sendKeys("heloo nagaraju");
   browser.driver.sleep(4000);   
   element(by.xpath('//*[@id="file-share"]/div/div/div[3]/button[2]')).click();
   browser.driver.sleep(6000);  
  });
                    
  });