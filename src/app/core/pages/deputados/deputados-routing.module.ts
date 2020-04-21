import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeputadoComponent } from './deputado/deputado.component';
import { DeputadosComponent } from './deputados/deputados.component';

const routes: Routes = [
  { path: '', component: DeputadosComponent, canActivate: [] },
  { path: ':id', component: DeputadoComponent, canActivate: [] },
  // { path: 'novo', component: ContaFormComponent, canActivate: [AuthGuard] },
  // { path: 'edit/:id', component: ContaFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeputadosRoutingModule { }
