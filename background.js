chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        // run script to try to get user selected text
        code: "window.getSelection().toString()"
    },function(selection) {
        // format selection if it is not null
        selection = selection[0] ? "\n" + selection[0]: "";

        chrome.tabs.update(tab.id, {
            url: 'omnifocus://'
        },function() {
            setTimeout(function() {
                chrome.tabs.update(tab.id, {
                    url: 'omnifocus:///add?name=' + encodeURIComponent(tab.title) + '&note=' + encodeURIComponent(tab.url+selection)
                });
            },300);
        });
    });

});