const getHash = (): string => (
   location.hash
      .replace(/\#(\d{1,3})\/?/, "$1")
   || '/'
)

export default getHash;