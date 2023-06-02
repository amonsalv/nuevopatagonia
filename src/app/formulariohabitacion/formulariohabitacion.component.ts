import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-formulariohabitacion',
  templateUrl: './formulariohabitacion.component.html',
  styleUrls: ['./formulariohabitacion.component.css']
})
export class FormulariohabitacionComponent {

  public formulario:FormGroup
  public datosFormulario:any[]=[]

  public constructor(public constructorFormulario:FormBuilder){
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

}
