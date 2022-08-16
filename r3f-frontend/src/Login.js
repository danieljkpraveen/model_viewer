import axios from "axios";

var prev_name = "";
let responseData;

export function onLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username !== window.prev_name || username === window.prev_name && responseData === '') {
        window.prev_name = username;
        const options = {
            url: "http://127.0.0.1:8000/api/credentials",
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

        if (username && password) {
            axios(options).then((response) => {
                if (response.data["login"]) {
                    responseData = response.data['login'];
                    console.log(responseData);
                    var btn_id = document.getElementById("login");
                    btn_id.value = username;
                    window.alert("you are now logged in as " + username);
                    <header />;
                } else {
                    responseData = response.data['login'];
                    window.btn_name = "Log in";
                    window.alert("Invalid Credentials");
                    responseData = '';
                }
            });
        }
    } else if (window.prev_name === username) {
        console.log(responseData);
        if(responseData){
            window.alert("you will be logged out");
            var btn_id = document.getElementById("login");
            btn_id.value = "Log in";
            window.prev_name = "";
        }else{
            window.alert("Enter valid credentials");
            responseData = '';
        }
    }
}
