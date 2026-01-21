// buttons

const a1 = document.querySelector("#a1");
const forward = document.querySelector("#forward");
const tabuleiro = document.getElementsByClassName("tabuleiro");
const controles = document.getElementById("controles");


forward.addEventListener("click", mudaCor);

function mudaCor() {
    a1.style.backgroundColor = "red"
}
