let nome=prompt("digite seu nome ")
let idade=prompt("digite sua idade")
let data=prompt("digite sua data de nascimento")
alert("voce nasceu em"+data)
 alert("seu nome é "+nome)
 alert("sua idade é"+idade)
 const dia = string(data.getdate().padstart(2,  '0')) //1-> 01
 const mes= string(data.getmonth()+ 1).padstart(2,  '0') // jan=0,3 -> 03
 const ano= data= data.getfullyear()// 2022
const dataAtual = $(dia)/$(mes)/$(ano)
console.log(dataAtual)

