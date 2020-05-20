const API: string = 'https://rickandmortyapi.com/api/character/';

const getData = async (id?: string | number) => {
   const url: string = id ? `${API}${id}` : API;

   try {
      const response = await fetch(url, { method: 'GET' });
      const data = await response.json();
      return data;
   } catch (error) {
      console.error(url, error)
   }
}

export default getData;