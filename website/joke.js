const api_url = "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const joke = document.getElementById("joke");
const authour = document.getElementById("authour");

async function getQuote(url){
    const response = await fetch(url);
    const data = await response.json();
    joke.textContent = data.joke;
    authour.textContent = "- John Pork"; // This is just so both the joke and authour load at the same time
}

getQuote(api_url)