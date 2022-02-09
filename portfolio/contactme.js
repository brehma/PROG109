<form action = "thankyou.html" onsubmit = "return validateForm();">
  
  function validateForm(){
    //First Name
    var validFirstname=false;
    var firstname = document.getElementById("firstname").value;
    if (firstname==="null" || firstname==="" || firstname.length > 20)
        errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
    else
       validFirstname = true;
       document.getElementById("errorMessages").innerHTML = errorMessages;
    return (validFirstname);
  
    //Last Name
    var validLastname=false;
    var validLastname = document.getElementById("lastname").value;
    if (lastname==="null" || lastname==="" || lastname.length > 50)
        errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
    else
       validFirstname = true;
       document.getElementById("errorMessages").innerHTML = errorMessages;
       return (validFirstname && validLastname);		
 				 
     //Email
     var userEmail = document.getElementById("email").value;
     var atpos = userEmail.indexOf("@");
     var dotpos = userEmail.lastIndexOf(".");
     if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        errorMessages += "<p>Invalid Email</p>";}
     else
       validEmail = true;
       document.getElementById("errorMessages").innerHTML = errorMessages;
        return (validEmail);  
	
     //Phone Number
     var phone = document.getElementById("phone").value;
	if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
	   errorMessages += "<p>Invalid Phone Number</p>";}
	else
	validPhone = true;
        document.getElementById("errorMessages").innerHTML = errorMessages;
        return (validPhone);  
	  
	//You can also do pattern matching by using the match() method from the string object
	var numbers=/^[0-9]+$/;
	if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
	//...
	else
	//...
  }
</form>
