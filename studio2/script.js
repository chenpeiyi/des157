// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
    document.f.onsubmit = processForm;
    // document.f.onreset = clearForm;

    //define process function
    function processForm() {

        //store user name in a variable
        var userNum = document.f.userNum.value;
        var userObj = document.f.userObj.value;
        var userProf = document.f.userProf.value;


        var myMsg = document.getElementById('myMsg');
        myMsg.innerHTML = 'Go to ' + userNum + ' percent of your class. ' + 'When in class, take good ' + userObj + ' and alway yell out to your professor: "I love "' + userProf;

        return false;
    }

    function clearForm(){

    }
});
