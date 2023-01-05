// Merge Sort - Separa o todo, organiza e o funde
const listaLivros = [
    {
      titulo: "Go",
      preco: 45
    },
    {
      titulo: "C++",
      preco: 35
    },
    {
      titulo: "Java",
      preco: 30
    },
    {
    titulo: "PHP",
    preco: 15
    },
    {
      titulo: "Elixir",
      preco: 50
    },
    {
      titulo: "Rust",
      preco: 22
    },
    {
      titulo: "Scala",
      preco: 40
    },
    {
      titulo: "Ruby",
      preco: 28
    },
    {
      titulo: "JavaScript",
      preco: 25
    },
    {
      titulo: "C#",
      preco: 33
    },
    {
      titulo: "Python",
      preco: 20
    },
]

/*
function revisandoInsertionSort(lista) {
    for(let i = 0; i < lista.length; i++) {
        while(i > 0 && lista[i].preco < lista[i - 1].preco) {
            let atual = lista[i];
            let anterior = lista[i - 1];

            lista[i] = anterior;
            lista[i - 1] = atual;

            i--
        }
    }
    return lista;
}

console.log(revisandoInsertionSort(listaLivros));
*/

// Recursão
function mergeSort(lista) {
    if(lista.length > 1) {
        let meio = Math.floor(lista.length/2);  // Arredonda o número para baixo!
        
        let parte1 = mergeSort(lista.slice(0, meio));
        let parte2 = mergeSort(lista.slice(meio, lista.length)); 

        lista = ordena(parte1, parte2);
    }

    return lista;
}

//Algoritmo de juntar listas melhorado!
function ordena(parte1, parte2) {
    let indiceParte1 = 0;
    let indiceParte2 = 0;
    let resultado = [];

    while(indiceParte1 < parte1.length && indiceParte2 < parte2.length) {
        let posicaoParte1 = parte1[indiceParte1];
        let posicaoParte2 = parte2[indiceParte2];

        if(posicaoParte1.preco < posicaoParte2.preco) {
            resultado.push(posicaoParte1);  // 'push' sempre manda para o final do array
            indiceParte1++;
        } else{
            resultado.push(posicaoParte2);
            indiceParte2++;
        }
    }

    return resultado.concat(indiceParte1 < parte1.length
        ? parte1.slice(indiceParte1)
        : parte2.slice(indiceParte2));
}


console.log(mergeSort(listaLivros));
