import axios from "axios";

export function ApiConfig() {
    var i = 0;
    function res_zero() {
        return (
            axios
                .get("/api/model")
                .then((res) => console.log(res.data)))
    }
    function res_one(i) {
        axios
            .get("/api/model/1")
            .then(console.log("modelOne triggering"),
                modelTrigger(i)
            )
    }
    function res_two(i) {
        axios
            .get("/api/model/2")
            .then((console.group("model triggering"),
                modelTrigger(i)
            ))
    }

    async function modelTrigger(i) {
        const response = await fetch(`http://127.0.0.1:8000/api/${i}/triggered`);
        const json_response = await response.json();
        console.log(json_response)
    }

    const currentURL = window.location.href;
    console.log(currentURL);
    if (currentURL === "http://localhost:3000/api/model") {
        res_zero()
    }
    else if (currentURL === "http://localhost:3000/api/model/1") {
        i = 1;
        res_one(i)
    }
    else if (currentURL === "http://localhost:3000/api/model/2") {
        i = 2;
        res_two(i)
    }
    else if (currentURL === "http://localhost:3000") {
        console.log("0");
    }
}