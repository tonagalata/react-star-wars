export function getAllStarships(){
  const endpoint = 'https://swapi.co/api/starships/'
  return fetch(endpoint, {
    mode: 'cors'
  })
  .then(res => res.json())
  // .then(data => console.log(data))
  .catch(err => {
    console.log(err)
  })
}

