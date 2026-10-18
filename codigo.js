
const botao = document.querySelector("#botao");
const conteudo = document.querySelector("#conteudo");
const alerta = document.querySelector("#meuAlerta");
const aceitar = document.querySelector("#aceitar");
const recusar = document.querySelector("#recusar");

botao.addEventListener("click", function() {
    conteudo.innerHTML = `
        <div class="carta">
            <h1>Para Minha Vida ❤️</h1>

            <p>
                Meu amor, você é muito especial! E você sabe disso.
                Hoje você faz 18 anos e eu tô muito feliz de estar
                presente nesse dia. E você sabe que eu vou estar lá,
                e nada vai me impedir.
            </p>

            <p>
                Eu não tenho muito mais pra falar além do de sempre,
                mas é a verdade e a melhor verdade da minha vida:
                eu amo muito você, a ponto de fazer o impossível,
                se estiver ao meu alcance.
            </p>

            <p>
                Eu comprei os presentes que você pediu. Só pra te ver
                feliz, eu faço de tudo, porque você é extremamente
                especial pra mim e eu me sinto incrivelmente feliz
                ao seu lado.
            </p>

            <p>
                Hoje é um dia especial por ser o seu dia, e eu me
                sinto mais especial ainda por estar presente.
                Sei que a gente vai ter muitos outros aniversários
                e que esse não é o primeiro, mas talvez seja o mais
                importante.
            </p>

            <p>
                Enfim, parabéns pelos 18 anos! Sei que você vai
                conquistar muita coisa e tenho certeza de que vou
                estar ao seu lado pra ver todas elas.
            </p>

            <p>
                Sempre que você quiser ou precisar de ajuda,
                é só me chamar. Eu te ajudo, não importa como.
                Sempre vou e quero cuidar de você.
            </p>

            <p>
                Você sabe que é minha princesa e que eu sou
                apaixonado por você. ❤️
            </p>

            <p class="final">
                Feliz aniversário, minha lindona!
                Hoje é seu dia e você vai estar linda como uma
                princesa. Um beijão do seu maior fã! 💗
            </p>

            <div class="coracoes">❤️ ❤️ ❤️ ❤️ ❤️</div>
        </div>
    `;

    conteudo.style.display = "none";
    alerta.style.display = "flex";
});

aceitar.addEventListener("click", function() {
    alerta.style.display = "none";
    conteudo.style.display = "block";
});

recusar.addEventListener("mouseenter", function() {
    fugir();
});

recusar.addEventListener("click", function() {
    fugir();
});

function fugir() {
    recusar.style.position = "fixed";

    const maxX = window.innerWidth - recusar.offsetWidth;
    const maxY = window.innerHeight - recusar.offsetHeight;

    const x = Math.max(0, Math.random() * maxX);
    const y = Math.max(0, Math.random() * maxY);

    recusar.style.left = x + "px";
    recusar.style.top = y + "px";
}
