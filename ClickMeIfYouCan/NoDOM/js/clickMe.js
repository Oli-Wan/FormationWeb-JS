function goToGoogle(){
	window.location = "http://www.google.com";
}

function moveTheButton(button){
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