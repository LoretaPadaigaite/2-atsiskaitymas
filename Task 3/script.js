/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


const button = document.getElementById('btn');
const output = document.getElementById('output');

button.addEventListener('clic', (event) =>{
    event.preventDefault();
    showUsers()
});


const showUsers = () => {
    const response = fetch(`ENDPOINT`);

    response
    .then((response) => response.json())
    .then((data) => {
        const ulElement = document.createElement('ul');
        output.append(ulElement);
        const message = document.getElementById('message').remove();

        data.forEach(userData => {
            const liElement = document.createElement('li');
            liElement.textContent = `${userData.login} ---- ${userData.avatar_url})`
            ulElement.append(liElement);
        });
    });
};
