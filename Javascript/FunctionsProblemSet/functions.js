function isEven(num){
	if(num % 2 === 0) return true;
	else return false;
}

function factorial(num){
	if(num === 0 || num === 1){
		return 1;
	}

	returnVal = num;
	while(num > 1){
		returnVal = returnVal * --num;
	}
	return returnVal;
}

function kebabToSnake(kebab){
	kebab = kebab.replace("-","_");
	return kebab;
}