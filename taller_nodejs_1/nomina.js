module.exports = {
    obtenerDiasVacaciones,
    obtenerTotalAportesLegales
}

function obtenerDiasVacaciones(totalMesesLaborados){
    this.diasVacaciones = (totalMesesLaborados * 15)/12 ;
    return 'Usted tiene ' + this.diasVacaciones + ' dias de vacaciones al dia de hoy';
}

function obtenerTotalAportesLegales(sueldoMensual){
    this.totalAportes = sueldoMensual*0.12;
    return 'El total de sus aportes es: ' + this.totalAportes;
}