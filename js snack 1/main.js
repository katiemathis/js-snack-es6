//Creare un array di oggetti descrivendo nome e peso

const bici = [
    {
        nome: 'Alan Corsa',
        peso: 2,
    },

    {
        nome: 'Bianchi Specialissima',
        peso: 7,
    },

    {

        nome: 'Huffy Cruiser',
        peso: 15,
    }


];

//crea una funzione che calcola la bici che pesa di meno

function biciPiuLeggero(myArrayOfBici) {
    let {peso,nome} = myArrayOfBici[0];


    for(let i=0; i<myArrayOfBici.length;i++) {
        if (peso > myArrayOfBici[i].peso){
            peso = myArrayOfBici[i].peso;
            nome = myArrayOfBici[i].nome;
        }
    }

    let risultato= `La bici più leggera è la ${nome} che pesa soltanto ${peso} kg.`;

    return risultato;

};

let consoleMessage = biciPiuLeggero(bici);
console.log(consoleMessage);