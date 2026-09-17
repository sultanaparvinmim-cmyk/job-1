const formSubmit = document.getElementById("contactForm");

formSubmit.addEventListener("submit", (ev) => {
    ev.preventDefault();

    let errorMessage = null;

    
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const userPhone = document.getElementById("phone").value;
    const userAddress = document.getElementById("address").value;
    const userMessage = document.getElementById("message").value;

    
    if (!userName) {
        errorMessage = "Name is Required";
    } else if (!userEmail) {
        errorMessage = "Email is Required";
    } else if (!userPhone) {
        errorMessage = "Phone Number is Required";
    } else if (!userAddress) {
        errorMessage = "Address is Required";
    } else if (!userMessage) {
        errorMessage = "Message is Required";
    }

    
    if (errorMessage) {
        console.log(errorMessage);
        alert(errorMessage);
    } else {
        console.log("Form Submit Done!");
        alert("Form Submitted Successfully!");
        
        
        formSubmit.reset();
    }
});

