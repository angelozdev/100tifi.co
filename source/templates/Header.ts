const Header = (): string => {
   const view: string = `
      <header class="header">
         <div class="header__log">
            <h1 class="header__title">
               <a href="/" class="header__icon">100tifi.co</a>
            </h1>
         </div>
         <nav class="nav">
            <a href="#/about/" class="nav__about">About</a>
         </nav>
      </header>
   `;

   return view;
}


export default Header;