window.onload = function() {
	document.getElementById("contactForm").addEventListener("submit", validateForm);
};

function validateForm(event)
{
	var form = event.target;
	var valid = true;

	var firstname = form.elements["firstname"];
	var lastName = form.elements["lastname"];
	var email = form.elements["email"];
	var job = form.elements["job"];
	var comment = form.elements["comment"];
	var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

	if(!validateNameField(firstname.value)){
		firstname.style.border = "1px solid red" ;
		document.getElementById("firstnameError").style.display = "inline";
		valid = false;
	} else {
		firstname.style.border = "" ;
		document.getElementById("firstnameError").style.display = "none";
	}

	if(!validateNameField(lastname.value)){
		lastname.style.border = "1px solid red" ;
		document.getElementById("lastnameError").style.display = "inline";
		valid = false;
	} else {
		lastname.style.border = "" ;
		document.getElementById("lastnameError").style.display = "none";
	}

	if(!(email.value && emailRegex.test(email.value))){
		email.style.border = "1px solid red" ;
		document.getElementById("emailError").style.display = "inline";
		valid = false;
	} else {
		email.style.border = "" ;
		document.getElementById("emailError").style.display = "none";
	}

	if(!comment.value){
		comment.style.border = "1px solid red" ;
		document.getElementById("commentError").style.display = "inline";
		valid = false;
	} else {
		comment.style.border = "" ;
		document.getElementById("commentError").style.display = "none";
	}
	if(!valid)
		event.preventDefault();
}

function validateNameField(value)
{
	var noDigitPattern  =  /^[a-zA-Z]*$/;
	return value && noDigitPattern.test(value);
}