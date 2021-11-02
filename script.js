
function minValue(str,minValue){
    if(str.trim().length >= minValue)
        return true
    
}

function validateZipCode(str){
    const r = /\b\d{5}\b/g;
    const zip=str.trim();
        if( r.test(zip)) 
            return true
        
}

function validateAge(dateOfBirth){
    let dob=new Date(dateOfBirth);

    let monthDiff=Date.now()-dob.getTime();
    let age_dt=new Date(monthDiff);
    var year = age_dt.getUTCFullYear();
    var age=Math.abs(year-1970)
    if (age>17)
    return true
    
}

function validateEmail(str){
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regEx.test(str))
            return true
        
}
function comparePassword(str,password){
    if(str.trim() === password){
      
        return true
    }
}

function button(){
    const button =document.querySelector('button');
    button.disabled=true;
    const exist=document.querySelectorAll('.button-off')
    console.log(exist)
    if(exist.length>0){
        button.disabled=true
        console.log(button.disabled)
    }else {
        button.disabled=false
        console.log(button.disabled)
    }
}

 

button();

 const  valid = document.querySelectorAll('.validation')
    valid.forEach(element=> {
        
        // console.log(element)
        if(element.type==="text"){
            element.addEventListener("keyup", function(e) {
                if (!minValue(e.target.value,"2")){
                    e.target.classList.add("button-off")
                    e.target.classList.add("is-invalid")
                    button();
                   }
                else {
                    
                    e.target.classList.remove("is-invalid")
                    e.target.classList.add("is-valid")  
                    e.target.classList.remove("button-off")
                    button();
                }
                    
                     
            })
        }
        if(element.type==="email"){
            element.addEventListener("keyup", function(e){
                if(!validateEmail(e.target.value))
                    {
                        
                    e.target.classList.add("button-off")
                    e.target.classList.add("is-invalid")
                    button();
                    }
                else {
                    
                    e.target.classList.remove("is-invalid")
                    e.target.classList.add("is-valid")
                    e.target.classList.remove("button-off")
                    button();
                }
                
                
            })
          }
          
        if(element.id ==="inputZip"){
            element.addEventListener("keyup", function(e){
                if(!validateZipCode(e.target.value))
                {
                    
                    e.target.classList.add("button-off")
                    e.target.classList.add("is-invalid")
                    button();
                }
                else {
                    
                    e.target.classList.remove("is-invalid")
                    e.target.classList.add("is-valid")
                    e.target.classList.remove("button-off")
                    button();
                }
               
                
                
            })
          }
        if(element.id ==="Birtdate"){
            element.addEventListener("keyup", function(e){
                if(!validateAge(e.target.value))
                {
                    
                    e.target.classList.add("button-off")
                    e.target.classList.add("is-invalid")
                    button();
                }
                
                else {
                    
                    e.target.classList.remove("is-invalid")
                    e.target.classList.add("is-valid") 
                    e.target.classList.remove("button-off")
                    button();
                }
                
                
            })
          }
        
        if (element.id==="inputPassword"){
            element.addEventListener("keyup", function(e){
                if(!minValue(e.target.value,"8"))
                {
                    
                    e.target.classList.add("button-off")
                    e.target.classList.add("is-invalid")
                    button();
                
                }
                else  {
                    e.target.classList.remove("is-invalid")
                    e.target.classList.add("is-valid")
                    e.target.classList.remove("button-off")
                    button();
                
                }
                
                
            })
          }[]
        if (element.id ==="inputPassword2"){
                const passwordelement=document.querySelector("#inputPassword");
                const password=passwordelement;
                element.addEventListener("keyup", function(e){
                    if(!comparePassword(e.target.value,password.value))
                    {
                        e.target.classList.add("button-off")
                        e.target.classList.add("is-invalid")
                        button();
                    }
                    else  {
                        
                        e.target.classList.remove("button-off")
                        e.target.classList.remove("is-invalid")
                        e.target.classList.add("is-valid")
                        button();
                    }

                })
        }[]
        // button();
        
    })

    // const button =document.querySelector('button');
    // const exist=document.getElementsByClassName('button-off')
    
    


 
 




// if(!validate(element)){
//     console.log(validate(element))
//     console.log(`${element.value} "är inte gilltigt"`)
//     return false

// Example starter JavaScript for disabling form submissions if there are invalid elements
// (function () {
//     'use strict'
// //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
    
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
          
//           alert("sub")
//         }, false)
//       })
//   })()



// //lägg in alla med id
// function getId(idName){
//     return document.getElementById(`#${idName}`)
// }


// // Example starter JavaScript for disabling form submissions if there are invalid elements
// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
     
//     const firstname= getId('firstname')
//     const lastname=document.getElementById('lastname')
//     const email=document.getElementById('inputEmail')
//     const password=document.getElementById('inputPassword')
//     const adress=document.getElementById('inputAddress')
//     const city=document.getElementById('inputCity')
//     const zipcode=document.getElementById('inputZip')
//     const birthdate=document.getElementById('Birtdate')
//     const button = document.querySelector('button')
//     console.log(button.disabled)
    

    
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
          
//           form.classList.add('was-validated')
//         }, false)
//       })


//   })()

//   console.log(firstname.checkValidity())

//   function isValid(){

//   }