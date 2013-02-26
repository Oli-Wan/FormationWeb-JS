window.onload = function() {
	document.getElementById("magicNumberForm").addEventListener("submit", calculateMagicNumberEvent);
	document.getElementById("loveForm").addEventListener("submit", loveMeter);
};

function calculateMagicNumberEvent(event) {
	event.preventDefault();

	var nameField = event.target.elements["name"];

	if(validateNameField(nameField)) {
		var magicNumber = calculateMagicNumber(nameField.value);
		document.getElementById("magicNumberResults").innerHTML = "Votre num&eacute;ro magique est : "+magicNumber+". Bravo!";
	}
}

function loveMeter(event) {
	event.preventDefault();

	var form = event.target;
	var name1Field = form.elements["name1"];
	var name2Field = form.elements["name2"];
	var canCalculate = true;
	
	canCalculate = validateNameField(name1Field) && canCalculate;
	canCalculate = validateNameField(name2Field) && canCalculate;

	if(!canCalculate)
		return;

	var name1 = name1Field.value;
	var name2 = name2Field.value;

	var result = "La compatibilit&eacute; entre "+ name1+" et "+name2+" est ";

	var magicNumber1 = calculateMagicNumber(name1);
	var magicNumber2 = calculateMagicNumber(name2);

	var compatibility = Math.abs(magicNumber1 - magicNumber2);
	
	if(compatibility < 3)
		result += "&eacute;lev&eacute;e!";
	else if (compatibility <= 6)
		result += "moyenne.";
	else
		result +=  "faible...";

	document.getElementById("loveMeterResults").innerHTML = result;
}

function calculateMagicNumber(value) {
	var magicNumber = 0;
	for(var i = 1; i <= value.length; i++){
		var letterNumber = value.charCodeAt(i-1);
		var productString = Math.pow(letterNumber, i).toString();

		magicNumber += reduceNumberToDigit(productString);
	}
	return reduceNumberToDigit(magicNumber.toString());
}

function reduceNumberToDigit(numberString) {
	while(numberString.length > 1){
		var number = 0;
		for(var j = 0; j < numberString.length; j++)
			number += parseInt(numberString[j]); 
		
		numberString = number.toString();
	}

	return parseInt(numberString);
}

function validateNameField(field) {

	var noDigitPattern =  /^[a-zA-Z]*$/;
	var errorMsg = document.
		getElementById(field.getAttribute("id")+"Error");
	var valid = true;

	if(field.value && noDigitPattern.test(field.value)) {
		field.style.border = "" ;
		errorMsg.style.display = "none";
	} else {
		field.style.border = "1px solid red" ;
		errorMsg.style.display = "inline";
		valid = false;
	}
	return valid;
}