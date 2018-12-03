exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  onPrepare: function () {
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(5000);
    browser
      .manage()
      .window()
      .maximize();
  },

  capabilities: {
    'browserName': 'chrome'
  },

  suites: {
    mainpage: 'tests/main-spec.js',
    resultspage: 'tests/search-results-spec.js'
  },

  params: {
    searchTerm: 'Java',
    bookToSearch: 'Head First Java, 2nd Edition'
  },

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};