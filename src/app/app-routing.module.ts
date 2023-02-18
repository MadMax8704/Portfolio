import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSuccesComponent } from './email-succes/email-succes.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'success', component: EmailSuccesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

