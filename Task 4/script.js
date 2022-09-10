/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = './cars.json';
const output = document.getElementById('output');

const response = fetch('ENDPOINT')
response
 .then((response) => response.json())
 .then((data) => {
   data.forEach(data => {
      const divElement = document.createElement('div');
      output.append(divElement);

      const h2Element = document.createElement('h2');
      divElement.append(h2Element);
      h2.textContent = `${data.brand}:`

      const ulElement = document.createElement('ul');
      divElement.append(ulElement);

      const liElement = document.createElement('li');
            liElement.textContent = `${data.model}`
            ulElement.append(liElement);
   }
  });