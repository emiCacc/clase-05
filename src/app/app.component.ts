import { Component } from '@angular/core';
import { Usuario } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalVisible: boolean = false;
  title = 'clase-05';

  usuariosAprobados: Usuario[] = [
    {
      firstName: 'Anna',
      lastName: 'Gonzales',
    },
    {
      firstName: 'Jacke',
      lastName: 'Williams',
    },
  ];
  usuariosDesaprobados: Usuario[] = [
    {
      firstName: 'Cynthia',
      lastName: 'Gonzales',
    },
    {
      firstName: 'Michael',
      lastName: 'Williams',
    },
    {
      firstName: 'Matias',
      lastName: 'Simpson',
    },
  ];

  deleteUser(index: number, arrayName: 'usuariosAprobados' | 'usuariosDesaprobados'): void {
    console.log('Usuario eliminado de la posicion' + index);

    if (arrayName === 'usuariosAprobados'){
      this.usuariosAprobados = this.usuariosAprobados.filter(
        (el, i) => i !== index
        );
    }

    else if (arrayName === 'usuariosDesaprobados'){
      this.usuariosAprobados = this.usuariosAprobados.filter(
        (el, i) => i !== index
        );
    }

  }

}