const entrada = document.querySelector('#entrada')
const img = document.querySelector('#img')
const botao = document.querySelector('#botao')
const nome = document.querySelector('#nome')
const genero = document.querySelector('#genero')
const episodios = document.querySelector('#episodios')
const inputN = document.querySelector('#inputNome')
const inputE = document.querySelector('#inputEpisodios')
const inputG = document.querySelector('#inputGenero')

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });

    return result;

}

botao.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(entrada.value);
    
    if (inputN = true) {
        img.src = `${result.image}`
    }
    img.src = `${result.image}`
    nome.innerHTML = `Nome: ${result.name}`;
    episodios.innerHTML = `Episodios: ${result.episode}`;
    genero.innerHTML = `Genero: ${result.gender}`;
});