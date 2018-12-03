var amazonSearchResultsPage = require('./page-objects/search-results-page');

describe('Search results page', function () {

    it('should find desired book in search results', function () {
        amazonSearchResultsPage.getBookTitles();
    });
});