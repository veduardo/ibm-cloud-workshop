module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://ibm-cloud-workshop.mybluemix.net/index.html')
      .waitForElementVisible('input.form-control', 60000, true,
        function(){}, 'Waiting for Search Input to become visible')
      .setValue('input.form-control', 'vesoares@br.ibm.com')
      .click('button[id=btn-subscribe]')
      .waitForElementPresent('#feedback', 60000)
      .pause(5000)
      .end();
  }
};
