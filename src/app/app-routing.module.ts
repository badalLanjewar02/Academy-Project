import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInfoComponent } from './Home/home-info/home-info.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   children: [
  //     { path: 'about', component: AboutComponent },
  //     { path: 'images', component: ImagesComponent }
  //   ]
  // },

  {
    path: '', component: HomeInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
