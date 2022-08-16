import axios from "axios";

var prev_name = "";

export function onLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username !== window.prev_name) {
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
                    console.log("Login successfull", username);
                    var btn_id = document.getElementById("login");
                    btn_id.value = username;
                    window.alert("you are now logged in as " + username);
                    <header />;
                } else {
                    window.btn_name = "Log in";
                    window.alert("Invalid Credentials");
                }
            });
        }
    } else if (window.prev_name === username) {
        window.alert("you will be logged out");
        var btn_id = document.getElementById("login");
        btn_id.value = "Log in";
        window.prev_name = "";
    }
}
