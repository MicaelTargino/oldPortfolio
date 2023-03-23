

var hamburguer = document.querySelector('.hamburguer');
var container = document.querySelector(".container-all") 

hamburguer.addEventListener("click", function() {
   container.classList.toggle("show-menu");
});


document.querySelector('#qtde').addEventListener('change', atualizarPreco)
document.querySelector('#js').addEventListener('change', atualizarPreco)
document.querySelector('#layout-sim').addEventListener('change', atualizarPreco)
document.querySelector('#layout-nao').addEventListener('change', atualizarPreco)
document.querySelector('#prazo').addEventListener('change', function() {
   const prazo = document.querySelector('#prazo').value
   var semanas = ''
   if(prazo > 1) {
      var semanas = 'semanas'
   } else {
      var semanas = 'semana.'
   }
   document.querySelector("label[for=prazo]").innerHTML = `Prazo de ${prazo} ${semanas}`
   atualizarPreco()
})

function atualizarPreco() {
const temJS = document.querySelector('#js').checked
const precoWrapper = document.querySelector('#preco')
const qtde = document.querySelector('#qtde').value
const prazo = document.querySelector('#prazo').value
const incluiLayout = document.querySelector('#layout-sim').checked



let preco = qtde * 100
if(temJS) preco *= 1.1
if(incluiLayout == true) preco += 500
let taxaUrgencia = 1 - prazo*0.1
preco *= 1 + taxaUrgencia

precoWrapper.innerHTML = `R$ ${preco.toFixed(2)}`


}


function redirect(req, res) {
   return res.render("index.html")
}