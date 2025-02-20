import { institucionService } from './../institucion.service';
import { Component, OnInit } from '@angular/core';
import { Institucion } from '../institucion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-instituciones',
  templateUrl: './lista-instituciones.component.html',
  styleUrls: ['./lista-instituciones.component.css']
})
export class ListaInstitucionesComponent implements OnInit {
  instituciones: Institucion[];

  constructor(private institucionServicio:institucionService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerInstitucion();
  }

  actualizarInstitucion(id:number){
    this.router.navigate(['actualizar-institucion',id]);
  }

  private obtenerInstitucion(){
    this.institucionServicio.obtenerListaDeInstituciones().subscribe(dato => {
      this.instituciones = dato;
    });
  }


}
