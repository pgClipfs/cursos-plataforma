import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './lista-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormAbmAlumnosModule } from '../form-abm-alumnos/form-abm-alumnos.module';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    ListaAlumnosComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormAbmAlumnosModule,
    MatMenuModule,
    SharedModule,

  ],
  exports: [
    ListaAlumnosComponent
  ],
})
export class ListaAlumnosModule { }
