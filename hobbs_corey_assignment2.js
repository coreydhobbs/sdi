//Corey Hobbs
//01/11/12
//Deliverable 2
//Which Skittle is my favorite//

var skittle = "skittle";
var color = "color";
var flavor = "flavor";
var difFlav = 5;
console.log("I wanted to find out which", color, "of", skittle, "is my favorite", flavor);
console.log("So I bought a bag and divided the", difFlav, "different flavors");
var colors = ["yellow", "green", "orange", "red", "purple"];
var flavors = ["lemon", "lime", "orange", "cherry", "grape"];
for (var i=0,j=colors.length;i<j;i++){
	console.log("The", colors[i],skittle, "is", flavors[i], flavor);
};
console.log("I then proceeded to try each", flavor, "of", skittle);
var numleft = 5;
while (numleft > 0) {
	console.log("I have", numleft,  "flavors left to try");
	numleft--;
};
console.log("I have tried all of the flavors");

var i;
var colorChoices = new Array();
colorChoices[0] = "yellow";
colorChoices[1] = "green";
colorChoices[2] = "orange";
colorChoices[3] = "red";
colorChoices[4] = "purple";
for (i=0;i<colorChoices.length;i++){
console.log("I could have chosen", colorChoices[i])
};

console.log("I decided that lemon was my least favorite.");
var l = "I don't like lemon";
if (l = true){
	
};

if (l = true){
	console.log("I must like a different", flavor)
}
else{
	console.log("Lemon is my favorite", flavor)
};

function skittlesLeft(a,b){
return a-b;
};
console.log("That left me with", skittlesLeft(5,1), "skittles left to choose from.");
console.log("I eventually narrowed it down between", skittlesLeft(5,3), "flavors, orange and grape.");
console.log("I finally decided my favorite flavor is grape.");

function myfunction(txt){
alert(txt);
};








