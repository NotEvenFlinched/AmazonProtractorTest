var AmazonSearchResultsPage = function () {

    this.getBookTitles = function () {
        element.all(by.xpath('h2')).then(function(books) {
            console.log(books);
          });
    }
}
module.exports = new AmazonSearchResultsPage();