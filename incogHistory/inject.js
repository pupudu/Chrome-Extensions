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

isIncog();

function isIncog(){
	var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
	if (!fs) {
	  console.log("check failed?");
	} else {
	  fs(window.TEMPORARY,
		 100,
		 console.log.bind(console, "not in incognito mode"),
		 function(){
			jsonUrl[time] = href;
			console.log("incognito");
			chrome.storage.sync.set(jsonUrl, function() {
				console.log('Settings saved');
			});
			chrome.storage.sync.get(function(d){
				console.log(d);
			});
		 });
	}
}