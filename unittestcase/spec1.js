describe("login functionality", function() {
  //browser.ignoreSynchronization = true;

  it("ades",function () {
    Browser.mange().window().minimize();




  })
   it('user info', function() {
       browser.get('https://chatapp.aadhya-analytics.com:4201/');
       browser.waitForAngularEnabled(false)
     element(by.xpath('//*[@id="Username"]')).sendKeys("nagaraju");
     element(by.id("Password")).sendKeys("nag");
   
   
     element(by.buttonText("Sign In")).click();
     browser.driver.sleep(40000);
     });
  it("ddsdsdsd",function()
  {
     element(by.xpath('//*[@id="userId68"]')).click();
     
  
  browser.driver.sleep(4000);
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello raheeem");
  browser.driver.sleep(4000);
  element(by.xpath('//*[@class="fa fa-telegram"]')).click();
  browser.driver.sleep(400000);
});






});
