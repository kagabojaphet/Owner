const LoginForm=document.querySelector(".login");

LoginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;

    const data={
        email,
        password,
    };
    
    const api=`https://long-gold-xerus-belt.cyclic.app/api/v1/user/login`
    const setpost={
        method:`POST`,
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    };
    fetch(api,setpost)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data.message)
    })

})