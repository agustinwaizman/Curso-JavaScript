let lista = [1, 2, 3, 4, 6, 7, 8]

for (let i = 0; i < lista.length; i++){
    if (lista[i]=== 4){
        continue;
    }
    console.log(lista[i]);
    if (lista[i] > 5){
        break;
    }
}