exports.config = {
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',




    specs: ['specall1.js'],
//     capabilities: {
// 'browserName':'chrome',
// 'maxInstances':2,
// 'shardTestFiles': true,


//     }
allScriptsTimeout: 1200000,

 getPageTimeout: 1200000,
 jasmineNodeOpts: {
   defaultTimeoutInterval: 1200000,
},
   // chromeOptions:1//*[@id="default"]/div[1]/ul/li[6]/aadhya-chat-message/div/div/div/div[3]/span/span[1]/img {args:['--incognito']}
//allScriptsTimeout:9500,
}


