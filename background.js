chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        // Run script to try to get user selected text
        code: 'window.getSelection().toString()'
    }, function(selection) {
        // Format selection if it’s not null
        selection = selection[0] ? '\n\n' + selection[0] : '';

        chrome.tabs.update(tab.id, {
            url: 'omnifocus://'
        }, function() {
            setTimeout(function() {
                chrome.tabs.update(tab.id, {
                    url:
                        'omnifocus:///add?name=' + encodeURIComponent(tab.title) +
                        '&note=' + encodeURIComponent(tab.url + selection)
                });
            }, 300);
        });
    });
});
