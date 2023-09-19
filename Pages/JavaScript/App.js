var container = document.getElementById("container");

var row = document.createElement("row");
container.appendChild(row);
row.setAttribute("class", "row");
// empty col 1 left
var emptyCol1 = document.createElement("div");
row.appendChild(emptyCol1);
emptyCol1.setAttribute("class", "col");
// Card main col
var card_main = document.createElement("div");
row.appendChild(card_main);
card_main.setAttribute("class", "col-lg-6 card_main");
// student paragraph
var Studentp = document.createElement("p");
card_main.appendChild(Studentp);
Studentp.innerHTML = "Student Sign Up";
//
var card = document.createElement("div");
card_main.appendChild(card);
card.setAttribute("class", "card");
// span
var span = document.createElement("span");
card.appendChild(span);
span.setAttribute("class", "logo");
// logo image 
var logoImage = document.createElement("img");
span.appendChild(logoImage);
logoImage.setAttribute("src", "./images/ihunar.png");
logoImage.setAttribute("alt", "logo");
// physicalOnline
var physicalOnline = document.createElement("div");
card.appendChild(physicalOnline);
physicalOnline.setAttribute("class", "physicalOnline");

// physical button
var physical = document.createElement("button");
physicalOnline.appendChild(physical);
physical.innerHTML = "Physical"
// Online button
var Online = document.createElement("button");
physicalOnline.appendChild(Online);
Online.innerHTML = "Online";
// Apply paragraph
var applyP = document.createElement("p");
card.appendChild(applyP);
applyP.innerHTML = "Apply form here for physical classes.";

// name input
var nameInput = document.createElement("input");
card.appendChild(nameInput);
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Name");
// Father Name input
var FathernameInput = document.createElement("input");
card.appendChild(FathernameInput);
FathernameInput.setAttribute("type", "text");
FathernameInput.setAttribute("placeholder", "Father name");
// email input
var emailInput = document.createElement("input");
card.appendChild(emailInput);
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "Email");
// password input
var passwordInput = document.createElement("input");
card.appendChild(passwordInput);
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "password");
// CNIC input
var CNICInput = document.createElement("input");
card.appendChild(CNICInput);
CNICInput.setAttribute("type", "number");
CNICInput.setAttribute("placeholder", "CNICI Number");
// Mobile input
var MobileInput = document.createElement("input");
card.appendChild(MobileInput);
MobileInput.setAttribute("type", "number");
MobileInput.setAttribute("placeholder", "Mobile Number");
// Course input
var CourseInput = document.createElement("input");
card.appendChild(CourseInput);
CourseInput.setAttribute("type", "text");
CourseInput.setAttribute("placeholder", "Select Course");
// Qualification input
var QualificationInput = document.createElement("input");
card.appendChild(QualificationInput);
QualificationInput.setAttribute("type", "text");
QualificationInput.setAttribute("placeholder", "Select Qualification");
// Gender input
var GenderInput = document.createElement("input");
card.appendChild(GenderInput);
GenderInput.setAttribute("type", "text");
GenderInput.setAttribute("placeholder", "Select Gender");
// Photo input
var PhotoInput = document.createElement("input");
card.appendChild(PhotoInput);
PhotoInput.setAttribute("type", "text");
PhotoInput.setAttribute("placeholder", "Select Photo");
// message 
var message = document.createElement("p");
card.appendChild(message);
message.setAttribute("class", "message");
// message.innerHTML = "Please enter value";

// Upload Paragraph
var uploadPara = document.createElement("p");
card.appendChild(uploadPara);
uploadPara.innerHTML = "Upload your passport size photo with blue background";
// checkboxDiv
var checkboxDiv = document.createElement("div");
card.appendChild(checkboxDiv);
checkboxDiv.setAttribute("class", "checkboxDiv");
// checkbox input
var checkboxInput = document.createElement("input");
checkboxDiv.appendChild(checkboxInput);
checkboxInput.setAttribute("type", "checkbox");
// checkbox input span
var checkboxSpan = document.createElement("span");
checkboxDiv.appendChild(checkboxSpan);
checkboxSpan.innerHTML = "I have laptop for classes";
// Already_member
var Already_member = document.createElement("div");
card.appendChild(Already_member);
Already_member.setAttribute("class","Already_member");
// Already button
var AlreadyButton = document.createElement("button");
Already_member.appendChild(AlreadyButton);
AlreadyButton.setAttribute("class", "Already");
AlreadyButton.innerHTML = "Already a member?";
// Sign
var SignButton = document.createElement("button");
Already_member.appendChild(SignButton);
SignButton.setAttribute("class", "Sign");
SignButton.innerHTML = "Sign In";
// signUp div
var signUpDiv = document.createElement("div");
card.appendChild(signUpDiv);
signUpDiv.setAttribute("class", "signUp")
// signUp button
var signUp = document.createElement("button");
signUpDiv.appendChild(signUp);
signUp.innerHTML = "Sign Up";
// sign up Function
signUp.setAttribute("onclick", "signUp()");
function signUp(){
    if(nameInput.value === ""){
        message.innerHTML = "Name is required!";
        message.style.display = "block";
        message.style.color = "red";
        nameInput.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if(FathernameInput.value === ""){
        message.innerHTML = "Father Name required!";
        message.style.display = "block";
        message.style.color = "red";
        nameInput.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if(emailInput.value === ""){
        message.innerHTML = "email required!";
        message.style.display = "block";
        message.style.color = "red";
        nameInput.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if(passwordInput.value === ""){
        message.innerHTML = "password required!";
        message.style.display = "block";
        message.style.color = "red";
        nameInput.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if(CNICInput.value === ""){
        message.innerHTML = "CNIC Number is required!";
        message.style.display = "block";
        message.style.color = "red";
        nameInput.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if(MobileInput.value === ""){
        message.innerHTML = "Mobile Number is required!";
        message.style.display = "block";
        message.style.color = "red";
        nameInput.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if(CourseInput.value === ""){
        message.innerHTML = "Course is required!";
        message.style.display = "block";
        message.style.color = "red";
        nameInput.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if(QualificationInput.value === ""){
        message.innerHTML = "Qualification is required!";
        message.style.display = "block";
        message.style.color = "red";
        nameInput.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if(GenderInput.value === ""){
        message.innerHTML = "Gender is required!";
        message.style.display = "block";
        message.style.color = "red";
        nameInput.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if(PhotoInput.value === ""){
        message.innerHTML = "Photo is required!";
        message.style.display = "block";
        message.style.color = "red";
        nameInput.focus();
        setTimeout(() =>{
            message.style.display = "none";
        }, 1000)
    }else{
        message.style.display = "block";
        message.style.color = "green";
        message.innerHTML = "Succes";
        setTimeout(() =>{
            message.style.display = "none";
            nameInput.value = "";
            FathernameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
            CNICInput.value = "";
            MobileInput.value = "";
            CourseInput.value = "";
            QualificationInput.value = "";
            GenderInput.value = "";
            PhotoInput.value = " ";
        }, 1000)

        // 
        var DataObject = {
            name:  nameInput.value,
            Fathername: FathernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            CNIC: CNICInput.value,
            Mobile: MobileInput.value,
            Course: CourseInput.value,
            Qualification: QualificationInput.value,
            Gender:GenderInput.value,
            Photo: PhotoInput.value,
        }
        console.log(DataObject);
        // console.log(nameInput.value);
        // console.log(FathernameInput.value);
        // console.log(emailInput.value);
        // console.log(passwordInput.value);
        // console.log(CNICInput.value);
        // console.log(MobileInput.value);
        // console.log(CourseInput.value);
        // console.log(QualificationInput.value);
        // console.log(GenderInput.value);
        // console.log(PhotoInput.value);
    }
}
    // empty col 2 right
var emptyCol2 = document.createElement("div");
row.appendChild(emptyCol2);
emptyCol2.setAttribute("class", "col");