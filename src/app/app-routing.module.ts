import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { FactorialComponent } from './factorial/factorial.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'add', component:AdditionComponent},
  {path:'sub', component:SubstractionComponent},
  {path:'factorial', component:FactorialComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
