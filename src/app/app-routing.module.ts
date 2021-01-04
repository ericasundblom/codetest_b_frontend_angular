import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculateComponent } from './components/calculate/calculate.component';

const routes: Routes = [
  { path: '', component: CalculateComponent },
  { path: '**', redirectTo: ''} //catch much of the rest people enter and redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
