let bodyColor = document.querySelector('body');
let showValue = document.getElementById('show-value');
let icon = document.getElementById('copyIcon');

window.onload = () => {
    bodyColor.style.backgroundColor = '#d2dae2';
    icon.style.display = "none";
}

/* Generate RGB color and change body background */
function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    showValue.value = `rgb(${red}, ${green}, ${blue})`;
    icon.src = "images/copy-icon.png";
    icon.style.display = "block";
    return `rgb(${red}, ${green}, ${blue})`;
}

function changeBodyRGBColor() {
    const newBodyRGBColor = generateRGBColor();

    bodyColor.style.backgroundColor = newBodyRGBColor;
}

/* Generate Hex color code and change body background */
function generateHexColor() {
    const hexChars = "0123456789abcdef";
    const maxHexCode = 6;
    let newHexCode = "";

    while(maxHexCode > newHexCode.length) {
        newHexCode += hexChars[Math.floor(Math.random() * hexChars.length)];
    }

    showValue.value = `#${newHexCode}`;
    icon.src = "images/copy-icon.png";
    icon.style.display = "block";
    return `#${newHexCode}`;
}

function changeBodyHexColor() {
    const newBodyHexColor = generateHexColor();

    bodyColor.style.backgroundColor = newBodyHexColor;
}

/* Copy generated color code */
function copyColorCode() {
    const copyColor = document.getElementById('show-value');

    copyColor.select();
    navigator.clipboard.writeText(copyColor.value)
    .then( () => {
        icon.src = "images/check-icon.png";

    })
    .catch(error => {
        imgSrc.src = "images/error-icon.png";
        alert("Something went wrong! Try again.");
    });
}