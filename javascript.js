let peso = 32;

if (peso <= 30) {
    console.log('Vol. diario = ', Holliday(peso))
    console.log('Mantenimiento = ', (Holliday(peso) /24), 'cc/h')
    console.log('Mantenimiento m+m/2 = ', ((Holliday(peso) /24) *1.5), 'cc/h')
} else {
    console.log('Superficie Corporal 1 = ', (superficie(peso)*1500), ' cc/h')
    console.log('Superficie Corporal 2 = ', (superficie(peso)*2000), ' cc/h')
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
    }