import getData from '../utils/getData';

const Home = async () => {
   const characters = await getData();

   const view: string = `
      <div class="characters">
         ${characters.results
            .map(
               (ch) =>
                  `<article class="character-item">
         <a href="#/${ch.id}"/>
         <img src="${ch.image}" alt="${ch.name}">
            <h2>${ch.name}</h2>
         </a>
         </article>`
            )
            .join('')}
      </div>
   `;

   return view;
};

export default Home;
