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
// input.style.color = "red"
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


// select course 
var selectCourse = document.createElement("select");
card.appendChild(selectCourse);
// course option
var selecteOption = document.createElement("option");
selectCourse.appendChild(selecteOption);
selecteOption.disabled = true;
selecteOption.selected = true;
selecteOption.innerHTML = "select Course";
// web
var WebOption = document.createElement("option");
selectCourse.appendChild(WebOption);
WebOption.innerHTML = "Web Development & Web Designing";
// Graphic
var GraphicOption = document.createElement("option");
selectCourse.appendChild(GraphicOption);
GraphicOption.innerHTML = "Graphic Design";
// Wordpress
var WordpressOption = document.createElement("option");
selectCourse.appendChild(WordpressOption);
WordpressOption.innerHTML = "Wordpress";
// Mobile App
var MobileAppOption = document.createElement("option");
selectCourse.appendChild(MobileAppOption);
MobileAppOption.innerHTML = "Mobile App Development";
// Freelancing
var FreelancingOption = document.createElement("option");
selectCourse.appendChild(GraphicOption);
FreelancingOption.innerHTML = "Freelancing";

// Qualification select
var selectQualification = document.createElement("select");
card.appendChild(selectQualification);
// optionQualification option
var optionQualification = document.createElement("option");
selectQualification.appendChild(optionQualification);
optionQualification.disabled = true;
optionQualification.selected = true;
optionQualification.innerHTML = "Select Qualification";
// optionMatriculation
var optionMatriculation = document.createElement("option");
selectQualification.appendChild(optionMatriculation);
optionMatriculation.innerHTML = "Matriculation"
// optionIntermediate
var optionIntermediate = document.createElement("select");
selectQualification.appendChild(optionIntermediate);
optionIntermediate.innerHTML = "Intermediate";
// Graduate 
var optionGraduate = document.createElement("option");
selectQualification.appendChild(optionGraduate);
optionGraduate.innerHTML = "Graduate";

// Gender Select
var selectGender = document.createElement("select");
card.appendChild(selectGender);
// Select Gender
var selectGenderD = document.createElement("option");
selectGender.appendChild(selectGenderD);
selectGenderD.innerHTML = "select Gender";
selectGenderD.disabled = true;
selectGenderD.selected = true;
// Male 
var male = document.createElement("option");
selectGender.appendChild(male);
male.innerHTML = "Male";
// feMale 
var feMale = document.createElement("option");
selectGender.appendChild(feMale);
feMale.innerHTML = "Female"


// // Course input
// var CourseInput = document.createElement("input");
// card.appendChild(CourseInput);
// CourseInput.setAttribute("type", "text");
// CourseInput.setAttribute("placeholder", "Select Course");
// Qualification input
// var QualificationInput = document.createElement("input");
// card.appendChild(QualificationInput);
// QualificationInput.setAttribute("type", "text");
// QualificationInput.setAttribute("placeholder", "Select Qualification");
// // Gender input
// var GenderInput = document.createElement("input");
// card.appendChild(GenderInput);
// GenderInput.setAttribute("type", "text");
// GenderInput.setAttribute("placeholder", "Select Gender");
// Photo input
var PhotoInput = document.createElement("input");
card.appendChild(PhotoInput);
PhotoInput.setAttribute("type", "text");
// PhotoInput.setAttribute("type", "file");
PhotoInput.setAttribute("placeholder", "Select Photo");
// message 
var message = document.createElement("p");
card.appendChild(message);
message.setAttribute("class", "message");
// message.innerHTML = "Please enter value";

// Upload Paragraph
var uploadPara = document.createElement("p");
card.appendChild(uploadPara);
uploadPara.setAttribute("class", "uploadPara")
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
signUp.setAttribute("onclick", "signup()");
var DataObject = [];
function signup(){
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
    }
    // else if(CourseInput.value === ""){
    //     message.innerHTML = "Course is required!";
    //     message.style.display = "block";
    //     message.style.color = "red";
    //     nameInput.focus();
    //     setTimeout(()=>{
    //         message.style.display = "none";
    //     }, 1000)
    // }
    // else if(QualificationInput.value === ""){
    //     message.innerHTML = "Qualification is required!";
    //     message.style.display = "block";
    //     message.style.color = "red";
    //     nameInput.focus();
    //     setTimeout(()=>{
    //         message.style.display = "none";
    //     }, 1000)
    // }
    // else if(GenderInput.value === ""){
    //     message.innerHTML = "Gender is required!";
    //     message.style.display = "block";
    //     message.style.color = "red";
    //     nameInput.focus();
    //     setTimeout(()=>{
    //         message.style.display = "none";
    //     }, 1000)
    // }
    else if(PhotoInput.value === ""){
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
        message.innerHTML = "Data is submitted uccesfully ";
        setTimeout(() =>{
            message.style.display = "none";
            nameInput.value = "";
            FathernameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
            CNICInput.value = "";
            MobileInput.value = "";
            // CourseInput.value = "";
            // QualificationInput.value = "";
            // GenderInput.value = "";
            PhotoInput.value = " ";
        }, 1000)
        DataObject = {
            name:  nameInput.value,
            Fathername: FathernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            CNIC: CNICInput.value,
            Mobile: MobileInput.value,
            // Course: CourseInput.value,
            // Qualification: QualificationInput.value,
            // Gender:GenderInput.value,
            Photo: PhotoInput.value,
        }
    }
}
// Sign In Button
SignButton.setAttribute("onclick", "signin()");
function signin(){
    console.log("Data Object", DataObject);
}


// empty col 2 right
var emptyCol2 = document.createElement("div");
row.appendChild(emptyCol2);
emptyCol2.setAttribute("class", "col");