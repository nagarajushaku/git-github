
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
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("https://www.google.com/search?client=ubuntu&channel=fs&q=www+facebook+login&ie=utf-8&oe=utf-8");
    browser.driver.sleep(4000);
    element(by.xpath('//*[@class="fa fa-telegram"]')).click();
    browser.driver.sleep(40000);
  });
                    
  });
  