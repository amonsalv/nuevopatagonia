import { Component } from '@angular/core';

import { Habitacion } from '../interfaces/Habitacion';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})

export class HabitacionesComponent {

  public habitacion1:Habitacion={
    nombre:"Cabaña rustica comodity",
    foto:["https://firebasestorage.googleapis.com/v0/b/hotellunesjjg.appspot.com/o/hotel11.webp?alt=media&token=5f650d4f-77a2-4c50-8be9-42415b110159","gs://hotellunesjjg.appspot.com/hotel12.jpg"],
    descripcion:"Cabaña con 2 camas, cocina y comedor",
    precioNoche:250,
    cantidadMaxima:5
  }

  public habitacion2:Habitacion={
    nombre:"Cabaña del encanto",
    foto:["https://firebasestorage.googleapis.com/v0/b/hotellunesjjg.appspot.com/o/hotel11.webp?alt=media&token=5f650d4f-77a2-4c50-8be9-42415b110159","gs://hotellunesjjg.appspot.com/hotel12.jpg"],
    descripcion:"Cabaña con 4 camas, cocina comedor y baños termales",
    precioNoche:450,
    cantidadMaxima:7
  }

  public habitaciones:Habitacion[]=[this.habitacion1,this.habitacion2,this.habitacion1,this.habitacion2,this.habitacion1,this.habitacion2,this.habitacion1,this.habitacion2]

  public constructor(){
    console.log(this.habitaciones)
  }

}
