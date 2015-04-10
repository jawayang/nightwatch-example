module.exports = {

	"第一步測試": function(browser) {
		browser
			.resizeWindow(1920, 1080)
			.saveScreenshot('./results/test.png')
			// 開啟視窗
			.url("https://microscope.paragon.dlcscpth.com/")
			.waitForElementVisible('input[placeholder=Username]', 10000, '成功開啟視窗')
			.setValue('input[placeholder=Username]', 'CLOUDPATH')
			.setValue('input[placeholder=Password]', 'Cloud1111')
			.execute(function(data) {
				$('#loginBtn').trigger('touchend');
			})
			.waitForElementVisible('.name.ellipsis', 10000, '成功登入');
			//.assert.visible(".name.ellipsis")
			//.assert.containsText('.name.ellipsis', 'Cloud Pathologist');

	},
	"第二步測試": function(browser) {

		browser
			.waitForElementVisible('#firstUL>li:first-child', 10000, '測試開始')
			.execute(function(data) {
				$('#firstUL>li:first-child').trigger('tap');
			});

			var count = 0;
			var self = this;

			function tapSlide (){
				count ++;
				browser
					.pause(5*1000)
					.waitForElementVisible('#slideIScroll_A div.slide:first-child', 60000)
					//.assert.visible("#slideIScroll_A")
					.execute(function() {
						$('#slideIScroll_A ul li div.slide:first-child').trigger('tap');
					})
					.pause(0.5*60*1000)
					.waitForElementVisible('#next', 10000)
					//.waitForElementVisible('#next', 10000, '下一個Case')
					//.assert.visible("#next")
					.execute(function() {
						$('#next').trigger('touchend');
						return true;
					},function(result){
						//console.log("result",result);
						if(count<100){
							console.log("點擊次數",count);
							tapSlide();
						}else{
							console.log("點擊測試結束");
							browser.pause(3000)
							.end();
						}
					});
				}

			tapSlide();


	}
};

/*

"Drag and drop test (useCss)" : function (browser) {
  browser
    .useCss()
    .moveToElement('#draggable',  0,  0)
    .mouseButtonDown(0)
    .moveToElement('body',  200,  600) // Move to offset position of 200(x) 600(y)
    .mouseButtonUp(0)
    .pause(5000)  // Keep browser open for 5 seconds so you can see result
    .end();
}

*/

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
