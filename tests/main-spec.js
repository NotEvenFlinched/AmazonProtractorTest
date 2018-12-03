var amazonMainPage = require('./page-objects/main-page');

describe('Main page', function () {

    it('should search for Java', function () {
        amazonMainPage.get();
        amazonMainPage.doSearch(browser.params.searchTerm);
    });
});
