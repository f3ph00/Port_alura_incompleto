let time = 5000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("selected");
    currentImageIndex++;
    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add("selected");
}

function start() {
    setInterval(() => {
        nextImage();
    }, time);
}

window.addEventListener("load", start);

// Código da borda
const borda = document.getElementById('slider');
let corAtual = 0;

setInterval(function() {
    corAtual = (corAtual + 1) % 3;
    if (corAtual === 0) {
        borda.style.borderColor = 'rgb(0,191,255)';
    } else if (corAtual === 1) {
        borda.style.borderColor = 'rgb(255,105,180)';
    } else {
        borda.style.borderColor = 'rgb(255, 255, 255)';
    }
}, 5000);

// Código do idioma
document.addEventListener('DOMContentLoaded', function() {
    const bandeiraBrasil = document.getElementById('bandeira-brasil');
    const bandeiraInglaterra = document.getElementById('bandeira-inglaterra');
    
    // Verificar se há um idioma selecionado no armazenamento local
    let idiomaSelecionado = localStorage.getItem('idiomaSelecionado');

    // Se não houver um idioma selecionado, define o idioma padrão como português
    if (!idiomaSelecionado) {
        idiomaSelecionado = 'portugues';
        localStorage.setItem('idiomaSelecionado', idiomaSelecionado);
    }

    // Aplica o idioma selecionado
    if (idiomaSelecionado === 'portugues') {
        traduzirParaPortugues();
    } else {
        traduzirParaIngles();
    }

    bandeiraBrasil.addEventListener('click', function() {
        if (idiomaSelecionado !== 'portugues') {
            traduzirParaPortugues();
            localStorage.setItem('idiomaSelecionado', 'portugues');
            idiomaSelecionado = 'portugues';
        }
    });

    bandeiraInglaterra.addEventListener('click', function() {
        if (idiomaSelecionado !== 'ingles') {
            traduzirParaIngles();
            localStorage.setItem('idiomaSelecionado', 'ingles');
            idiomaSelecionado = 'ingles';
        }
    });


    function traduzirParaPortugues() {
        document.getElementById('textoIdioma').innerHTML = `
            <h1 class="apresentacao__conteudo__titulo">Andre <strong>Felipe</strong></h1>
            <p class="apresentacao__conteudo__texto">Oi! Sou o Andre Felipe! Vivamus urna nisi, lobortis ut euismod in, sollicitudin ac ipsum. Mauris a libero id velit pulvinar scelerisque at quis magna. Aliquam erat volutpat.</p>
            <div class="apresentacao__links">
                <h2 class="apresentacao__conteudo__redes">Acesse minhas redes:</h2>
                <a class="apresentacao__links__link" href="https://github.com/f3ph00"> <img src="/imagens/git2.png">GitHub</a>
                <a class="apresentacao__links__link"  href="https://linkedin.com/in/andrefelipesilvar/"> <img src="/imagens/linkedin2.png">Linkedin</a>
                <a class="apresentacao__links__link" href="https://www.instagram.com/f3ph0/"> <img src="/imagens/insta.png">Instagram</a>
            </div>
        `;
        document.querySelectorAll('.cabecalho__menu__link')[0].innerText = 'Inicio';
        document.querySelectorAll('.cabecalho__menu__link')[1].innerText = 'Habilidades';
        document.querySelectorAll('.cabecalho__menu__link')[2].innerText = 'Projetos';
        document.querySelector('.rodape a').innerText = 'Desenvolvido por Andre Felipe';
        document.querySelector('.descricao').innerText = 'Homens do ano de 2023';

        // Adiciona os ícones aos links do menu
        document.querySelectorAll('.cabecalho__menu__link')[0].insertAdjacentHTML('afterbegin', '<img src="/imagens/casa1.png">');
        document.querySelectorAll('.cabecalho__menu__link')[1].insertAdjacentHTML('afterbegin', '<img src="/imagens/computador .png">');
        document.querySelectorAll('.cabecalho__menu__link')[2].insertAdjacentHTML('afterbegin', '<img src="/imagens/coracao.png">');
    }

    function traduzirParaIngles() {
        document.getElementById('textoIdioma').innerHTML = `
            <h1 class="apresentacao__conteudo__titulo">Andre <strong>Felipe</strong></h1>
            <p class="apresentacao__conteudo__texto">Hi! I'm Andre Felipe! Vivamus urna nisi, lobortis ut euismod in, sollicitudin ac ipsum. Mauris a libero id velit pulvinar scelerisque at quis magna. Aliquam erat volutpat.</p>
            <div class="apresentacao__links">
                <h2 class="apresentacao__conteudo__redes">Access my social networks:</h2>
                <a class="apresentacao__links__link" href="https://github.com/f3ph00"> <img src="/imagens/git2.png">GitHub</a>
                <a class="apresentacao__links__link"  href="https://linkedin.com/in/andrefelipesilvar/"> <img src="/imagens/linkedin2.png">Linkedin</a>
                <a class="apresentacao__links__link" href="https://www.instagram.com/f3ph0/"> <img src="/imagens/insta.png">Instagram</a>
            </div>
        `;
        document.querySelectorAll('.cabecalho__menu__link')[0].innerText = 'Home';
        document.querySelectorAll('.cabecalho__menu__link')[1].innerText = 'Skills';
        document.querySelectorAll('.cabecalho__menu__link')[2].innerText = 'Projects';
        document.querySelector('.rodape a').innerText = 'Developed by Andre Felipe';
        document.querySelector('.descricao').innerText = 'Men of the year 2023';

        // Adiciona os ícones aos links do menu
        document.querySelectorAll('.cabecalho__menu__link')[0].insertAdjacentHTML('afterbegin', '<img src="/imagens/casa1.png">');
        document.querySelectorAll('.cabecalho__menu__link')[1].insertAdjacentHTML('afterbegin', '<img src="/imagens/computador .png">');
        document.querySelectorAll('.cabecalho__menu__link')[2].insertAdjacentHTML('afterbegin', '<img src="/imagens/coracao.png">');
    }

});
    

