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
    it("ddsdsdsd",function()
    {
       element(by.xpath('//*[@id="userId68"]')).click();
       
    
   browser.driver.sleep(4000);
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello raheeem");
  browser.driver.sleep(4000);
    element(by.xpath('//*[@class="fa fa-telegram"]')).click();
  browser.driver.sleep(40000);


  element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[1]/p/span/span')).click();
  browser.driver.sleep(6000);
 element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[2]/a[1]/a/span')).click(); 
  browser.driver.sleep(6000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[2]/a[1]/ul/li[1]')).click();
 browser.driver.sleep(40000);
 
});
  it ("add",function(){
  
   // browser.driver.sleep(6000);
   //element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[1]/span/span/img')).click();
    //browser.driver.sleep(6000);
    

   // var RemoveImg = element(by.xpath(".//*[@id='default']/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div[1]/span/span/img"));
  //browser.driver.sleep(6000); 


    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="userId29"]')).click(); 
    browser.driver.sleep(4000);
   element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello raheeem");
    browser.driver.sleep(6000);
 element(by.xpath('//*[@class="fa fa-telegram"]')).click();
browser.driver.sleep(40000);
  element(by.xpath('//*[@id="userId29"]')).click();
 browser.driver.sleep(40000);
element(by.xpath('//*[@id="userId68"]')).click();
  browser.driver.sleep(6000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[1]/p/span/span')).click();
  browser.driver.sleep(6000);
element(by.xpath('//*[@id="dLabel"]/span')).click();
 browser.driver.sleep(6000);
 element(by.linkText('Edit Message')).click();
 browser.driver.sleep(40000);
 element(by.xpath('//*[@id="field-7"]')).sendKeys('hai raheem')
 browser.driver.sleep(40000);
element(by.xpath('//*[@id="default"]/div[1]/ul/li[4]/aadhya-chat-message/div/div/div/div[3]/div[2]/a[1]')).click();
  browser.driver.sleep(6000);
  element(by.xpath('//*[@id="default"]/div[1]/ul/li[1]/aadhya-chat-message/div/div/div/div[3]/p')).click();
 browser.driver.sleep(6000);
 element(by.xpath('//*[@id="dLabel"]/span')).click();
  browser.driver.sleep(6000);
  element(by.linkText('Delete Message')).click();
   browser.driver.sleep(40000);
   element(by.xpath('//*[@id="userId38"]')).click();
   browser.driver.sleep(6000);
   element(by.xpath('//*[@id="default"]/div[1]/ul/li[4]/aadhya-chat-message/div/div/div/div[1]/p')).click();
  browser.driver.sleep(6000);
   element(by.xpath(' //*[@id="dLabel"]/span')).click();
  browser.driver.sleep(6000);
  element(by.linkText('Delete Message')).click();
   
  },1000000);
  it("ddsdsdsd",function()
  {
    element(by.xpath('//*[@id="userId68"]')).click();
     
  
  browser.driver.sleep(40000); 
  });
  
  it("aaa",function(){
       
    browser.driver.sleep(40000);
 element(by.xpath('//*[@class="fa fa-telegram"]')).click();
 browser.driver.sleep(5000); 
//element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[2]/p')).click();
// browser.driver.sleep(6000);
//element(by.xpath('//*[@id="default"]/div[1]/ul/li[5]/aadhya-chat-message/div/div/div/div[3]/span/a/span')).click();
// browser.driver.sleep(6000);
//enter.perform();
///// browser.driver.sleep(40000);
 //element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/p')).click();
//browser.driver.sleep(6000);
//element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span')).click();
//browser.driver.sleep(6000);
//element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div/aadhya-reply-message/div[2]/span/ul/li[1]/a')).click();
//$('body').sendKeys(protractor.Key.ENTER);
//browser.driver.sleep(6000);
//element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[1]/aadhya-reply-message/input')).sendKeys("hai nagaraju");
//var enter = browser.actions().sendKeys(protractor.Key.ENTER);
//enter.perform();
//browser.driver.sleep(6000);
//browser.driver.sleep(6000);
//element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[2]/aadhya-reply-message/div[2]/p')).click();
//browser.driver.sleep(6000);
//element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[2]/aadhya-reply-message/div[2]/span')).click();
//browser.driver.sleep(6000);
//element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[2]/aadhya-reply-message/div[2]/span/ul/li[2]/a')).click();
//browser.driver.sleep(6000); 
//element(by.xpath('//*[@id="userId71"]')).click();
//browser.driver.sleep(6000); 
//element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
   // browser.driver.sleep(6000); 
    
   //element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[5]/a')).click();
   //browser.driver.sleep(4000);   
   //element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[2]/ace-editor/textarea')).sendKeys("heloo nagaraju");
   //browser.driver.sleep(4000);   
   //element(by.xpath('//*[@id="file-share"]/div/div/div[3]/button[2]')).click();
   //browser.driver.sleep(6000); 
   //element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[1]/select')).click();
   //browser.driver.sleep(4000); 
   //element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[1]/select')).$('[value="email"]').click();
  // browser.driver.sleep(6000); 
  //element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[2]/quill-editor/div[2]/div[1]')).sendKeys("hai rahemm  test");
  //browser.driver.sleep(4000); 
   //element(by.xpath('//*[@id="file-share"]/div/div/div[3]/button[2]')).click();
   //browser.driver.sleep(4000); 
//$('body').sendKeys(protractor.Key.ENTER);
 ///element(by.xpath('//*[@id="envoi"]/span/i')).click();
 //$('body').sendKeys(protractor.Key.ENTER);
 //browser.driver.sleep(60000);
// element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[2]/div[2]/form/div/div[1]/span[2]')).click();
 //browser.driver.sleep(6000);
//},1000000);

    
  })
});

  

      