/**
 * 
 */

function aktuelleZeit(){
	
	var date = new Date();
	
	var month = date.getMonth()+1;
	var day = date.getDate();
	var year = date.getFullYear();
	var hour = date.getHours();
	var minutes = date.getMinutes();

	document.write(day + '.' + month + '.' + year + ' ' + hour + ':' + minutes);
	
	
}