let welcome = document.getElementById("welcome");
if (sessionStorage.getItem('nameUser').length>0) {
    welcome.innerHTML="Bienvenid@"  + " " + sessionStorage.getItem('nameUser');
};

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
};

function closeModal(){
    var modal = document.getElementById("modal");
    modal.style.display = 'none';
};

// window.onclick = function(event){
//     if (event.target == modal){
//         var modal = document.getElementById("modal");
//         modal.style.display = "none";
//     }
// };

function sendUser() {
    var pagina = "index.html";
    const name = document.getElementById("name").value;
    sessionStorage.setItem("nameUser",document.getElementById("name").value)
    const lastname = document.getElementById("lastname").value;
    sessionStorage.setItem("lastnameUser",document.getElementById("lastname").value)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value; 
    const phone = document.getElementById("phone").value;
    const register = document.getElementById("register");
        if ((name.length > 0) && (lastname.length > 0) && (email.length > 0) && (password.length > 0) && (phone.length > 0)) {
            location.href=pagina;
            console.log("Bienvenida" + sessionStorage.getItem('nameUser')+ " " + sessionStorage.getItem('lastnameUser'));
        } else {
            alert("Todos los campos son requeridos. Verifique que ingresó toda la información.")   
        }
};

function user() {
    var pagina = "index.html";
    const name = document.getElementById("nameModal").value;
    sessionStorage.setItem("nameUser",document.getElementById("nameModal").value)
    const email = document.getElementById("emailModal").value;
    const password = document.getElementById("passwordModal").value; 
    const register = document.getElementById("sendModal");
        if ((name.length > 0) && (email.length > 0) && (password.length > 0)) {
            location.href=pagina;
            console.log("Bienvenida" + sessionStorage.getItem('nameUser')+ " " + sessionStorage.getItem('lastnameUser'));
        } else {
            alert("Todos los campos son requeridos. Verifique que ingresó toda la información.")   
        }
};





