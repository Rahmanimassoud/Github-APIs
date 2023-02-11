let cardDiv = document.querySelector("#Programer_Cards");
let currentUser = "";

function getUsername(element){
    console.log(element.value)
    currentUser = element.value;
}

function makecard(data){
    let res = `<div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div class"content">
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location: ${data.location}</p>
                        <p>Repos: ${data.public_repos}</p>
                    </div>
                </div>`;
    return res;
}

async function search(){
    let response = await fetch("https://api.github.com/users/" + currentUser);
    let data = await response.json();
    console.log(data);
    cardDiv.innerHTML = makecard(data) + cardDiv.innerHTML; 
}