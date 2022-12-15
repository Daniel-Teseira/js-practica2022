// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1=parseInt(prompt("Ingrese el primer numero"))
let numero2=parseInt(prompt("Ingrese el segundo numero"))
let numero3=parseInt(prompt("Ingrese el tercer numero"))


if (numero1>numero2 && numero1>numero3) {
  document.write("El mayor numero el primer numero ingresado y es " + numero1)

}
if (numero2>numero1 && numero2>numero3){
  document.write("El mayor numero el segundo numero ingresado y es " + numero2)
} 

if (numero3>numero1 && numero3>numero2){
  document.write("El mayor numero el tercer numero ingresado y es " + numero3)
}