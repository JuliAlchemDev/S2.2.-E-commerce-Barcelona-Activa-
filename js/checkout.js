// Exercise 6
function validate(event) {
	event.preventDefault();
	var error = 0;
	var errorFields = [];
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
  
	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");
  
	// Validate fields entered by the user: name, phone, password, and email
	const isRequired = (field, errorMsg, regex) => {
	  if (field.value.length < 3) {
		errorFields.push(field.id);
		error++;
		field.classList.add("is-invalid");
		errorMsg.style.display = "block";
	  } else {
		errorMsg.textContent = "";
		field.classList.remove("is-invalid");
  
		if (regex && !regex.test(field.value)) {
		  errorFields.push(field.id);
		  error++;
		  field.classList.add("is-invalid");
		  errorMsg.style.display = "block";
  
		  if (field.id === "fName" || field.id === "fLastN") {
			errorMsg.innerHTML = "Only letters are allowed";
		  } else if (field.id === "fPhone") {
			errorMsg.innerHTML = "Digits only are allowed";
		  } else if (field.id === "fPassword") {
			errorMsg.innerHTML =
			  "Password must contain at least one letter and one digit";
		  } else if (field.id === "fEmail") {
			errorMsg.innerHTML = "Please enter a valid email";
		  }
		} else {
		  errorMsg.textContent = "";
		  field.classList.remove("is-invalid");
		  if (field.id === "fPassword") {
			console.log(
			  `${field.id.slice(1)}: ${"*".repeat(field.value.length)}`
			);
		  } else {
			console.log(`${field.id.slice(1)}: ${field.value}`);
		  }
		}
	  }
	};
  
	const regexNames = /^[A-Za-z\s]+$/;
	const regexPhone = /^[0-9]{9,15}$/;
	const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,15}$/;
	const regexEmail =
	  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
	isRequired(fName, errorName, regexNames);
	isRequired(fEmail, errorEmail, regexEmail);
	isRequired(fAddress, errorAddress);
  
	isRequired(fLastN, errorLastN, regexNames);
	isRequired(fPassword, errorPassword, regexPassword);
	isRequired(fPhone, errorPhone, regexPhone);
  
	if (error > 0) {
	  console.log("Error!");
	  console.log(
		"Error(s) occurred in the following field(s):",
		errorFields.join(", ")
	  );
	} else {
	  console.log("OK");
	}
  }
  