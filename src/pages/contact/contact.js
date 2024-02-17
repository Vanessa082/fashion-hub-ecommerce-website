import { createNavBar } from "../../components/navbar/navbar.js";
import validator from 'validator';


createNavBar(); // is index is not true

const send = document.getElementById('send')

send.addEventListener('click', ()=>{
  alert('successful add')
})