let welcome = document.getElementById("welcome");
if (sessionStorage.getItem('nameUser').length>0) {
    welcome.innerHTML="Bienvenid@"  + " " + sessionStorage.getItem('nameUser');
};
