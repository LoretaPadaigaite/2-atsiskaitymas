/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class  Calculator {
    constructor(sum, subtraction, multiplication, division){
        this.sum = function sum (a, b) {
            return a + b;    
        };
        this.subtraction = function subtraction(a, b) {
            return a - b;
        };
        this.multiplication = function multiplication(a, b) {
            return a * b;
        };
        this.division = function division(a, b) {
            return a / b;
        };
    };
};

const myCalculator = new Calculator();

console.log(myCalculator.sum(6, 2));
console.log(myCalculator.subtraction(6, 2));
console.log(myCalculator.multiplication(6, 2));
console.log(myCalculator.division(6, 2));
