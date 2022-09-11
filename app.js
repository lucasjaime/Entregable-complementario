const bebidas = [
    'Coca Cola',
    'Sprite',
    'Agua',
    'Fanta',
    'Levite',
    'Agua con gas'
]
const comidas = [
    'Hamburguesa',
    'Papas con Chedar',
    'Fideos',
    'Omelette',
    'Capeletis',
    'Ojos de bife',
    'Ensalada',
    'Pollo al disco',
    'Polenta'
]
let menu = confirm('Desea consultar nuestro menu?');
if(menu){
    let valido = true
    do{
        let menuOpciones = prompt('Desea ver nuestra carta de bebidas o comidas?')
        if(menuOpciones.toLowerCase() == 'bebidas'){
            alert('En la consola puede ver nuestras bebidas')
            console.log(bebidas);
            valido = false;
        }else if(menuOpciones.toLowerCase() == 'comidas'){
            alert('En la consola puede ver nuestras comidas')
            console.log(comidas);
            valido = false;
        }else{'Por favor ingrese un valor válido'}
    }while(valido);
}else{}
let agregar = confirm('Desea agregar algo al menu?')
if(agregar){
    let valido = true
    do{
        let agregarOpciones = prompt('Desea agregar algo en comidas o bebidas?')
        if(agregarOpciones.toLowerCase() == 'comidas'){
            let comidaExtra = prompt('Qué desea agregar al menú?')
            comidas.push(comidaExtra);
            alert('En la consola se mostrará el menu con su modificación')
            console.log(comidas)
            valido = false
        }else if(agregarOpciones.toLowerCase()=='bebidas'){
            let bebidaExtra = prompt('Que desea agregar al menú?')
            bebidas.push(bebidaExtra)
            alert('En la consola se mostrará el menu con su modificación');
            console.log(bebidas);
            valido = false
        }else{alert('Por favor introduce un valor válido')}
    }while(valido)
}else{}