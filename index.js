const http = require("http");
const readline = require("node:readline");
const {stdin, stdout} = require("node:process");
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

rl.question("Enter target city\n", (value) => {
    rl.close();
    const apiUrl = "http://api.weatherstack.com/current";

    const apiKey = process.env.apiKey;
    const url = `${apiUrl}?access_key=${apiKey}&query=${value}`
    http.get(url, (res) => {
        // console.log(res);
        let response = "";
        res.setEncoding("utf-8")
        res.on("data", (data) => {
            response += data;
        })
        res.on("end", () => {
            response = JSON.parse(response);
            if (response.success === false) {
                console.log("Bad city input");
            } else {
            console.log({
                location: {
                    name: response.location.name,
                    country: response.location.country,
                },
                properties: {
                    temperature: response.current.temperature,
                    weather_descriptions: response.current.weather_descriptions,
                }
            })
            }

        })
    })
})
