const aToZBlock = document.querySelector(".alphabets-block")
const alphabet = document.createElement("button")
alphabet.classList.add("alphabet")




//inserting alphabets


for(let i = 65; i <= 90; i++){
    alphabet.innerText = String.fromCharCode(i);
    aToZBlock.appendChild(alphabet.cloneNode(true));

    
}



