import getData from "../utils/getData";

const Home = async () => {
  const data = await getData();
  
  const view =`
    <div class="personajes">
      ${data.results.map(character => `
        <div class="card">
          <a href="#/${character.id}/">
            <div class="card-image">
              <figure class="image is-1by4">
                <img src="${character.image}" alt="${character.name}">
              </figure>
            </div>
            <div class="card-content">
              <div class="media-content">
                <p class="title is-4">${character.name}</p>
              </div>
            </div>
          </a>
        </div>
      `).join('')}
    </div>
  `;
  return view;
}

export default Home;