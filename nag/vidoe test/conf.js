exports.config = {
    specs: [
      // leave this empty if you have no shared tests. 
    ],
  
    multiCapabilities: [{
      'browserName': 'chrome',
      'specs': ['spec2.js']
    }, {
      'browserName': 'chrome',
      'specs': ['spec81.js']

    }],
  };