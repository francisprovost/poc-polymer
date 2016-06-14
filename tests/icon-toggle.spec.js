module.exports = {
  'Demo test' : function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .click('icon-toggle')
      .assert.attributeContains('icon-toggle', 'pressed', true)
      .assert.containsText('#test2', 'salut')
      .pause(200)
      .assert.containsText('#test', '1')
      .end();
  }
};