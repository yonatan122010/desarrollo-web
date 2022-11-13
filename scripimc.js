const calcular = document.getElementById('calcular')



function imc() {
  const nome = document.getElementById('nombre').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');


  if (nome !== '' && altura !== '' && peso !== '') {

    const valorIMC = (peso / (altura * altura)).toFixed(1);
     if (valorIMC<18.5) {
      resultado.textContent =  `buenas ${nome}, come, estas desnutrido: ${valorIMC}` 
     }
     else
     if (valorIMC<25 ) {
      resultado.textContent =  `buenas ${nome}, felicidades,tienes peso ideal, su IMC: ${valorIMC}`

     }
     else if (valorIMC<30) {
      resultado.textContent =  `buenas) ${nome}, te estas pasando ,cuidado! su IMC: ${valorIMC}`
     }

     else if (valorIMC<35) {
      resultado.textContent =  `buenas ${nome}, te veo mal ,no escuchas y solo comes, su IMC: ${valorIMC}`

     } else if (valorIMC<40){
      resultado.textContent =  `buenas ${nome}, mal mal mal,ya te veo rodando su IMC: ${valorIMC}`

     }
     else {
      resultado.textContent =  `buenas ${nome}, ADIOS GORDO su IMC: ${valorIMC}`
     }


    





   
  } else {
    resultado.innerHTML = 'LLENA TODOS LOS CAMPOS!!!';
    
    
  }




}




calcular.addEventListener('click', imc);