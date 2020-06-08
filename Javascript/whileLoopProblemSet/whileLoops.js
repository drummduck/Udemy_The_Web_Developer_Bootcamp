var x = 0;

console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19!");
x = -10;
while(x < 20){
	console.log(x);
	x++;
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40!");
x = 10;
while(x < 41){
	if(x % 2 === 0){
		console.log(x);
	}
	x++;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333!");
x = 300;
while(x < 334){
	if(x % 2 === 1){
		console.log(x);
	}
	x++
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BEWEEN 5 AND 50!");
x = 5;
while(x < 51){
	if((x % 5 === 0) && (x % 3 == 0)){
		console.log(x);
	}
	x++;
}