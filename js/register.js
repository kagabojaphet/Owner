let username=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let form=document.querySelector("form");

let fashoin=JSON.parse(localStorage.getItem("fashoin")) || []

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let kagabo={
        username:username.value,
        email:email.value,
        password:password.value
    }
   if(fashoin.find((titi)=>titi.email==email.value)){
    alert("User Already Exist Please Click Login")
   }
    else{fashoin.push(kagabo)
    const string=JSON.stringify(fashoin)
    localStorage.setItem("fashoin",string)
    alert("Sign-up Was Successfully Click Login")
    }

})