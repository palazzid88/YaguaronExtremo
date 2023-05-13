let contenedor = document.getElementById('main-container')

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
                                    <a class="btn btn-primary" href="${btn}">Inscribirme</a>
                                </div>
                        </div>`
        contenedor.appendChild(div);
    });
}