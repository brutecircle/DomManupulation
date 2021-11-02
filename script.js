// used tagname or by id 
// document.getElementById("first").innerHTML = "Good Shop";
let h1 = document.getElementsByTagName('h1')[0];
h1.innerHTML = "Super Shop";

function bodyColour(color) {
    document.body.style.background = color;
}

// adding img ,titte ,description ,and price
function add_img() { 
	const img = document.createElement('img'); 
    img.src = 'https://amzn.to/31oJwLj'; 
	document.getElementById('product1').appendChild(img);
}