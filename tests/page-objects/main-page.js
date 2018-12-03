var AmazonMainPage = function () {
    var searchField = element(by.id('twotabsearchtextbox'));
    var searchButton = element(by.css('.nav-input'));

    this.get = function () {
        browser.get('https://www.amazon.com/');
    };

    this.doSearch = function (bookSearchTerm) {
        searchField.sendKeys(bookSearchTerm);
        searchButton.click();
    }
}
module.exports = new AmazonMainPage();