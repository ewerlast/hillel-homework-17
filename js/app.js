function load(method, url) {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url);


    xhr.onload = () => {
        let data = JSON.parse(xhr.response);
        let body = document.querySelector('body');
        let ul = document.createElement('ul');
        if (xhr.status !== 200) {
            button.innerHTML = "Getting data";
            button.style.opacity = "0.5";
            button.disabled = true;
        }


        if (data.results) {
            for (let i = 0; i < data.results.length; i++) {
                if (typeof(data.results[i]) === "object" && data.results[i].hasOwnProperty('name')) {

                    let li = document.createElement('li');
                    li.innerHTML = `${data.results[i].name}`;
                    ul.append(li)
                }


            }

            body.appendChild(ul)
        }
    }


    xhr.send();


}
arrURL = ["https://rickandmortyapi.com/api/character/?page=25", "https://rickandmortyapi.com/api/character/?page=1", "https://rickandmortyapi.com/api/character/?page=3"];
let count = 0
button.addEventListener("click", function() {
   

    load("GET", `${arrURL[count]}`);
    count++;

})