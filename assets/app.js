function login() {
    var email = document
        .getElementById("email")
        .value;
    var password = document
        .getElementById("password")
        .value;
    if (email == '' || password == '') {
        alert('Email & Password Required!!!');
        return false;
    } 
    else {
        window.location.href = "./template/dashboard.html";
    }
}