
const title=document.getElementById("greetings")
const handleUserName=(e)=>{
    // console.log("typed");
    // console.log("----")
   console.log(e)

   const ele=e.target;
   console.log(ele.value);
   title.innerText=`Hello ${Element.value}!`;
};
const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(e)

    const userName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;

    const userName1=e.target[0].userName.value;
    const email1=e.target[1].baseEmail.value;
    const password1=e.target[2].abcdpassword.value;

    if(!email1.endsWith("@lpu.in")){
        alert("Please use your LPU EMAIL");
    }else{
        //call the API 
        // send the adat --> regieter the student 
        
    }


};