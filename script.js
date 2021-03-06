
function minValue(str,minValue){
    let strLengt=str.trim();
    let expression ='^.{' + minValue + ',35}$';
    const r= new RegExp(expression);

    if(r.test(strLengt))
        return true 
}

function validateZipCode(str){
    const r = /\b\d{5}\b/g;
    const t= /^\d{3} \d{2}$/

    if( r.test(str) || t.test(str)) 
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
    if(str.trim() === password)
      
        return true
    
}

function strongPassword(str){
    const strong= /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if(strong.test(str)){
       return true
    }
}

function button(){
    const button =document.querySelector('button');
    button.disabled=true;
    const exist=document.querySelectorAll('.button-off')

    if(exist.length>0){
        button.disabled=true
    }else {
        button.disabled=false
    }
}

 

button();

function onSubmit(){
    alert("submitted")
}
 const  valid = document.querySelectorAll('.validation')
    valid.forEach(element=> { 
        if(element.type==="text"){
            element.addEventListener("keyup", function(e) {
                if (!minValue(e.target.value,"2")){
                    e.target.classList.add("button-off")
                    e.target.classList.add("is-invalid")
                    button();
                   }else {
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
                    } else {
                    e.target.classList.remove("is-invalid")
                    e.target.classList.add("is-valid")
                    e.target.classList.remove("button-off")
                    button();
                }
            })
          }
          
        if(element.id ==="inputZip"){
            element.addEventListener("keyup", function(e){
                if(!validateZipCode(e.target.value)) {
                    e.target.classList.add("button-off")
                    e.target.classList.add("is-invalid")
                    button();
                } else {
                    e.target.classList.remove("is-invalid")
                    e.target.classList.add("is-valid")
                    e.target.classList.remove("button-off")
                    button();
                } 
            })
          }
        if(element.id ==="Birtdate"){
            element.addEventListener("keyup", function(e){

                if(!validateAge(e.target.value)){
                    e.target.classList.add("button-off")
                    e.target.classList.add("is-invalid")
                    button();
                }else {
                    e.target.classList.remove("is-invalid")
                    e.target.classList.add("is-valid") 
                    e.target.classList.remove("button-off")
                    button();
                }  
            })
          }
        
        if (element.id==="inputPassword"){
            element.addEventListener("keyup", function(e){
                if(!minValue(e.target.value,"8")){
                    document.querySelector('.passwordStrong').innerHTML="";
                    document.querySelector('.passwordWeek').innerHTML="";
                    e.target.classList.add("button-off")
                    e.target.classList.add("is-invalid")
                    button();
                }else  {
                    e.target.classList.remove("is-invalid")
                    e.target.classList.add("is-valid")
                    e.target.classList.remove("button-off")
                    button();

                    if(strongPassword(e.target.value)){
                        document.querySelector('.passwordWeek').innerHTML="";
                        document.querySelector('.passwordStrong').innerHTML="Password strength: Strong";  
                    }else {
                        document.querySelector('.passwordStrong').innerHTML="";
                        document.querySelector('.passwordWeek').innerHTML="Password strength: Week";
                    }
                }  
            })
          }

        if (element.id ==="inputPassword2"){
            const passwordelement=document.querySelector("#inputPassword");
            const password=passwordelement;
            element.addEventListener("keyup", function(e){
                 if(!comparePassword(e.target.value,password.value))
                 {
                     e.target.classList.add("button-off")
                     e.target.classList.add("is-invalid")
                    button();
                }else  {
                     e.target.classList.remove("button-off")
                    e.target.classList.remove("is-invalid")
                    e.target.classList.add("is-valid")
                     button();
                }
            })
        }  
    })