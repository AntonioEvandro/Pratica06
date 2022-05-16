const ola = document.querySelector("#exemplo1")

/*//Errada
ola.addEventListener("click",alert ("Olá!"))
*/

/*//certa
ola.addEventListener("click", function(){
    alert("Olá!")
})
*/

/*//outra certa
function cumprimentar (){
    let nome = prompt("Qual seu nome?")
    alert("Olá," + nome)
}
ola.addEventListener("click", cumprimentar)
*/

