import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Personaje = async () => {
  const id = getHash()
  const character = await getData(id)
  console.log('aca ', character)
  return `<div class="Personaje-inner">
    <article class="Personaje-card">
      <img src="${character.image}" alt="${character.name}">
    </article>
    <article class="Personaje-card">
      <h3>Episodios: <span>${character.image.length}</span></h3>
      <h3>Estado: <span>${character.status}</span></h3>
      <h3>Especie: <span>${character.species}</span></h3>
      <h3>Género: <span>${character.gender}</span></h3>
      <h3>Origen: <span>${character.origin.name}</span></h3>
      <h3>Última ubicación: <span>${character.location.name}</span></h3>
    </article>
  </div>
`
}
export default Personaje;