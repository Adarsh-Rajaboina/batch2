let mainEle = document.createElement("div");

mainEle.setAttribute("id", "mainBlock");
// console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("id", "topBlock");
// console.log(topEle);

let image = document.createElement("img");
image.src =
  "https://img.freepik.com/free-vector/male-photographer-with-camera-hand-drawn-sketch-vector_460848-14670.jpg?t=st=1737956312~exp=1737959912~hmac=60fc4d08298c9fa4ec0c75648fe7acae4fb780328510793e50bc1f216575b8ca&w=740"
image.width = 400;
image.height = 450;
image.style.objectFit = "cover";

topEle.appendChild(image);

let bottomEle = document.createElement("div");

bottomEle.setAttribute("class", "bottomBlock");
// console.log(bottomEle);

let h1 = document.createElement("h1");
h1.innerText = "photography";

let button = document.createElement("button");
button.innerText = "view more";

bottomEle.appendChild(h1);
bottomEle.appendChild(button);

mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);