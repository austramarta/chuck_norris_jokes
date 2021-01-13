const button = document.querySelector(".get-jokes").addEventListener("click", generateJokes);

function generateJokes(e) {

    const jokeNumber = document.querySelector("input[type=number]").value;
    console.log(jokeNumber);

    //XMLHttpRequest
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", `http://api.icndb.com/jokes/random/${jokeNumber}`, true);
    // xhr.onload = function () {
    //     if (this.status === 200) {
    //         const response = JSON.parse(this.responseText);
    //         console.log(response);
    //         let output = "";
    //         if (response.type === "success") {
    //             for (joke of response.value) {
    //                 output += `<li>${joke.joke}</li>`
    //             }
    //         } else {
    //             output += '<li>Something went wrong</li>'
    //         }
    //         document.querySelector(".jokes").innerHTML = output;
    //     }
    // }
    // xhr.send();


    //FETCH
    let output = "";

    fetch(`http://api.icndb.com/jokes/random/${jokeNumber}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);

            let output = "";

            for (joke of data.value) {
                // console.log(joke.joke);
                output += `<li> ${joke.joke}</li>`;
            }

            // const output = data.value.map(joke => `<li> ${joke.joke}</li>`).join("");

            document.querySelector(".jokes").innerHTML = output;
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });

    e.preventDefault();
}

