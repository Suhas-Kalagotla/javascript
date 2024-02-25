const inputForm= document.getElementById("inputForm"); 
inputForm.addEventListener( "submit",(e)=>{
    e.preventDefault(); 
    let obj= document.getElementById("text"); 
    let n = obj.value; 
    let objans = document.getElementById("ans");  
    //objans.textContent= n; 

    //for(let i =0 ; i <= n; i ++) {
        //    console.log(i); 
        //    objans.textContent = i ; 
        // }
    //let x = 0 ; 
    //let y =0 ; 
    //labelloop: while(x < 5) {
        //   console.log("x = ", x ); 
        //  x++; 
        // y = 1; 
        //while(y < 5) {
            //   console.log("y = ", y ); 
            //  y++; 
            // if(y % 2 ==0 ) {
                //    continue labelloop; 
                //}
            //}
        //}
})

let a = {
    name : "suhas",
    country : "india", 
    place : "hyderabad",
    gender : "male",
}; 
for(let [key , value] of Object.entries(a) ) {
   console.log(key ,":", value); 
}
for(i in a ) {
    console.log(a[i]); 
}
