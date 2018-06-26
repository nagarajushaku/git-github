exports.config = {
  specs: [
    // leave this empty if you have no shared tests. 
  ],

  multiCapabilities: [{
    'browserName': 'chrome',
    'specs': ['spec1.js']
  }, {
    'browserName': 'chrome',
    'specs': ['spec3.js']
  }, {
    'browserName': 'chrome',
    'specs': ['spec3.js']
  }],
};