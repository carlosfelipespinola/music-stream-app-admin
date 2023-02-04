import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MusicsComponent } from './musics/musics.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'musics', component: MusicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
