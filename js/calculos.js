function funcionSumarRestar(){
    alert('Has elegido Suma y Resta');

    let numSum0 = parseFloat(prompt('ingresa un Numero'));
    let numSum1 = parseFloat(prompt('Ahora Otro'));
    
    if (isNaN(numSum0) || isNaN(numSum1)){
        alert('Eso no es un numero. Menos 10 puntos');
    } else{
        let resultadoSuma = numSum0 + numSum1;
        let resultadoResta = numSum0 - numSum1;
        alert('Tus Numeros '+numSum0+' y '+numSum1+' Suman '+resultadoSuma);
        alert('La Resta de '+numSum0+' y '+numSum1+' Dan '+resultadoResta);
    }
}

function funcionMultiplicar(){
    alert('Vamos a Multiplicar');
    
    let numMulti0 = parseFloat(prompt('Dame un numero'));
    let numMulti1 = parseFloat(prompt('Dame otro'));

    if (isNaN(numMulti0) || isNaN(numMulti1)){
        alert('Esto no es Algebra. Menos 10 puntos');
    } else{
        let resultadoMulti = numMulti0 * numMulti1;
        alert('La Multiplicación de '+numMulti0+' por '+numMulti1+' son '+resultadoMulti);
    }
}

function funcionDividir(){
    alert('A dividir entonces');
    
    let numDiv0 = parseInt(prompt('Numerito? Por Favor.'));
    let numDiv1 = parseInt(prompt('Me da Otro?.'));

    if (isNaN(numDiv0) || isNaN(numDiv1)){
        alert('ERROR--Letra Detectada--ERROR');
    } else if (numDiv0 === 0 || numDiv1 === 0) {
        alert('Quieres destruir tu PC? No puedes dividir entre Cero, por que es Infinito');
    } else{
        let resultadoDiv = Math.trunc(numDiv0 / numDiv1);
        let loQueSobra = numDiv0 % numDiv1;
        alert('La Division de '+numDiv0+' partido en '+numDiv1+' dan '+resultadoDiv+' y sobran '+loQueSobra);
    }
}

function funcionFactores(){
    alert('Has elegido encontrar Factores');

    let numFac0 = parseFloat(prompt('Ingresa un numero "De Preferencia: no mas de 7 Digitos"'));
    let arrayFactores = [];
    
    if (numFac0 === 0){
        alert('¡¿Como va a tener Factores el Cero?!, menos 0.000 Puntos');
    } else if (isNaN(numFac0)) {
        alert('!!NO LETRAS, SOLO NUMEROS, NUMEROS¡¡');
    } else

    for (let i = 1; i <= numFac0; i++){

        let buscando = numFac0 % i;

        if (buscando === 0){
            arrayFactores.push(i);
        }
    }
    alert('Los Factores de '+numFac0+' son '+arrayFactores.join(' - '))
}
