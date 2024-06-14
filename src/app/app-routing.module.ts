import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloComponent } from '../app/modulo/modulo.component';

const routes: Routes = [
  { path: 'client-modules', component: ModuloComponent },
  { path: '', redirectTo: '/client-modules', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
