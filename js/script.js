

/** Start Document */
$(document).ready(function(){
	

// /**String Version of data. Pull String from Script.js*/
// var stringData = JSON.stringify(dataObject())
// console.log("data displayed as ONE string:", stringData)

// /**Place data in local storage*/
// localStorage.setItem('data', JSON.stringify(dataObject()));

// * Retreive data from local storage */
// var retrievedObject = localStorage.getItem('data');
// console.log("retrievedObject. Same as string data.", retrievedObject)

// /** Return Retreived data to object form*/
// var parsedJson = JSON.parse(retrievedObject) 

// console.log("parsedJson. Returned to object:", parsedJson)

//////////////////////////////////////////////////////////////

var tHead = $('.table-head')
var tBody = $('.table-body')
var th = $('th')
var tr = $('tr')
var td = $('td')


var colHeads = dataObject()["cols"];
var colBody = dataObject()["data"];

console.log("column headings:", colHeads);
console.log("column data:", colBody);
//colHeads and colBody is the same as colHeadsParsed and colBodyParsed
// var colHeadsParsed = parsedJson["cols"] 
// var colBodyParsed = parsedJson["data"] 

// console.log("column headings:", colHeadsParsed)
// console.log("column data:", colBodyParsed)


for (i=0; i<colHeads.length; i++){
	tr.append('<th>'+colHeads[i])
	console.log("heading:", colHeads[i])
}

for (i=0; i<colBody.length; i++){
	var newRow = $('<tr>')
	tBody.append(newRow)
	
	console.log("body:", colBody[i])
	// tBody.append('<td>' + colBody[i] +"<td>")
	for (var j = 0; j < 6; j++) {
		console.log("second-loop:",colBody[i][j])
 		newRow.append('<td>'+colBody[i][j])
	};
}
// _.each($('.table-body'),function rowLooper(){


// })

// / _.each(dataHubHead, function(data){
// // 		console.log(data)
// 		th.append('<td>'+data+'</td>')
		
// });

/* Creates correct around of rows, not columns
for (i=0; i<colBody.length; i++){
	tBody.append('<tr><td>' + colBody[i]+"</td>")
	console.log("body:", colBody[i])
}
*/

// colHeadsOutput = td_.each(colHeads, function(head){
// 	$(this).append(head)
// 	// console.log(head)
	
// });

// dataHubHead = []
// console.log("dataHub",dataHubHead)
// colBodyOutput = _.each(colHeads, function(data){
// 	console.log(data)
// 	// dataHub.push(data)
	
// 		dataHubHead.push(data)
	
// });

// console.log("dataHubPost",dataHubHead)

// _.each(dataHubHead, function(data){
// 		console.log(data)
// 		th.append('<td>'+data+'</td>')
		
// });


// dataHubBody = []
// console.log("dataHub",dataHubBody)
// colBodyOutput = _.each(colBody, function(data){
// 	console.log(data)
// 	// dataHub.push(data)
// 	tBody.append('<tr><td>'+data+'</td></tr>')
// 	// _.each(data, function(subdata){
// 	// 	console.log(subdata)
// 	// 	dataHubBody.push(subdata)
		
// 	// });
	
// });

// console.log("dataHubPost",dataHubBody)

// _.each(dataHubBody, function(data){
// 		console.log(data)
// 		tBody.append('<tr><td>'+data+'</td></tr>')
		
// 	});


// var brian = {
// 	"gender": "man",
// 	"age": 24,
// 	"location": "boulder, co",

// }
// var allan = [1,2,3,3,4,5]
// eachAllan = _.each(allan, function(name){
// 	console.log("what is yor" +name)
// });
// eachBrian = _.each(brian, function(name){
// 	console.log("what is yor" +name)

// });


// .each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
// });


// $.each(dataObject(), function(i, reservation) {
//   var tr = $('<tr>');
//   $.each(props, function(i, prop) {
//     $('<td>').html(reservation[prop]).appendTo(tr);  
//   });
//   tbody.append(tr);
// });

});





