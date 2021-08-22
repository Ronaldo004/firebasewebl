const signup=()=>{

    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("confirmp").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((cred) => {
        console.log(cred);

    })
    .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage)

    });

}

const signin=()=>{
    var email=document.getElementById("Email").value;
    var password=document.getElementById("Password").value;


   
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((data) => {
    // Signed in

 
    window.location.href="main.html"


    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = "Sorry invlaid pass or email";
    alert(errorMessage);
    
  })
}
  




