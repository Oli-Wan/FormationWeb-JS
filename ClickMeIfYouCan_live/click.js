window.onload = function(){
	var button = document.getElementById("myButton");
	button.addEventListener("click", goToGoogle);
	button.addEventListener("mouseover", moveButton);
};

function goToGoogle(){
	window.location = "http://google.fr";	
}

function moveButton(event){
	var button = event.target;
	
	button.style.position = "absolute";
	var leftString = button.style.left;
	var xMax = window.innerWidth;

	var left = 0;
	if(leftString)
		left = parseInt(leftString);

	left += 70;

	if(left >= xMax-70)
		left = 0;

	button.style.left = left+"px";
}
