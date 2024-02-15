import { createNavBar } from "../../components/navbar/navbar.js";

createNavBar(); // is index is not true

const send = document.getElementById('send')

send.addEventListener('click', ()=>{
  alert('successful add')
})