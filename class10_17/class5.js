

const padre = document.getElementById("padre");
const hijo = document.getElementById("hijo");
padre.addEventListener("click",(e)=>{
 console.log(e.target.textContent);
//  e.target.style.background="yellow";
 e.target.classList.add("color");
})
