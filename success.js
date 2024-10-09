
const elem1 =document.getElementById('btn')
const elem2= document.getElementById('email')
const elem3=document.getElementById('success')
const elem4=document.getElementById('container')
const elem5=document.getElementById('button')
const elem6=document.getElementById('valid')

function isValidEmail(email) {
    // Define a regex pattern for validating an email
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
    // Test the input against the regex
    return emailRegex.test(email);
  }
elem1.addEventListener('click',()=>{
    const email=elem2.value;
   if(isValidEmail(email)){
      elem3.classList.add("show");
      elem3.classList.remove("hide")
      elem4.classList.add("hide");
      elem4.classList.remove("show")
      elem6.classList.remove("show");
    
}
   else{
      elem2.style.borderColor='red';
      elem2.style.backgroundColor='#BC8F8F';
      elem2.style.color='white';
      elem6.style.color='red';
      elem6.classList.add("show");

   }
   
})
elem5.addEventListener('click',()=>{

    elem3.classList.add("hide")
    elem3.classList.remove("show")
    elem4.classList.add("show")
    elem4.classList.remove("hide")
    elem2.value=null
    elem2.style.backgroundColor=null;
    elem2.style.borderColor=null;
})
