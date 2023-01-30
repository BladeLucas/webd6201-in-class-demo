var welcomeLabel = document.getElementById("welcome");
var displayEvent = document.getElementById("displayEvent");

var userDisplay = document.getElementById("userDisplay");
var passDisplay = document.getElementById("passDisplay");

// welcomeLabel.addEventListener("dblclick", function () {
//     console.log("Event: dblclick");
//     displayEvent.textContent = "Event: dblclick";
// });
// welcomeLabel.addEventListener("mouseover", function () {
//     console.log("Event: mouseover");
//     displayEvent.textContent = "Event: mouseover";
// });
// welcomeLabel.addEventListener("mouseout", function () {
//     console.log("Event: mouseout");
//     displayEvent.textContent = "Event: mouseout";
// });

function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["password"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else {
        console.log(`Username: ${ x } \n Password: ${ y }`)
        userDisplay.textContent = x;
        passDisplay.textContent = y;
        return false;
    }
}

function validateContactForm (){
    let firstName = document.forms["contactForm"]["firstName"].value;
    let lastName = document.forms["contactForm"]["lastName"].value;
    let phoneNumber = document.forms["contactForm"]["phoneNumber"].value;
    let emailAddress = document.forms["contactForm"]["emailAddress"].value;
    let message = document.forms["contactForm"]["message"].value;

    if (firstName == "" || lastName == "") {
        alert("Please enter your full name (first and last name)");
        return false;
    } else if (phoneNumber == "") {
        alert("Please enter your phone number");
        return false;
    } else if (emailAddress == "") {
        alert("Please enter your email address");
        return false;
    } else if (message == "") {
        alert("Please enter a short message");
        return false;
    } else {
        console.log(`First Name: ${ firstName } \nLast Name: ${ lastName } \nPhone Number: ${ phoneNumber } \nEmail: ${ emailAddress } \nMessage: ${ message }`)
        return false;
    }
}