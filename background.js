chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.update(tab.id, {
		url: 'omnifocus:///add?name=' + encodeURIComponent(tab.title) + '&note=' + encodeURIComponent(tab.url)
	});
});
