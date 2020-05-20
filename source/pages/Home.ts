const Home = (): string => {
   const view: string = `
      <div class="characters">
         <article class="character-item">
            <a href="#/1">
               <img src="image" alt="name">
               <h2>Name</h2>
            </a>
         </article>
      </div>
   `;

   return view;
}

export default Home;  