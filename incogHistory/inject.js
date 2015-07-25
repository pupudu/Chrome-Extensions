var href = window.location.href;
/*document.addEventListener('DOMContentLoaded', function() {
	console.log("Inside doc evt listner");
	chrome.tabs.getSelected(tab.id, function(tab) {
		console.log(tab.url);
	});
},false);*/

//chrome.storage.sync.clear(function(){});

var date = new Date();
var time = date.getTime();

var jsonUrl = {};
jsonUrl[time] = href;

chrome.storage.sync.set(jsonUrl, function() {
	console.log('Settings saved');
});

chrome.storage.sync.get(function(d){
	console.log(d);
});

