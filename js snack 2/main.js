//crea un array con squadre di calcio: nome, punti fatti, falli subiti

const squadre = [
    {
        nome: 'San Diego Wave',
        punti: 0,
        falli: 0,

    },

    { 
        nome: 'Chicago Red Stars',
        punti: 0,
        falli: 0,
    },

    {
        nome: 'US Womens National Soccer Team',
        punti: 0,
        falli: 0,
    },
];
console.log(squadre);

//generare numero random


function getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
    
}

//crea function per vedere le stats di tutte le squadre 

function falliPerSquadra(myArray) {

    const falliTotali = [];
    

    for (let i = 0; i < myArray.length; i++) {

        myArray[i].punti = getRandomInt(1,100);
        myArray[i].falli = getRandomInt(1,50);

        const {nome, falli} = myArray[i];
 
        console.log({nome, falli})

        falliTotali.push({nome, falli})
        
    }

    return falliTotali;
   
}

const recap = falliPerSquadra(squadre);
console.log(recap);

