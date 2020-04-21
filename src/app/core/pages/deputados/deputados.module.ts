import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeputadosRoutingModule } from './deputados-routing.module';
import { DeputadoItemComponent } from './deputado-item/deputado-item.component';
import { DeputadosComponent } from './deputados/deputados.component';
import { DeputadoComponent } from './deputado/deputado.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [DeputadoItemComponent, DeputadosComponent, DeputadoComponent],
  imports: [
    CommonModule,
    DeputadosRoutingModule,
    HttpClientModule
  ]
})
export class DeputadosModule { }
