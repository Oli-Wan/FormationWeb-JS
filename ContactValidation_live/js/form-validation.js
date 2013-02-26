function validateForm(form) {
	var valid = true;
	var noDigitPattern = /^[a-zA-Z]*$/;
	var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

	valid = isValidInput(form.elements["firstname"], noDigitPattern) 
			&& valid;
	valid = isValidInput(form.elements["lastname"], noDigitPattern) 
			&& valid;
	valid = isValidInput(form.elements["email"], emailRegex) 
			&& valid;		
	valid = isValidInput(form.elements["comment"]) 
			&& valid;		
 
	return valid;
}

function isValidInput(input, regexp){
	var errorMsg = document.
		getElementById(input.getAttribute("id")+"Error");
	
	var valid = true;
	if(regexp !== undefined){
		valid = regexp.test(input.value)
	}

	if(input.value && valid){
		errorMsg.style.display = "none";
		input.style.border = "";
	} else {
		valid = false;
		errorMsg.style.display = "inline";
		input.style.border = "1px solid red";
	}

	return valid;
}