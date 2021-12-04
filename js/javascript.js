//  Repeticao dos nomes no alert com while //
 
// let numero = 0;
// let condicao = 'teste';
// let pessoas = ['Jao' ,'Pedro', 'Lucas', 'Maria'];

// if(condicao == 'teste'){
//     console.log('fase 1')
//     while( numero <= 3){
//         console.log('fase 2')
        
//         switch(numero){
//             case numero:
//                 alert(`Ola, ${pessoas[numero]}`)
//             break;
//         }
//     numero++;
//     }
// }  



//  Repeticao dos nomes no alert com for //

// let numero = 0;
// let condicao = 'teste';
// let pessoas = ['Jao' ,'Pedro', 'Lucas', 'Maria'];

// if(condicao == 'teste'){
//     console.log('fase 1')
//         for(numero = 0; numero <= 3; numero++){
//         console.log('fase 2')
        
//         switch(numero){
//             case numero:
//                 alert(`Ola, ${pessoas[numero]}`)
//             break;
//         }
//     }
// }  



// let condicao = 'teste';
// let pessoas = ['Jao' ,'Pedro', 'Lucas', 'Maria'];

// if(condicao == 'teste'){
//     console.log('fase 1')
//         // for(numero = 0; numero <= 3; numero++){
//             do{
//                 let pessoas = ['Ana' ,'Arthur'];
//                 var numero = 0;
//         console.log('fase 2')
        
//             }while(numero <= 3){
//             case numero:
//                 alert(`Ola, ${pessoas[numero]}`)
//             break;
//         }
//     }











//     switch(pessoas){
//     case 0:
//         alert(`${pessoas[0]}`)
//     break;
//     case 1:
//     break;
//     case 2:
//     break;
//     case 3:
//     break;
//     default:
//     break;
// }
// }
//  console.log(pessoas [2])

// while (numero < 10){
//     numero++;
//     alert('Esse é o numero ' + numero);
//     alert(`Esse é o numero ${numero}`);
//     console.log(numero);
// }

// for(numero = 0; numero < 10; numero ++){
//     console.log(numero)
//     alert('numero' + numero)
// }

// do {
//     console.log(numero);
//     alert('Ele passou por aqui');
//     numero++;
// } while(numero < 10) {
//     alert(`Esse é o numero ${numero}`);
// }






let resultado = document.getElementById('tabuada');
for(let numero = 1; numero <= 10; numero=numero+1){
    for(let multiplica = 0; multiplica <= 10; multiplica=multiplica+1){
        let multiplicacao = numero * multiplica;
        let linha = "" + numero + "*" + multiplica + "=" + multiplicacao + "<br>";
        resultado.innerHTML += (linha);
    }
}