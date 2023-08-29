const entrada = document.querySelector('#entrada')
const img = document.querySelector('#img')
const botao = document.querySelector('#botao')
const nome = document.querySelector('#nome')
const genero = document.querySelector('#genero')
const episodios = document.querySelector('#episodios')
const inputN = document.querySelector('#inputNome')
const inputE = document.querySelector('#inputEpisodios')
const inputG = document.querySelector('#inputGenero')
const limpar = document.querySelector('#limpar')

const generoTraducoes = {
    "Male": "Masculino",
    "Female": "Feminino",
};

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        });

    return result;

}

const atualizado = (result) => {
    img.src = result.image;

    if (inputN.checked) {
        nome.innerHTML = `Nome: ${result.name}`;
    } else {
        nome.innerHTML = '';
    }

    if (inputE.checked) {
        episodios.innerHTML = `Episódios: ${result.episode.length}`;
    } else {
        episodios.innerHTML = '';
    }

    if (inputG.checked) {
        const generoTraduzido = generoTraducoes[result.gender] || result.gender;
        genero.innerHTML = `Gênero: ${generoTraduzido}`;
    } else {
        genero.innerHTML = '';
    }
};

botao.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(entrada.value);
    if (result) {
        atualizado(result);
    }

});

limpar.addEventListener('click', () => location.reload());