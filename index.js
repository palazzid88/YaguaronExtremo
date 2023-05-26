let contenedor = document.getElementById('main-container')

// función para ocultar el <p> de linea 100 y 101 de index.html
window.addEventListener('load', ()=> {
    let pslider1 = document.getElementById("p-slider1");
    let pslider2 = document.getElementById("p-slider2");

    setTimeout(()=> {
        pslider1.classList.add("ocultar");
        pslider2.classList.add("ocultar")
    }, 5000)
})

// fetch de req res a data.json
fetchCards();

function fetchCards() {
    fetch('./data/data.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        renderCards(data);
    })
}

function renderCards(cards) {
    contenedor.innerHTML = "";
    cards.forEach(item => {
        let div = document.createElement('div');
        div.className = 'div-container';
        let {img, title, info, btn } = item;
        div.innerHTML = `<div class="card">
                                <img class="img-img-top" src="${img}" alt="imagen de competencia deportiva">
                                <div class="card-body">
                                    <h2 class="card-title">${title}</h2>
                                    <p class="card-text">${info}</p>
                                    <a class="btn btn-primary" href="${btn}">Más información</a>
                                </div>
                        </div>`
        contenedor.appendChild(div);
    });
}