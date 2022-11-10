// Definisco contenitore e quadrato
let contenitore = document.querySelector(".container");


// Creo il ciclo
for (let n = 1; n <= 100; n++){
    // Definisco quadrato
    const quadrato = document.createElement("div"); 
    // Ogni volta che il ciclo viene ripetuto creo un div
    contenitore.append(quadrato);
    // Do la classe box al quadrato
    quadrato.classList.add("box") 

    let RestoTre = n % 3;
    let RestoCinque = n % 5;

    if ((RestoTre === 0) && (RestoCinque === 0)){

        quadrato.classList.add("red");
        quadrato.append("FizzBuzz");

    }

    else if (RestoTre === 0){

        quadrato.classList.add("green");
        quadrato.append("Fizz");

    }
    else if (RestoCinque === 0){

        quadrato.classList.add("yellow");
        quadrato.append("Buzz");
    }
    else {

        quadrato.classList.add("blue");
        quadrato.append(n);
 
    }
     
}