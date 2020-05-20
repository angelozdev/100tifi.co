export const getHash = () => location.hash
   .replace(/#\/(\d{1,3})\/?/, "$1")
   .toLowerCase() || '/'