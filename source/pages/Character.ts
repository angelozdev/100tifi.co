const Character = (): string => {
   const view: string = `
      <div class="character-inner">
         <article class="character-card">
            <img src="image" alt="name" class="character-card__img" />
         </article>

         <article class="character-card__details">
            <h3>Episodios: </h3>
            <h3>Estado: </h3>
            <h3>Especie: </h3>
            <h3>Género: </h3>
            <h3>Origen: </h3>
            <h3>Última ubicación: </h3>
         </article>
      </div>
   `

   return view;
}

export default Character;