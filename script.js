let tabela = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
tabela.appendChild(thead);
tabela.appendChild(tbody);
document.getElementById("body").appendChild(tabela);

let categorias = document.createElement("tr");
let numeroUsuario = document.createElement("th");
numeroUsuario.innerHTML = "Número";
let nomeUsuario = document.createElement("th");
nomeUsuario.innerHTML = "Nome";
let pesoUsuario = document.createElement("th");
pesoUsuario.innerHTML = "Peso";
let alturaUsuario = document.createElement("th");
alturaUsuario.innerHTML = "Altura";
let imcUsuario = document.createElement("th");
imcUsuario.innerHTML = "Imc";

categorias.appendChild(numeroUsuario);
categorias.appendChild(nomeUsuario);
categorias.appendChild(pesoUsuario);
categorias.appendChild(alturaUsuario);
categorias.appendChild(imcUsuario);
thead.appendChild(categorias);

let numerotbl = 0

button = document.querySelector("#button").onclick = function(){
    nometbl = document.getElementById("tnome")
    nomeValor = nometbl.value
    pesotbl = document.getElementById("tpeso")
    pesoValor = parseInt(pesotbl.value)
    alturatbl = document.getElementById("taltura")
    alturaValor = parseFloat(alturatbl.value)

    if(nometbl.value.length>0 && pesotbl.value.length && alturatbl.value.length>0){
        let informaçoesUsuario = document.createElement("tr")

        let colunaNumero = informaçoesUsuario.insertCell(0)
        let colunaNome = informaçoesUsuario.insertCell(1)
        let colunaPeso = informaçoesUsuario.insertCell(2)
        let colunaAltura = informaçoesUsuario.insertCell(3)
        let colunaImc = informaçoesUsuario.insertCell(4)

        numerotbl ++

        let imc = (pesoValor/(alturaValor*alturaValor)).toFixed(2)

        let tipo = 0
        
        if(imc <= 18.4){
            tipo = "Abaixo do Peso"
        }
        else if(imc >= 18.5){
            tipo = "Peso Normal"
        }
        else if(imc >= 25){
            tipo = "Sobrepeso"
        }
        else if(imc >= 30){
            tipo = "Obesidade Grau 1"
        }
        else if(imc >= 35){
            tipo = "Obesidade Grau 2"
        }
        else if(imc >= 40){
            tipo = "Obesidade Grau 3 ou Mórbida"
        }

        colunaNumero.innerHTML = numerotbl
        colunaNome.innerHTML = nomeValor
        colunaPeso.innerHTML = pesoValor
        colunaAltura.innerHTML = alturaValor
        colunaImc.innerHTML = imc + " - " + tipo

        informaçoesUsuario.appendChild(colunaNumero);
        informaçoesUsuario.appendChild(colunaNome);
        informaçoesUsuario.appendChild(colunaPeso);
        informaçoesUsuario.appendChild(colunaAltura);
        informaçoesUsuario.appendChild(colunaImc);
        thead.appendChild(informaçoesUsuario);

        nometbl.value=""
        pesotbl.value=""
        alturatbl.value=""
    }
    else{
    alert("Preencha todos os campos!")
    }
}

// ESTILO

body = document.getElementById("body").style.backgroundColor="beige"
divm = document.getElementById("main")
divm.style.textAlign="center"
tabela.style.paddingTop="7vh"
tabela.style.width="80%"
tabela.style.paddingLeft="20vw"
tabela.style.textAlign="center"
thead.style.borderColor="black"
button = document.querySelector("#button").style.borderRadius="4px"
button = document.querySelector("#button").style.width="100px"
button = document.querySelector("#button").style.height="30px"
button = document.querySelector("#button").style.backgroundColor="aquamarine"
labeln = document.getElementById("labeln").style.paddingRight="10px"
labelp = document.getElementById("labelp").style.paddingRight="20px"
labela = document.getElementById("labela").style.paddingRight="10px"