var areWeThere = false;
var answer = "";

while(!areWeThere){
	answer = prompt("Are we there yet?");
	if(answer.includes("yes")){
		alert("Yay! We made it!");
		areWeThere = true;
	}
}