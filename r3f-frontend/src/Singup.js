import axios from "axios";

export function onSignup(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const options = {
        url: "http://127.0.0.1:8000/api/signup",
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        data: {
            name: username,
            psswd: password,
        },
    };
    if (username && password){
        axios(options).then((response) => {
                if(response.data['signup']){
                    window.alert("Sign up successful. Please login")
                } else if(!response.data['signup']){
                    window.alert("User already exists")
                }
        });
    }
}