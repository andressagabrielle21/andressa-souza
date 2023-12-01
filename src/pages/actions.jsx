export const fetchGit = async() => {
  const response = await fetch ("https://api.github.com/users/andressagabrielle21/repos?sort=updated&direction=desc") 

  const data = await response.json();

  console.log(data)
}