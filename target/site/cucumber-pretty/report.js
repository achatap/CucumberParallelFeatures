$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/google.feature");
formatter.feature({
  "name": "This is simple google page search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "google page search",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Unable to parse remote response: \u003c!DOCTYPE html\u003e\n\u003chtml style\u003d\"height:100%\"\u003e\n\u003chead\u003e\n\u003cmeta name\u003d\"viewport\" content\u003d\"width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\"\u003e\n\u003ctitle\u003e 404 Not Found\r\n\u003c/title\u003e\u003c/head\u003e\n\u003cbody style\u003d\"color: #444; margin:0;font: normal 14px/20px Arial, Helvetica, sans-serif; height:100%; background-color: #fff;\"\u003e\n\u003cdiv style\u003d\"height:auto; min-height:100%; \"\u003e     \u003cdiv style\u003d\"text-align: center; width:800px; margin-left: -400px; position:absolute; top: 30%; left:50%;\"\u003e\n        \u003ch1 style\u003d\"margin:0; font-size:150px; line-height:150px; font-weight:bold;\"\u003e404\u003c/h1\u003e\n\u003ch2 style\u003d\"margin-top:20px;font-size: 30px;\"\u003eNot Found\r\n\u003c/h2\u003e\n\u003cp\u003eThe resource requested could not be found on this server!\u003c/p\u003e\n\u003c/div\u003e\u003c/div\u003e\u003cdiv style\u003d\"color:#f0f0f0; font-size:12px;margin:auto;padding:0px 30px 0px 30px;position:relative;clear:both;height:100px;margin-top:-101px;background-color:#474747;border-top: 1px solid rgba(0,0,0,0.15);box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset;\"\u003e\n\u003cbr\u003eProudly powered by  \u003ca style\u003d\"color:#fff;\" href\u003d\"http://www.litespeedtech.com/error-page\"\u003eLiteSpeed Web Server\u003c/a\u003e\u003cp\u003ePlease be advised that LiteSpeed Technologies Inc. is not a web hosting company and, as such, has no control over content found on this site.\u003c/p\u003e\u003c/div\u003e\u003c/body\u003e\u003c/html\u003e\n\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:112)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:39)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:619)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:173)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:151)\r\n\tat com.tau.pages.BasePage.init(BasePage.java:56)\r\n\tat com.tau.steps.GooglePageStep.setup(GooglePageStep.java:22)\r\nCaused by: org.openqa.selenium.json.JsonException: Unable to determine type from: \u003c. Last 1 characters read: \u003c\nBuild info: version: \u00274.0.0-beta-3\u0027, revision: \u00275d108f9a67\u0027\nSystem info: host: \u0027LAPTOP-M9NR2LIP\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.json.JsonInput.peek(JsonInput.java:126)\r\n\tat org.openqa.selenium.json.JsonTypeCoercer.lambda$buildCoercer$6(JsonTypeCoercer.java:141)\r\n\tat org.openqa.selenium.json.JsonTypeCoercer.coerce(JsonTypeCoercer.java:127)\r\n\tat org.openqa.selenium.json.Json.toType(Json.java:69)\r\n\tat org.openqa.selenium.json.Json.toType(Json.java:55)\r\n\tat org.openqa.selenium.json.Json.toType(Json.java:50)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:109)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.TracedCommandExecutor.execute(TracedCommandExecutor.java:39)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:619)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:173)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:151)\r\n\tat com.tau.pages.BasePage.init(BasePage.java:56)\r\n\tat com.tau.steps.GooglePageStep.setup(GooglePageStep.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:60)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:43)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:168)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:79)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:202)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "open url \"https://facebook.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.GooglePageStep.openUrl(String) in file:/C:/Users/achat/IdeaProjects/CucumberParallelFeatures/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "open url \"https://youtube.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.GooglePageStep.openUrl(String) in file:/C:/Users/achat/IdeaProjects/CucumberParallelFeatures/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "open url \"https://gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.GooglePageStep.openUrl(String) in file:/C:/Users/achat/IdeaProjects/CucumberParallelFeatures/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "open url \"https://programesecure.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.tau.steps.GooglePageStep.openUrl(String) in file:/C:/Users/achat/IdeaProjects/CucumberParallelFeatures/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.tau.steps.GooglePageStep.closeDriver(GooglePageStep.java:27)\r\n",
  "status": "failed"
});
});