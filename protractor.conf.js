

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test.js'],
  capabilities: {
    browserName: 'firefox'
   },
   baseUrl: 'http://localhost:3000',
   framework: 'jasmine',
   onPrepare: function(){
    
    browser.ignoreSynchronization = true;
  }

}
