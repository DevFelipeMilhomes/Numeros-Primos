let numero = 1
const primos = [2]
//troque o numero 100 abeixo pelo numero que vocẽ quer que o programa
// encontre os primos abixo desse mesmo numero.
//por exemplo poderia trocar o numero abaixo por 1000
// para que o programa encontre todos os primos antes de 1000
while (numero<100){
    let ePrimo = true
    numero += 1
    primos.map((elemento)=>{
        if(numero!=elemento){
            if(numero/elemento == Math.floor(numero/elemento)){
                ePrimo = false
            }
            
        } else {
            ePrimo = false
        }
    
    })
    if(ePrimo==true){
                primos.push(numero)
            }
}
console.log(primos)