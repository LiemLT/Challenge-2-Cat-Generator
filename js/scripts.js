function catGenerator() {
    let image = document.createElement("img");
    let div = document.getElementById("catContainer");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}