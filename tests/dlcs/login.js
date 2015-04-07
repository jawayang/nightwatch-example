module.exports = {

  "第一步測試" : function (browser) {
    browser
      .resizeWindow(1920, 1080)
      .saveScreenshot('./results/test.png')
      // 開啟視窗
      .url("https://microscope.paragon.dlcscpth.com/")
      .waitForElementVisible('input[placeholder=Username]', 15000, '成功開啟視窗')
      .setValue('input[placeholder=Username]', 'CLOUDPATH')
      .setValue('input[placeholder=Password]', 'Cloud1111')
      .execute(function(data){
          $('#loginBtn').trigger('touchend');
      })
      .waitForElementVisible('.name.ellipsis',100000 ,'成功登入')
      .assert.visible(".name.ellipsis")
      .assert.containsText('.name.ellipsis','Cloud Pathologist');
      // 點選第一個case
    //   .waitForElementPresent('.checkCasePress',1000,'點選第一個case')
    //   .pause(1000)
    //   .execute(function(data){
    //       $($(".checkCasePress")[0]).trigger('tap');
    //   })
      //點選第一個slide
    //   .waitForElementPresent('.slideBox',1000,'點選第一個slide')
    //   .pause(1000)
    //   .execute(function(data){
    //       $($("#iScrollOverViewSpecimens .slideBox")[0]).trigger('tap');
    //   })
      //.perform(function(browser,done){
      //   console.log('測試結束');
      //})
      //.end();
      //.waitForElementVisible('button[name=btnG]', 1000)
  },
  "第二步測試" : function(browser){
      browser
      .waitForElementVisible('#firstUL>li:first-child',100000 ,'選擇第一筆Case')
      .execute(function(data){
          $('#firstUL>li:first-child').trigger('tap');
      })

      .waitForElementVisible('#slideIScroll_A ul li div.slide:first-child',100000 ,'選擇第一個slide')
      .execute(function(data){
          $('#slideIScroll_A ul li div.slide:first-child').trigger('tap');
      })
      .waitForElementVisible('#next',5000,'下一個Case')
      .execute(function(data){
          $('#next').trigger('tap');
      })

      .pause(15000)
      .end();
  }
};


/* 範例

module.exports = {
  "step one" : function (browser) {
    browser
      .url("http://www.google.com")
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', ['nightwatch',browser.Keys.ENTER]);
      //.waitForElementVisible('button[name=btnG]', 1000)
  },

  "step two" : function (browser) {
    browser
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'The Night Watch')
      .end();
  }
};

*/

/*
範例

module.exports = {
  'Demo test NightwatchJS.org' : function (client) {
    client
      .url('http://nightwatchjs.org')
      .waitForElementVisible('body', 1000)
      .elements('css selector', '#index-container ul.features li', function (result) {

        for (var i = 0; i < result.value.length; i++) {
          var element = result.value[i];

          var selector = '#index-container ul.features li:nth-child(' + (element.ELEMENT ) +') em';
          client.verify.cssClassPresent(selector, 'glyphicon');
        }
      })
      .end();
  }
};
*/
