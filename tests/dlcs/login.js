module.exports = {
  "step one" : function (browser) {
    browser
      .url("http://slideprep.cloud-interactive.com/")
      .waitForElementVisible('.loginInput', 1000)
      .click('#loginBtn')
      //.waitForElementVisible('button[name=btnG]', 1000)
  }
};
