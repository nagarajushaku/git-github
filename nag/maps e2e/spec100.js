describe("login functionality", function() {
    browser.driver.manage().window().maximize();
    
     it('user info', function() {
         browser.get('https://dya4247t866iy.cloudfront.net');
         browser.waitForAngularEnabled(false)
       element(by.xpath('//*[@id="Username"]')).sendKeys("nagaraju");
       element(by.id("Password")).sendKeys("nag");
     
     
       element(by.buttonText("Sign In")).click();
       browser.driver.sleep(10000);
       });
    it("ddsdsdsd",function()
    {browser.waitForAngularEnabled(false)
        element(by.xpath('//*[@id="navbar"]/ul/li[3]/a')).click();
        browser.driver.sleep(10000);
        
        
 element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[38]/div')).click();
 browser.driver.sleep(10000);

 
    });
    it("ddsdsdsde",function()
    {
      
element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[2]')).click();
browser.driver.sleep(10000);
element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]')).click();
browser.driver.sleep(10000);
element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div[3]/div[1]')).click();
browser.driver.sleep(10000);

});

it("ddsdsdsde",function()
    {
       
        browser.actions().mouseMove(element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')), {
            x: 295
            , y: 225
        }).click().perform();
        browser.driver.sleep(10000)

    
});
 it("ddsdsdsde",function()
     {
       var c = browser.actions().mouseMove(element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')), {
            x: 95
            , y: 25
        }).click().perform();
        browser.driver.sleep(10000)

    
});




it("ddsdsdsde",function()
     {
       var c = browser.actions().mouseMove(element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')), {
            x: 0
            , y: 2
        }).click().perform();
        browser.driver.sleep(10000);

        browser.actions().click(protractor.Button.LEFT).perform();
        browser.driver.sleep(10000)
        

    
});

it("ddsdsdsde",function(){
    var a =element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')).click();
    browser.driver.sleep(10000);
    browser.actions().
        mouseMove(a).
        mouseMove({x: 39, y: 39}).
        doubleClick().
        perform();
        browser.driver.sleep(10000);
    
             
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[4]')).click();
                        
        browser.driver.sleep(10000);
         
            });


            it("ddsdsdsd",function()
            {
                browser.waitForAngularEnabled(false)
                element(by.xpath('//*[@id="navbar"]/ul/li[3]/a')).click();
                browser.driver.sleep(10000);
         element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[71]/div')).click();
         browser.driver.sleep(10000);
        
        
                element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/button')).click();
                browser.driver.sleep(10000);
        
            });
            it("ddsdsdsd",function()
            {
                
        
                element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/button')).click();
                browser.driver.sleep(10000);
        
        
            });
            it("ddsdsdsde",function()
            {
               // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div')).click();
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[2]')).click();
        browser.driver.sleep(10000);
        element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]')).click();
        browser.driver.sleep(10000);
        element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div[3]/div[1]')).click();
        browser.driver.sleep(10000);
        
        });
        
        
        
        it("ddsdsdsde",function()
            {
               
                browser.actions().mouseMove(element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')), {
                    x: 295
                    , y: 225
                }).click().perform();
                browser.driver.sleep(10000)
        
            
        });
         it("ddsdsdsde",function()
             {
               var c = browser.actions().mouseMove(element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')), {
                    x: 95
                    , y: 25
                }).click().perform();
                browser.driver.sleep(10000)
        
            
        });
        
        
        
        
        it("ddsdsdsde",function()
             {
               var c = browser.actions().mouseMove(element(by.xpath('//*[@id="map"]/div/div/div[1]/div[3]/div[2]/div[3]/div')), {
                    x: 0
                    , y: 2
                }).click().perform();
                browser.driver.sleep(10000);
        
                browser.actions().click(protractor.Button.LEFT).perform();
                browser.driver.sleep(10000)
                
        
            
        });
        it("ddsdsdsd",function()
        {
            
        
            element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/app-weather/div')).click();
            browser.driver.sleep(10000);
            element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/app-weather/div/ul/li[1]/a')).click();
            browser.driver.sleep(10000);
            element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/mapoperations/div/button[4]')).click();
            browser.driver.sleep(10000);
        });
        
        it("ddsdsdsd",function()
        {
          element(by.xpath('//*[@id="navbar"]/ul/li[3]/a')).click()
          browser.driver.sleep(10000);
          element(by.xpath(' //*[@id="leftscroll"]/ul[4]/li[103]/div')).click()
          browser.driver.sleep(10000);
    
        });
    
        it("ddsdsdsd",function()
        {
        
      browser.waitForAngularEnabled(false)
             element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[2]/button/i')).click();
    
         browser.driver.sleep(10000);
       
        });
        it("ddsdsdsd",function()
        {
       
         element(by.xpath('//*[@id="User"]')).sendKeys('ram');
         browser.driver.sleep(10000);
         element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[2]/div/form/div/ul/li[2]')).click();
         browser.driver.sleep(10000);
    
        });
        
    
        it("ddsdsdsd",function()
        {
          element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[74]/div')).click()
          browser.driver.sleep(10000);
          element(by.xpath('//*[@id="leftscroll"]/ul[2]/li[1]/a')).click()
          browser.driver.sleep(10000);
    
          element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[74]/div')).click()
          browser.driver.sleep(10000);

        });
    
      
        it("ddsdsdsd",function()
        {
            browser.waitForAngularEnabled(false)
            element(by.xpath('//*[@id="navbar"]/ul/li[3]/a/i')).click();
            browser.driver.sleep(20000);
            
      element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[29]/div')).click();
      browser.driver.sleep(20000);
      
        });
      
      it("ddsdsdsd",function()
      {
        
      element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[1]/button')).click();
      browser.driver.sleep(20000);
      
      
      
      
            element(by.xpath('//*[@id="search_from"]')).sendKeys('Hy');
           
            browser.driver.sleep(10000);
            element(by.xpath('/html/body/div[1]/div[1]/span[3]')).click();
            browser.driver.sleep(10000);
            element(by.xpath('//*[@id="search_to"]')).sendKeys('vija');
            browser.driver.sleep(10000);
            element(by.xpath('/html/body/div[2]/div[1]/span[3]')).click();
            browser.driver.sleep(10000);
           element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-map-page/div/div[1]/usersearch/div/div[1]/div/div/button')).click();
      browser.driver.sleep(10000);
      
      });
       
    
    });


