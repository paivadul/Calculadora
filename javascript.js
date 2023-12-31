const PESO = document.getElementById('peso'); // input
const CALCULAR = document.getElementById('Calcular'); // boton
const FLUJO = document.getElementById('flujo'); //resultado 1
const MANTENIMIENTO = document.getElementById('mantenimiento'); //resultado 2
const MANTENIMIENTOM2 = document.getElementById('mantenimientoM2'); //resultado 3
const ERROR = document.getElementById('error');

//add event listener es para que esté atento a detectar datos//
CALCULAR.addEventListener('click', () => {
    const PESO = document.getElementById('peso').value
        if (PESO <= 0) {
            ERROR.style.display = 'block';
            FLUJO.style.display = 'none';
            MANTENIMIENTO.style.display = "none";
            MANTENIMIENTOM2.style.display = "none";
          } 
             else if (PESO <= 30) {
         let flujo = Holliday(PESO);

            ERROR.style.display = 'none';

            FLUJO.innerHTML = flujo + 'cc'
            FLUJO.style.display = "block";
            
            MANTENIMIENTO.innerHTML = 'm ' + Math.round(flujo / 24) + 'cc/h'
            MANTENIMIENTO.style.display = "block";

            MANTENIMIENTOM2.innerHTML = 'm+m/2 ' + Math.round((flujo / 24) * 1.5)  + 'cc/h'
            MANTENIMIENTOM2.style.display = "block";

            console.log(Holliday(PESO), ' cc');
            console.log(Math.round(Holliday(PESO) / 24), ' cc/h');
            console.log("m+m/2 = ", Math.round((Holliday(PESO) / 24) * 1.5), ' cc/h');
          } 
             else if ( PESO > 30) {
         let result = superficie(PESO);
            ERROR.style.display = 'none';

            FLUJO.innerHTML = 'SC1 ' + Math.round(result * 1500) + ' cc';
            FLUJO.style.display = "block";
            
            MANTENIMIENTO.innerHTML = 'SC2 ' + Math.round(result * 2000) + ' cc';
            MANTENIMIENTO.style.display = "block";

            MANTENIMIENTOM2.style.display = 'none';

            console.log("Sc 1 = ", Math.round(result * 1500), ' cc/h');
            console.log("Sc 2 = ", Math.round(result * 2000), ' cc/h');
          }
        })


function Holliday(peso) {
    let resultado;
    if (peso > 20) {
        resultado = ((peso - 20) * 20) + 1500
    } else if (peso < 20 && peso > 10) {
        resultado = ((peso - 10) * 50) + 1000
    } else {
        resultado = peso * 100
    }
    return resultado
}

function superficie(peso) {
    let resultado = (((peso *4) + 7) / (peso + 90))
    return resultado
    }


/*NOTAS E INTENTOS. 

let boton = document.getElementById('Calcular'); //el botón
let dato = document.getElementById('peso'); //el imput
let flujo = document.getElementById('flujo'); //línea 17 en HTML. 1er resultado. Holliday
let mantenimiento = document.getElementById('mantenimiento') //línea 18. 2do resultado en cc/h. Holliday
let mantenimientoM2 = document.getElementById('mantenimientoM2'); //línea 19. 3er resultado en cc/h. Holliday

boton.addEventListener('click', eventoBoton);


function eventoBoton(){
  let peso = dato;
  let volumen;
  if (peso >= 30) {
    volumen = Holliday(peso);
  } else {
    volumen = superficie(peso);
  }
  console.log(volumen + ' cc');
}

function Holliday(peso) {
    let resultado;
    if (peso > 20) {
        resultado = ((peso - 20) * 20) + 1500
    } else if (peso < 20 && peso > 10) {
        resultado = ((peso - 10) * 50) + 1000
    } else {
        resultado = peso * 100
    }
    return resultado
}

function superficie(peso) {
  let resultado = (((peso *4) + 7) / (peso + 90))
  return resultado
  }*/


/* CON CHAT GPT
    const CALCULAR = document.getElementById('Calcular');
    const FLUJO = document.getElementById('flujo');
    const MANTENIMIENTO = document.getElementById('mantenimiento');
    const MANTENIMIENTOM2 = document.getElementById('mantenimientoM2');
    const ERROR = document.getElementById('error');
    
    CALCULAR.addEventListener('click', () => {
        const PESO_VALOR = parseFloat(document.getElementById('peso').value);
    
             if (PESO_VALOR = 0) {
                ERROR.innerHTML = 'Debe completar todos los datos'
                ERROR.style.display = "block";
    
             if (PESO_VALOR <= 30) {
                const flujo = Holliday(PESO_VALOR);
                FLUJO.innerHTML = flujo + " cc/h";
                FLUJO.style.display = "block";

                MANTENIMIENTO.innerHTML = (flujo / 24) + " cc/h";
                MANTENIMIENTO.style.display = "block";

                MANTENIMIENTOM2.innerHTML = ((flujo / 24) * 1.5 ) + " cc/h"
                MANTENIMIENTOM2.style.display = "block";

                console.log("Vol. diario = ", flujo, "cc/h");
                console.log("Mantenimiento = ", flujo / 24, "cc/h");
                console.log("Mantenimiento m+m/2 = ", (flujo / 24) * 1.5, "cc/h");
            } else {
                console.log("Superficie Corporal 1 = ", superficie(PESO_VALOR) * 1500, " cc/h");
                console.log("Superficie Corporal 2 = ", superficie(PESO_VALOR) * 2000, " cc/h");
            }
        }
    });
    
    function Holliday(peso) {
        if (peso > 20) {
            return ((peso - 20) * 20) + 1500;
        } else if (peso > 10) {
            return ((peso - 10) * 50) + 1000;
        } else {
            return peso * 100;
        }
    }
    
    function superficie(peso) {
        return (((peso * 4) + 7) / (peso + 90));
    }*/
