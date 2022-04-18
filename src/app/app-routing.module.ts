import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabalhosComponent } from './views/trabalhos/trabalhos.component'

const routes: Routes = [
  { path:"trabalhos", component: TrabalhosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
