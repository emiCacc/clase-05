import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements AfterViewInit {
  @Input() usuarios: Usuario[] = [];
  @Output()deleteUser = new EventEmitter();
  @ViewChild('myList') myList?: ElementRef;
  
  constructor() {
    console.log('Contructor', this.myList);
  }
  
  ngOnInit(): void {
    console.log('OnInit', this.myList);
  }
  
  ngAfterViewInit(){
    console.log('After view init', this.myList);
  }

}
