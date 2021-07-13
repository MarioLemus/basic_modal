// ``'use strict';
// const BR = "<br/>";


// const saludar = (name) => !name ? '' :  document.write(`Hola como estas, ${name}!`)
// saludar('mario');

// const BR_TAG_LIMIT_WARNING = `${BR} More than 20 jumps in line are not available ${BR}`;
// const inLineBrTag = (amount=1) => amount >= 20 ? document.write(BR_TAG_LIMIT_WARNING) : document.write(BR.repeat(amount));


// const obj = [
//     {name: "mario", dia: "lunes"},
//     {name: "ramon", dia: "miercoles"}
// ];

// inLineBrTag(21);
// obj.filter(e=> document.write(e.name + inLineBrTag()))


// inLineBrTag(2);
// const arr = ['mcclaren ', 'masserati ', 'ferrari '];

// for (let i = 0; i < arr.length; i ++){
//     document.write(`${i} ${arr[i]}` + inLineBrTag());
// }

// inLineBrTag(2);
// document.write(['destructuring con operador rest, para el array: ', ...arr])



// inLineBrTag(2);
// const arrayComoParametro = [2, 2, 2, 2, 2];

// const sumar5NumerosProvenientesDeUnArrayComoParametro = (num1=0, num2=0 ,num3=0, num4=0, num5=0) => {
//     document.write(num1 + num2 + num3 + num4 + num5);
// }
// sumar5NumerosProvenientesDeUnArrayComoParametro(...arrayComoParametro);

// inLineBrTag(2);

// const object2 = [
//     {color: "red ", plate: " deep fried macarella"},
//     {color: "violet ", plate: " lettuce cause i am vegan"},
//     {color: "purh ", plate: " uvca"}
// ]
// object2.filter(result => result.color.length > 3 && result.plate.length > 3 && document.write(result.color + inLineBrTag() + result.plate))

// inLineBrTag(2);
// document.write('hola');``

const modal = document.getElementById('modal');
const modalOpen = document.getElementById('modal_open');
const modalClose = document.getElementById('modal_close');
const modalContent = document.getElementById('modal_content');


const modalHandler = (status=false) => {
    
    status ? 
(modal.removeAttribute('style')) : (modal.setAttribute('style', 'display: none'))  

}
modalHandler();

modalOpen.addEventListener('click', () => modalHandler(true))
modalClose.addEventListener('click', () => modalHandler(false))



