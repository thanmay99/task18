document.querySelector("#validate").addEventListener("click", validate);
function validate() {
    var contact = document.querySelector("#contact").value;
    var name = document.querySelector("#name").value;
    /* var email=document.querySelector("#email").value;*/
    var age = document.querySelector("#age").value;
    validatecontact(contact);
    /*validateemail(email);*/
    validatename(name);
    validateage(age);
    if (validatecontact(contact) && validatename(name) && validateage(age)){
        alert("form is submitted");
        document.querySelector("#contact").value='';
        document.querySelector("#name").value='';
        document.querySelector("#age").value='';
    }
}
function validatecontact(contact) {
    var formvalid = false;
    if (contact.trim() === '') {
        document.querySelector("#contact-error").innerHTML = "this is required*";
        formvalid = false;
    }
    else if (contact.trim().length != 10) {
        document.querySelector("#contact-error").innerHTML = "this is invalid";
        formvalid = false;
    }
    else {
        formvalid = true;
    }
}
/*function validateemail(email){
    var formvalid=false;
    if(contact.trim()===''){
        document.querySelector("#email-error").innerHTML="this is required*";
        formvalid=false;
    }
    else if(contact.trim().length !=10){
        document.querySelector("#email-error").innerHTML="this is invalid";
        formvalid=false;
    }
    else{
        formvalid=true;
    }
    return formvalid;
}*/
function validatename(name) {
    var formvalid = false;
    if (name.trim() === '') {
        document.querySelector("#name-error").innerHTML = "this is required*";
        formvalid = false;
    }
    else if (name.trim().length < 3) {
        document.querySelector("#name-error").innerHTML = "this is invalid";
        formvalid = false;
    }
    else {
        formvalid = true;
    }
    return formvalid;
}
function validateage(age) {
    var formvalid = false;
    if (age.trim() === '') {
        document.querySelector("#age-error").innerHTML = "this is required*";
        formvalid = false;
    }
    else if (age.trim().lengthz > 3) {
        document.querySelector("#age-error").innerHTML = "this is invalid";
        formvalid = false;
    }
    else {
        formvalid = true;
    }
    return formvalid;
}
