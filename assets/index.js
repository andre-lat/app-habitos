// ! FECHAS
let fechaSpan = document.getElementById('fecha');

function fechaHoy() {
    // let d = new date('Y-m-d H:i:s');
    let dias = ['Domingo', 'Lunes', 'Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let g = new Date().getDay();
    let d = new Intl.DateTimeFormat('es');
    let f = d.formatToParts();
    fechaSpan.innerHTML += dias[g] + ' ';

    for (let i = 0; i < f.length; i++) {
        const element = f[i];
        // element.value = element.value == '/' ? ' de ' : element.value;
        element.value = i == 1 ? ' de ' : element.value;
        if (i == 3) {
            element.value = ' del ';
        }
        if (i == 2) {
            fechaSpan.innerHTML += acomodarFecha(element.value);
        }else{
            fechaSpan.innerHTML += element.value;
        }
        
    }
    // fechaSpan.innerHTML = f[0].value + f[1].value + acomodarFecha(f[2].value) + f[3].value + f[4].value;
    console.log(f);
    console.log(f[0]);
}
fechaHoy();
function acomodarFecha(mes) {

    mes = mes == 1 ? 'Enero' : mes;
    mes = mes == 2 ? 'Febrero' : mes;
    mes = mes == 3 ? 'Marzo' : mes;
    mes = mes == 4 ? 'Abril' : mes;
    mes = mes == 5 ? 'Mayo' : mes;
    mes = mes == 6 ? 'Junio' : mes;
    mes = mes == 7 ? 'Julio' : mes;
    mes = mes == 8 ? 'Agosto' : mes;
    mes = mes == 9 ? 'Septiembre' : mes;
    // mes = mes == 10 ? `Octubre (Mes ${mes}) ` : mes;
    mes = mes == 10 ? `Octubre` : mes;
    mes = mes == 11 ? 'Noviembre' : mes;
    mes = mes == 12 ? 'Diciembre' : mes;
    return mes;
    // switch (mes) {
    //     case 1:
    //         mes = Enero;
    //         break;
    //     case 1:
    //         mes = Enero;
    //         break;
    //     case 1:
    //         mes = Enero;
    //         break;
    //     case 1:
    //         mes = Enero;
    //         break;
    //     case 1:
    //         mes = Enero;
    //         break;
    //     case 1:
    //         mes = Enero;
    //         break;
    //     case 1:
    //         mes = Enero;
    //         break;
    //     case 1:
    //         mes = Enero;
    //         break;
    
    //     default:
    //         break;
    // }
}

// ! SELECT
let habitsArray = document.querySelectorAll('input[type=checkbox]');

console.log(habitsArray);

let defaultSelect = 0;
// document.addEventListener('keypress', function(e) {
document.addEventListener('keydown', function(e) {
    // e.value
    console.log('Inicia: ' + defaultSelect);
    console.log(habitsArray.length);
    if (e.key == 'ArrowUp' && defaultSelect > 0) {

        // defaultSelect--;
        putArrow(--defaultSelect);
        console.log(defaultSelect);
    }
    if (e.key == 'ArrowDown' && defaultSelect < (habitsArray.length - 1)) {
        
        // defaultSelect++;
        putArrow(++defaultSelect);
        console.log(defaultSelect);

    }
    console.log(e);
    console.log(e.code);
    console.log(e.key);

    if (e.key == ' ') {
        habitsArray[defaultSelect].click();
    }
});

function putArrow(where) {
    habitsArray.forEach(element => {
        element.classList.remove('select');
    });
    habitsArray[where].classList.add('select');

}
putArrow(defaultSelect);
