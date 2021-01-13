function printReverse(arr){
	if(arr == null || !Array.isArray(arr)){
		console.log("The input is not an array")
		return
	}

	if(arr.length > 0){
		var tempArr = new Array()
		for(var i = 0; i < arr.length; i++){
			tempArr.unshift(arr[i])
		}
		return tempArr
	} else {
		console.log("Array was empty")
		return false
	}
}

function isUniform(arr){
	if(arr == null || !Array.isArray(arr)){
		console.log("The input is not an array")
		return
	}

	if(arr.length > 0){
		var firstItem = arr[0]
		for(var i = 1; i < arr.length; i++){
			if(arr[i] !== firstItem){
				return false
			}
		}
		return true
	} else {
		console.log("Array was empty")
		return
	}
}

function sumArray(arr){

	if(arr == null || !Array.isArray(arr)){
		console.log("The input is not an array")
		return
	}

	if(arr.length > 0){
		var total = 0;
		arr.forEach(function(num){
			if(isNaN(num)){
				console.log("One of the values was not a number")
				return
			} 

			total += num
		})

		return total
	} else{
		console.log("Array was empty")
		return
	}
}

function max(arr){
	if(arr == null || !Array.isArray(arr)){
		console.log("The input is not an array")
		return
	}

	if(arr.length > 0){

		var maxNum = 0;

		arr.forEach(function(num){
			if(isNaN(num)){
				console.log("One of the values was not a number")
				return
			} 

			if (num > maxNum){
				maxNum = num;
			}
		})

		return maxNum
	} else{
		console.log("Array was empty")
		return
	}
}