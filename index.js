
    // lowercase: "abcdefghijklmnopqrstuvwxyz",
    // uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    // number: "012334456789",
    // Symbols: "^#$%~(){}[]!@+-<>"

const lengthSlider = document.querySelector(".pass-length input"),
sliderSpan = document.querySelector(".pass-length span"),
ganerateBtn = document.querySelector(".btn"),
options = document.querySelectorAll(".option input"),
inputBOx = document.querySelector(".input-box input"),
copyIcon = document.querySelector(".bx-copy-alt");

let characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "012334456789",
    Symbols: "^#$%~(){}[]!@+-<>"
}

function createPassword(){
    let staticPassword = "",
    radomPassword = "";
    options.forEach(option => {
        if(option.checked){
            if(option.id !== "Exclude-Duplicate" && option.id !== "Include-Spaces"){
                staticPassword += characters[option.id];
            }else if(option.id == "Include-Spaces"){
                staticPassword += ` ${staticPassword} `;
            }
        }
    });

    for(let i = 0; i < lengthSlider.value; i++){
        let radomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        radomPassword += radomChar;
    }
    inputBOx.value = radomPassword;
    console.log(radomPassword);
}
createPassword();
function updateSlider(){
    sliderSpan.innerHTML = lengthSlider.value;
    createPassword();
}
updateSlider();

function copyText(){
    navigator.clipboard.writeText(inputBOx.value);
    copyIcon.classList.replace("bx-copy-alt", "bx-check");

    setTimeout(() => {
        copyIcon.classList.replace("bx-check", "bx-copy-alt");
    }, 1000);
}

ganerateBtn.addEventListener("click", createPassword);
lengthSlider.addEventListener("input", updateSlider);
copyIcon.addEventListener("click", copyText);