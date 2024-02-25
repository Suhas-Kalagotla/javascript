const inputForm= document.getElementById("inputForm"); 
inputForm.addEventListener( "submit",(e)=>{
    e.preventDefault(); 
    let obj= document.getElementById("text"); 
    let n = obj.value; 
    let objans = document.getElementById("ans");  
    objans.textContent= n; 


    if(10 > n) {
        let i =0 ; 
        objans.textContent = "less than 10"
    }
    else if(n < 50) objans.textContent = "between 10 and 50"
    else {
        objans.textContent = "greater than 10"
    }
})

