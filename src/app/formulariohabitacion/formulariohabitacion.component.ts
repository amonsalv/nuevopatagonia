import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { HabitacionService } from '../services/habitacion.service';

@Component({
  selector: 'app-formulariohabitacion',
  templateUrl: './formulariohabitacion.component.html',
  styleUrls: ['./formulariohabitacion.component.css']
})
export class FormulariohabitacionComponent {

  public formulario:FormGroup
  public datosFormulario:any[]=[]

  public constructor(public constructorFormulario:FormBuilder,public servicio:HabitacionService){
    this.formulario=this.inicializarFormulario()
  }

  public inicializarFormulario():FormGroup{
    return this.constructorFormulario.group({
      nombre:[''],
      foto:[''],
      descripcion:[''],
      precioNoche:[''],
      cantidadmaxima:['']
    })
  }

  public procesarDatos():void{

    let datos=this.formulario.value
    
    this.servicio.registrarHabitacion(datos)
    .subscribe((respuesta)=>{
      console.log(respuesta)
    })

  }


}
