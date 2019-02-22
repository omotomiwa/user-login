function validateForm() {
    var un = document.querySelector(".username").value;
    var pw = document.querySelector(".pass").value;
    var username = "username"; 
    var password = "pass";
    if ((un == username) && (pw == password)) {
        return true;
    }
    else {
        let er = document.querySelector("#err");
        er.innerHTML ="Username or password is incorrect";
        er.classList.add("alert-danger");
        
        return false;
    }
}


function Reset() {
    var one = document.querySelector(".user").value;
    var log = "user"; 
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if ((one == log == mailformat) ) {
        return true;
    }
        
    
    else {
        document.querySelector("#error").innerHTML ="We cannot do this without your email"
        
        return false;
    }
}