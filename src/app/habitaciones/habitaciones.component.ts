import { Component } from '@angular/core';

import { Habitacion } from '../interfaces/Habitacion';
import { HabitacionService } from '../services/habitacion.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})

export class HabitacionesComponent {

  public habitaciones?:Habitacion[]=[]

  public constructor(public servicioHabitacion:HabitacionService){
    servicioHabitacion.buscarHabitaciones()
    .subscribe(respuesta=>{
      console.log(respuesta)
      this.habitaciones=respuesta.habitaciones
    })

  }

}
