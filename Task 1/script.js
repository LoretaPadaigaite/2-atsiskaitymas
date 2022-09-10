/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const inputValue = document.getElementById('search');
const submit = document.getElementById('submit-btn');
const output = document.getElementById('output');

addEventListener('submit', (event) => {
    event.preventDefault();
    converter();
});

const converter = () => {
    const svarai = inputValue.value * 2.2046;
    const gramai = inputValue.value / 0.0010000;
    const uncijos = inputValue.value * 35.274;

    const pElement = document.createElement('p');
    pElement.textContent = `${inputValue.value} kilogramai/ų yra: ${svarai} (lb) - svarų, ${gramai} (g) - gramų, ${uncijos} (oz) - uncijos.`;
    output.append(pElement);

    inputValue.remove();
    submit.remove();

};
