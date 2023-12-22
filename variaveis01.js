let valores = [0,3,5,7,6,2,8,4]
valores.sort()
let pos = valores.indexOf(8)
//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7])
*/  
/*or(let pos=0; pos< valores.length;pos++){
    console.log(`A Posição ${pos} Tem O Valor ${valores[pos]} `)
}*/
for(let pos in valores){
    console.log(`A Posição ${pos} Tem O Valor ${valores[pos]}`)
}
console.log(`O Valor 8 Esta na possicão ${pos}` )