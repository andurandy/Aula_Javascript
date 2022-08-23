//alert("Meu primeiro JS!");

/*
var nome = "Morrisson";
var idade = 39;
alert ("Seu nomme é " + nome + " e você tem " + idade + " anos de idade");
*/

/*
var idade = 10
var idade2 = 29
console.log (idade + idade2)

var frase = "Japão é o melhor time do mundo";
//alert (frase.toUpperCase.replace ("JAPÃO", "Brasil"));
alert (frase.replace ("Japão", "Brasil")); // Troca no nome japão pelo brasil
alert (frase.toUpperCase ("Japão", "Brasil")); //Deixa as letras maiusculas
alert (frase.toLowerCase ("Japão", "Brasil")); //deixa as letras menusculas
console.log (frase.replace ("Japão", "Brasil")); // Troca no nome japão pelo brasil (no console)
*/

/*
//  Array
var lista = ["maça", "pera", "uva"]; 
//lista.push ("Laranja"); //Incluir na lista (console)
//lista.pop (); //retira o ultimo da lista (console)
//console.log (lista.length); //Conta quantidade de lista tem
//console.log (lista.reverse()) //Mostra a lista de tras para frente
//console.log (lista.toString()); //transfoma em string e deixa de ser um array | pode ser usando para mostra a primera letra console.log (lista.toString()[1]);
//console.log (lista.join(" - ")); // Ja transforma em string e vc pode fazer a separação com qualquer icone dendro das aspas
console.log (lista);
console.log (lista);
//alert (lista[1]);
*/


/*
// Dicionario
var fruta = {nome:"Maça", cor:"vermelha"};
console.log (fruta.nome);
alert (fruta.cor);

var frutas = [{nome:"Maça", cor:"vermelha"}, {nome:"Uva", cor:"roxa"}, {nome:"pera", cor:"amarela"}]
console.log (frutas[1].nome);
alert (frutas[1].nome);
*/


/*
// Condicionais (if / else)
var idade = prompt("qual a sua idade: ");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
// Laços de repetição (while ou for)
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count = count + 1; //ou count++;
};

var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
// Date
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());

var d = new Date();
console.log ("Hoje é "+ d.getDate()+ "/" + (d.getMonth()+1));
alert("Hoje é "+ d.getDate()+ "/" + (d.getMonth()+1));
*/

/*
// Function
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai Ja", "Japão", "Brasil"));

//ou

function validaidade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    } 
    return validar;
}

var idade = prompt("Qual a sua idade? ");
console.log(validaidade(idade));
*/

function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</d>";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por Clicar");
}

function redirecionameto(){
    window.open("https://open.spotify.com/"); // abrir em outra janela
    //window.location.href("https://open.spotify.com/"); //abrir na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML  = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar Texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML  = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada.")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}