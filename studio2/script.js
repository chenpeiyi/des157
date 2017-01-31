// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
    document.f.onsubmit = processForm;
    document.f.onreset = clearForm;

    //define process function, called when pressed submit button
    function processForm() {

        //store user's values in variables
        var userNum = document.f.userNum.value;
        var userProf = document.f.userProf.value;
        var userAnimal = document.f.userAnimal.value;
        var userFood = document.f.userFood.value;
        var userCall = document.f.userCall.value;
        var userBFF = document.f.userBFF.value;

        // error detection, make sure nothing is blank
        if (userNum == "" || userProf == "" || userAnimal == "" || userFood == "" || userCall == "" || userBFF == "") {
            alert('Hey! Please do not leave anything blank!');
        }

        // if it passed error detection, write my message in html
        else {
            var myMsg = document.getElementById('myMsg');
            myMsg.innerHTML = '<ol><li>Go to ' + userNum + ' percent of your class. </li>' +

                '<li>When in class, always catch people’s attention by yelling out to your professor: “I love ' + userProf + '."</li>' +

                '<li>Get to know all your neighbors, including the cutest ' + userAnimal + ' on your way to class.</li>' +

                '<li>Go to your professor’s office hours! Make sure you ask them for ' + userFood + '.</li>' +

                '<li>Miss your parents? Call them ' + userCall + ' times a day and say "I love you" to them.' +

                '<li>Too Asian to say "I love you"? Ask ' + userBFF + ' to say it for you. Or talk to them about your stress and homesick-ness. They are always there for you! &#10084 </li>';

            //show it by referencing to the css
            myMsg.className = 'show';
        }

        return false;
    }

    // define clearForm function, called when pressed reset button
    function clearForm() {
        myMsg.className = 'hide';
    }

});
