











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
       browser.driver.sleep(20000);
       });
    it("ddsdsdsd",function()
    {
       
        element(by.xpath('//*[@id="leftscroll"]/ul[2]/li/a')).click();
        browser.driver.sleep(20000);
        element(by.xpath('//*[@id="navbar"]/ul/li[4]/a')).click();
        browser.driver.sleep(20000);
        // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[2]/div/table/tbody/tr/td/div/div/div[3]/div[1]/table/tbody/tr/td[6]'));
        // browser.driver.sleep(20000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[2]/div/button[1]')).click();
        browser.driver.sleep(20000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[2]/div/button[2]')).click();
        browser.driver.sleep(20000);


    });
    it("ddsdsdsd",function()
    {
       
        // element(by.xpath('//*[@id="leftscroll"]/ul[2]/li/a')).click();
        // browser.driver.sleep(20000);
        // element(by.xpath('//*[@id="navbar"]/ul/li[4]/a')).click();
        // browser.driver.sleep(20000);
        // // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[2]/div/table/tbody/tr/td/div/div/div[3]/div[1]/table/tbody/tr/td[6]'));
        // // browser.driver.sleep(20000);
        // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[2]/div/button[1]')).click();
        // browser.driver.sleep(20000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[2]/div/button[2]')).click();
        browser.driver.sleep(20000);
    
    });
   
       
       
        it("ddsdsdsd",function()
     {
       
         browser.driver.sleep(20000);
         element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[2]/div/button[3]')).click();
         browser.driver.sleep(20000);
         element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[1]/div/button[1]/span')).click();
         browser.driver.sleep(20000);
         element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[1]/div/button[2]/span')).click();
         browser.driver.sleep(20000);
    });
   
    it("ddsdsdsd",function()
    {
      
        // browser.driver.sleep(20000);
        // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[2]/div/button[3]')).click();
        // browser.driver.sleep(20000);
        // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[1]/div/button[1]/span')).click();
        browser.driver.sleep(20000);
        element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[1]/div[1]/div/button[2]')).click();
        browser.driver.sleep(20000);
   });
   it("step2",function()
   {
     
    //    element(by.xpath('//*[@id="leftscroll"]/ul[2]/li/a')).click();
    //    browser.driver.sleep(20000);
    //    element(by.xpath('//*[@id="navbar"]/ul/li[4]/a/i')).click();
    //    //browser.driver.sleep(20000);
    //   // element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[2]/div/table/tbody/tr/td/div/div/div[3]/div[1]/table/tbody/tr/td[6]')).click();
       browser.driver.sleep(20000);
      element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/calendar-view/app-calendarbody/div[1]/ng-fullcalendar/div[2]/div/table/tbody/tr/td/div/div/div[3]/div[1]/table/tbody/tr/td[6]')).click();
      browser.driver.sleep(20000);
   //    element(by.xpath('//*[@id="channelName"]')).sendKeys('angular testing');
   //    browser.driver.sleep(20000);
   //    element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[1]/div/div/div[2]/div[1]/input')).click();
   //    browser.driver.sleep(20000);
   });
   it("step3",function()
   {
       //element(by.xpath('//*[@id="cal-create-event"]/div/div')).click();
       element(by.name('eventName')).sendKeys("angular testing room");
       browser.driver.sleep(20000);
     element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[1]/div/div/div[2]/div[1]/input')).click();
   browser.driver.sleep(40000);
//     element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[1]/div/div/ul/li[1]/div/input')).click();
// browser.driver.sleep(20000);
// element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[1]/div/div/ul/li[2]/div/input')).click();
// browser.driver.sleep(20000);
// element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[2]/button[2]')).click();
// browser.driver.sleep(20000);
   
   });
   it("step4",function()
   {
       //element(by.xpath('//*[@id="cal-create-event"]/div/div')).click();
   //     element(by.name('eventName')).sendKeys("angular testing room");
   //     browser.driver.sleep(20000);
   //   element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[1]/div/div/div[2]/div[1]/input')).click();
   // browser.driver.sleep(40000);
   element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[1]/div/div/ul/li[1]/div/input')).click();
browser.driver.sleep(20000);
element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[1]/div/div/ul/li[2]/div/input')).click();
browser.driver.sleep(20000);
element(by.xpath('//*[@id="cal-create-event"]/div/div/form/div[2]/button[2]')).click();
browser.driver.sleep(20000);
   
   });
    });
   
   


