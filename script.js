// Coloque a url do consumo da API abaixo.
const URL= ``

async function chamarApi () {
    const resp = await fetch(URL);
    console.log(resp);

const data = await resp.json();
console.log(data)
}
chamarApi();
