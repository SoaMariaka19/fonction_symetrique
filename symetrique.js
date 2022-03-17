//fonction vérifiant si un tableau d'entiers est symétrique (qui se lit de la même manière dans les deux sens)

function symetrique(tab){

    for(let i = 0;i < tab.length / 2 ;i++ ){
        if(tab[i] != tab[tab.length-1-i])
                return false;
        }
    return true;
}

let tab = [1,2,2,1]

console.log(symetrique(tab));