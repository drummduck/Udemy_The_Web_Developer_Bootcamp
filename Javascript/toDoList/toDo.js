var done = false;
var response = "";
var toDoList = [];

while(!done){
	response = prompt("What would you like to do?");
	if(response === "new"){
		var whatToAdd = prompt("What would you like to add?");
		if(!isEmpty(whatToAdd)){
			toDoList.push(whatToAdd);
		}
	} else if(response === "list"){
		alert(toDoList);
	} else if(response === "quit"){
		done = true;
	}
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}