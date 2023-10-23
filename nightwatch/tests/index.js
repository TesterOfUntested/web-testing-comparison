module.exports = {
    'DemoQA Title Test': function (browser) {
      browser
        .url('https://demoqa.com')
        .waitForElementVisible('body', 5000) 
        .assert.title('DEMOQA')
        .end();
    }
  };  