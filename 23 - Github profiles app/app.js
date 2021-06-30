const API_URL = 'https://api.github.com/users/';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(user) {
    const resp = await fetch(API_URL + user);
    const respData = await resp.json();

    createUserCard(respData);
}

getUser('florinpop17');

function createUserCard(user) {
    const cardElement = `
    <div class="card">
        <div class="img-container">
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p> 

            <ul class="info">
                <li>${user.followers}</li>
                <li>${user.following}</li>
                <li>${user.public_repos}</li>
            </ul>
        </div>
    </div>
    `;

    main.innerHTML = cardElement;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);

        search.value = '';
    }
})

