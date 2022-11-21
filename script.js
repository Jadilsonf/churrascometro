let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    console.log(qtdTotalCarne);

    let qtdTotalCerveja = cervejaPP(duracao) * adultos
    console.log(qtdTotalCerveja);

    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)
    console.log(qtdTotalBebidas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garragas de Bebidas (2L)</p>`

}

function carnePP(duracao){
    if (duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}

function bebidasPP(duracao){
        if (duracao >= 6){
            return 1500
        }else{
            return 1000
        }
    }
