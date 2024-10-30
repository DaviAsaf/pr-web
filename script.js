function calcular(){
    let metros = Number(document.getElementById("metros").value);
    let tempo = Number(document.getElementById("tempo").value); 
    let velocidade = metros/tempo;
    document.getElementById("resultado").innerHTML = `A velocidade média é: ${velocidade} m/s`
}