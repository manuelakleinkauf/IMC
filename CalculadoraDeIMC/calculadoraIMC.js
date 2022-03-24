let tdbody=document.querySelector("#corpo");
document.querySelector("#calcular").onclick=function(){
    let nome = document.querySelector("#nome").value;
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc= (peso/(altura*altura)).toFixed(2);

    let resultado;
    if (imc<18.5) {
        resultado=document.createTextNode("Abaixo do peso");
    }else if(imc>18.5 && imc<24.9){
        resultado=document.createTextNode("Normal");
    }else if(imc>25.0 && imc<29.9){
        resultado=document.createTextNode("Sobrepeso");
    }else if(imc > 30 && imc < 34.9){
        resultado=document.createTextNode("Obesidade Grau I");
    }else if(imc > 35.0 && imc < 39.9){
        resultado=document.createTextNode("Obesidade Severa Grau II");
    }else if(imc = 40 && imc > 40.0){
        resultado=document.createTextNode("Obesidade Mórbida Grau III");
    }


    let tr=document.createElement("tr");
    let tdNome= document.createElement("td");
    let tdPeso= document.createElement("td");
    let tdAltura= document.createElement("td");
    let tdIMC= document.createElement("td");
    let tdResultado= document.createElement("td");
    
    
    tdNome.append(nome);
    tdPeso.append(peso);
    tdAltura.append(altura);
    tdIMC.append(imc);
    tdResultado.append(resultado);
    
    tr.append(tdNome);
    tr.append(tdPeso);
    tr.append(tdAltura);
    tr.append(tdIMC);
    tr.append(tdResultado);

  
    tdbody.append(tr);
}
document.getElementById("limpar").onclick = function(){
    location.reload();  
}