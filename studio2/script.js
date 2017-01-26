// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
    document.f.onsubmit = processForm;
    // document.f.onreset = clearForm;

    //define process function
    function processForm() {

        //store user name in a variable
        var userName = document.f.userName.value;
        var userColor = document.f.userColor.value;

        var myMsg = document.getElementById('myMsg');
        myMsg.innerHTML = 'Hi ' + userNum + ' ' + userObj;

        return false;
    }

    function clearForm(){

    }
});
