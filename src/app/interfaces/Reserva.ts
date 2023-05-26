export interface Reserva{
    nombreCliente:String,
    apellidoCliente:string,
    telefono:number,
    fechaInicio:Date,
    fechaFinal:Date,
    cantidadPersonas:number,
    idHabitacion:string,
    costoReserva?:number
}