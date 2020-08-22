const Header = (): string => {
   const view: string = `
      <div class="container">
         <div class="header__logo">
            <h1 class="header__title">
               <a href="/" class="header__icon">100tifi.co</a>
            </h1>
         </div>
         <nav class="nav">
            <a href="#/about/" class="nav__about">About</a>
         </nav>
      </div>
   `;

   return view;
};

export default Header;
