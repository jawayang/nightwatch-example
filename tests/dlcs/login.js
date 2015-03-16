module.exports = {
  "step one" : function (browser) {
    browser
      .resizeWindow(1920, 1080)
      .saveScreenshot('./results/test.png')
      // 開啟視窗
      .url("http://slideprep.cloud-interactive.com/")
      .waitForElementVisible('body', 1000, '成功開啟視窗')
      .pause(1000)
      // 登入
      .waitForElementPresent('#loginBtn',1000 ,'成功登入')
      .execute(function(data){
          $('#loginBtn').trigger('touchend');
      })
      // 點選第一個case
      .waitForElementPresent('.checkCasePress',1000,'點選第一個case')
      .pause(1000)
      .execute(function(data){
          $($(".checkCasePress")[0]).trigger('tap');
      })
      //點選第一個slide
      .waitForElementPresent('.slideBox',1000,'點選第一個slide')
      .pause(1000)
      .execute(function(data){
          $($("#iScrollOverViewSpecimens .slideBox")[0]).trigger('tap');
      })
      //.perform(function(browser,done){
      //   console.log('測試結束');
      //})
      .end();
      //.waitForElementVisible('button[name=btnG]', 1000)
  }
};
