//Corey Hobbs
//01/18/12
//Project 3
//Which Skittle is my favorite//

var say = function(message) { console.log(message); };
var skittle = "skittle";
var color = "color";
var flavor = "flavor";
var difFlav = 5;
say("I wanted to find out which " + color + " of " + skittle + " is my favorite " + flavor + ".");
say("So I bought a bag and divided the " + difFlav + " different flavors.");
var colors = ["yellow", "green", "orange", "red", "purple"];
var flavors = ["lemon", "lime", "orange", "cherry", "grape"];
for (var i=0,j=colors.length;i<j;i++){
	console.log("The", colors[i],skittle, "is", flavors[i], flavor);
};
say("I then proceeded to try each " + flavor + " of " + skittle + ".");
var numleft = 5;
while (numleft > 0) {
	say("I have " + numleft + " flavors left to try.");
	numleft--;
};
say("I have tried all of the flavors");

var flavorChoices = function(){
var i;
var colorChoices = new Array();
colorChoices[0] = "yellow";
colorChoices[1] = "green";
colorChoices[2] = "orange";
colorChoices[3] = "red";
colorChoices[4] = "purple";
for (i=0;i<colorChoices.length;i++){
say("I could have chosen " + colorChoices[i])
}

};
flavorChoices();


say("I decided that lemon was my least favorite.");
var l = "I don't like lemon";
if (l = true){
	
};

if (l = true){
	say("I must like a different " + flavor)
}
else{
	say("Lemon is my favorite" + flavor)
};

function skittlesLeft(a,b){
return a-b;
};
say("That left me with " + skittlesLeft(5,1) + " skittles left to choose from.");


var skittleOne = {
	color: "purple",
	flavor: "grape",
	taste: "good"
};
var key = "flavor";
console.log("The " + skittleOne[key] + " tastes " + skittleOne.taste + ".");

var skittleTwo = {
	color: "orange",
	flavor: "orange", 
	taste: "good"
};
var key = "flavor";
console.log("The " + skittleTwo[key] + " tastes " + skittleTwo.taste + ".");

var skittleThree = {
	color: "green",
	flavor: "lime",
	taste: "bad"
};
var key = "flavor";
console.log("The " + skittleThree[key] + " tastes " + skittleThree.taste + ".");

var skittleFour = {
	color: "red",
	flavor: "cherry", 
	taste: "bad"
};
var key = "flavor";
console.log("The " + skittleThree[key] + " tastes " + skittleFour.taste + ".");

say("I eventually narrowed it down between " + skittlesLeft(5,3) + " flavors. The orange and the grape.");
say("I finally decided my favorite flavor is grape.");

function myfunction(txt){
alert(txt);
};








