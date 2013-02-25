window.onload = function() {
	document.getElementById("clickButton").addEventListener("click", goToGoogle);
	document.getElementById("clickButton").addEventListener("mouseover", moveTheButton);
};

function goToGoogle(){
	window.location = "http://www.google.com";
}

function moveTheButton(event){
	
	var button = event.target;

	button.style.position = "absolute";
	
	var left = button.style.left;
	var xMax = window.innerWidth;
	var x = 0;

	if(left)
		x = parseInt(left);

	x += 150;

	if(x >= xMax-150)
		x = 0;

	button.style.left = x+"px";
}