describe("login functionality", function() {
  browser.ignoreSynchronization = true;
  it('user info', function() {
       browser.get('https://dya4247t866iy.cloudfront.net/#/login');
       browser.waitForAngularEnabled(false)
     element(by.xpath('//*[@id="Username"]')).sendKeys("nagaraju");
     element(by.id("Password")).sendKeys("nag");
   
   
     element(by.buttonText("Sign In")).click();
     browser.driver.sleep(40000);
     });
    });