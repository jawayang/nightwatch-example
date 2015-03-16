# 測試說明
nightwatch 測試有好幾種設定方式

## 環境設定
建立 nightwatch.json 檔案在資料夾中
告訴 nightwatch 相關的資料放在哪邊

## nightwatch.json
環境設定
範例：

``` json
{
  "src_folders" : ["./examples/tests"],
  "output_folder" : "./examples/reports",
  "custom_commands_path" : "./examples/custom-commands",
  "custom_assertions_path" : "",
  "globals_path" : "",
  "live_output" : false,
  "parallel_process_delay" : 10,
  "disable_colors": false,

  "selenium" : {
    "start_process" : false, // 是否啟動 server
    "server_path" : "",		 // selenium-server-standalone-{version}.jar 的位置
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.ie.driver" : "",
      "webdriver.firefox.profile" : ""
    }
  },

  "test_settings" : {
    "default" : {			//預設的測試環境
      "launch_url" : "http://localhost",
      "selenium_host" : "127.0.0.1",
      "selenium_port" : 4444,
      "silent" : true,
      "disable_colors": false,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities" : {
        "browserName" : "firefox",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true
      }
    },

    "saucelabs" : {
      "selenium_host" : "ondemand.saucelabs.com",
      "selenium_port" : 80,
      "username" : "${SAUCE_USERNAME}",
      "access_key" : "${SAUCE_ACCESS_KEY}",
      "use_ssl" : false,
      "silent" : true,
      "output" : true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "name" : "test-example",
        "browserName": "firefox"
      },
      "globals" : {
        "myGlobal" : "some_sauce_global"
      },
      "selenium" : {
        "start_process" : false
      }
    },

    "phantomjs" : {
      "desiredCapabilities" : {
        "browserName" : "phantomjs",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "phantomjs.binary.path" : "/path/to/phantomjs"
      }
    },

    "browserstack" : {
      "selenium" : {
        "start_process" : false
      },
      "selenium_host" : "hub.browserstack.com",
      "selenium_port" : 80,
      "silent" : true,
      "desiredCapabilities": {
        "name" : "test-example",
        "browserName": "firefox",
        "browserstack.user" : "...",
        "browserstack.key" : "..."
      }
    }
  }
}
```
## globalsModule.js
Nightwatch 提供前後觸發機制

## 第一種 全域設定
將 nightwatch 透過 -g 安裝
```
$npm install -g nightwatch
```
便可以在任何資料夾中執行 nightwatch
```
$ nightwatch
```
此時 nightwatch 就會根據 nightwatch.json 中的設定進行測試


## 單一資料夾安裝
將 nightwatch 安裝在資料夾中
```
$npm install nightwatch
```
### 建立 runner
建立一個名稱為 nightwatch.js檔案
裡面放下列程式碼
```
require('nightwatch/bin/runner.js');
```
執行測試工作
```
$ node nightwatch.js
```
此時 nightwatch 就會根據 nightwatch.json 中的設定進行測試

## 測試不同瀏覽器
```
$ nightwatch -e default,chrome
```
Command-line Options

|Name|Shortname|default|description|
|----|---------|-------|-----------|
| --config | -c |./nightwatch.json|The location of the `nightwatch.json` file - the configuration file which the runner uses and which also includes the Selenium WebDriver options.|
| --output | -o | tests_output | The location where the JUnit XML reports will be saved. |
| --env	   | -e | default | Which testing environment to use - defined in `nightwatch.json` |
| --test   | -t | | Shows extended selenium command logging during the session |
| --group  | -g | | Runs only the specified group of tests (subfolder). Tests are grouped by being placed in the same subfolder. 根據資料夾做群組測試 |
| --skipgroup | -s |  |  Skip one or several (comma separated) group of tests. |
| --filter    | -f |  |  Specify a filter (glob expression) as the file name format to use when loading the test files. |
| --tags	  | -a |  |  Filter test modules by tags. Only tests that have the specified tags will be loaded. |

單一測試
```
$ nightwatch -e chrome -g dlcs
```

執行範例
https://github.com/9thport/nightwatch-example
