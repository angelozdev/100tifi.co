import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {
   const id = getHash();
   const character = await getData(id);
   const {
      image,
      name,
      episode,
      status,
      species,
      gender,
      origin,
      location
   } = character;
   console.log(character);

   const view: string = `
      <div class="character-inner">
         <article class="character-card">
            <img src="${image}" alt="${name}" class="character-card__img" />
            <div class="character-card__details">
               <h3>Episodios: <span>${episode.length}</span></h3>
               <h3>Estado: <span>${status}</span></h3>
               <h3>Especie: <span>${species}</span></h3>
               <h3>Género: <span>${gender}</span></h3>
               <h3>Origen: <span>${origin.name}</span></h3>
               <h3>Última ubicación: <span>${location.name}</span></h3>
            </div>
         </article>

      </div>
   `;

   return view;
};

export default Character;
