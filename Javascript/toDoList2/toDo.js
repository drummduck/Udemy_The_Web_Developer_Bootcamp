var list = new Array()
var isDone = false

while(!isDone){
	var input = prompt("What would you like to do?")
	if(input === "new"){
		var whatToAdd = prompt("What would you like to add?")
		list.unshift(whatToAdd)
		console.log(whatToAdd + " added to list")
	} else if(input === "list"){
		if(list.length > 0){
			var outputList = "***************\n"
			list.forEach(function(item, index){
				outputList += (index + ": " + item + "\n")
			})
			outputList += "***************"
			console.log(outputList);
		} else{
			console.log("List is empty");
		}
	} else if(input === "delete"){
		if(list.length > 0){
			var indexToDelete = prompt("Enter an index of item to delete")
			if(indexToDelete >= 0 && indexToDelete < list.length){
				list.splice(indexToDelete,1)
				console.log("Todo Removed")
			} else{
				console.log("Index out of bounds")
			}
		} else{
			console.log("Nothing to remove")
		}
	} else if(input === "quit"){
		console.log("Program ended!")
		isDone = true;
	} else {
		console.log("Not a valid command!")
	}
}