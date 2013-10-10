

/** Start Document */
$(document).ready(function(){

// var data = { 
// 	"cols": [
// 		"username",
// 		"fullname"
// 	],
// 	"data": [
// 		[
// 			"ridiculus",
// 			"Acton Williamson",
// 			"Europe",
// 			"Zerg",
// 			40,
// 			234
// 		],
// 		[
// 			"purus,",
// 			"Felix Bennett",
// 			"Europe",
// 			"Zerg",
// 			152,
// 			380
// 		]
// 	]
// }

// console.log("raw data:", data)

// var stringData = JSON.stringify(data)
// console.log("data displayed as ONE string:", stringData)

// localStorage.setItem('data', JSON.stringify(data));

// var retrievedObject = localStorage.getItem('data');
// console.log("retrievedObject. Same as string data.", retrievedObject)

// var parsedJson = JSON.parse(retrievedObject) 

// console.log("parsedJson. Returned to object:", parsedJson)


// Victim Example
var getVictimInfo = function() {
	var victim = {};
	victim.names = prompt("Please enter your name:");
 	return victim;
};


var victimLocalStorage = getVictimInfo();
console.log("victimLocalStorage. Raw Data in object form", victimLocalStorage)

var stringVictimData = JSON.stringify(victimLocalStorage)
console.log("data displayed as ONE string:", stringVictimData)

localStorage.setItem('victimLocalStorage', JSON.stringify(victimLocalStorage));

var retrievedVictimObject = localStorage.getItem('victimLocalStorage');
console.log("retrievedObject. Same as string data.", retrievedVictimObject)

var parsedJsonVictim = JSON.parse(retrievedVictimObject) 

console.log("parsedJson. Returned to object:", parsedJsonVictim)


});





