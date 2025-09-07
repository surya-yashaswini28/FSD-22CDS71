let formEl = document.getElementById("form");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let dobEl = document.getElementById("dob");
let courseId = document.getElementById("course");
let buttonEl = document.getElementById("button");
// let nameErr = document.getElementById("nameError");
// let emailErr = document.getElementById("emailError");
// let dobErr = document.getElementById("dobError");
// let courseErr = document.getElementById("courseError");
 buttonEl.addEventListener("click",function(event){
            event.preventDefault();
            console.log("Submit is clickeddd");
            if (validateForm()){
                console.log("formm is submitted");
            }else{
                console.log("form not submitted");
            }
        });
        function validateForm(){
            let valid = true;
            if(nameEl.value.trim() === ""){
                alert("enter name");
                valid = false;
            }
            if(emailEl.value.trim() === ""){
                alert("enter email");
                valid = false;
            }
            if(dobEl.value.trim() === ""){
                alert("enter dob");
                valid = false;
            }
            return valid;
        }