// login localStorage
const email =document.getElementsByName("email");
const password= document.getElementsByName("password");
const btn_login =document.getElementsByName("btn_login");

btn_login.onclick = function(){
    const email= email.value;
    const password= password.value;

    console.log(email);
    console.log(password);

    if(email && password){
        localStorage.setItem(email,password);
        location.reload();

    }
};

//sign up localStorage
const email =document.getElementsByName("email");
const password= document.getElementsByName("password");
const confirm_pass = document.getElementsByName("confirm_pass");
const btn_signup =document.getElementsByName("btn_signup");

btn_login.onclick = function(){
    const email= email.value;
    const password= password.value;
    const confirm_pass =confirm_pass.value;

    console.log(email);
    console.log(password);
    console.log(confirm_pass);

    if(email && password && confirm_pass){
        localStorage.setItem(email,password,confirm_pass);
        location.reload();

    }
};