chrome.browserAction.onClicked.addListener(function(tab) { 
	chrome.tabs.executeScript({
		code: 'document.body.style.backgroundColor="red"'
	});
	chrome.extension.getBackgroundPage().console.log( "hi" );
	chrome.tabs.create({url:"popup.html"});
});