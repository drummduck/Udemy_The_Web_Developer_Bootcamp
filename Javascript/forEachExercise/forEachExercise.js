var arr = prompt("Please enter a list of numbers separated by semicolons!").split(",")

printDivisibleByThree(arr)

function printDivisibleByThree(nums){
	if(!Array.isArray(arr)){
		alert("You must enter an array!")
		return
	} 
	var returnArray = new Array()

	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 3 === 0){
			returnArray.push(arr[i])
		}
	}

	alert("Values divisible by 3: " + returnArray.toString())
}