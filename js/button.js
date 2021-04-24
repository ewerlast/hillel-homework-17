let button = document.createElement('button');
button.innerHTML = "get"
let body = document.querySelector('body');
body.appendChild(button)

function getURL(arr) {
    for (let i = 0; i < arr.length; i++) {
        return load("GET", arr[i]);
    }
}