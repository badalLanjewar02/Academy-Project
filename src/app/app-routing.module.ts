import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInfoComponent } from './Home/home-info/home-info.component';
import { GalleryComponent } from './Gallery/gallery/gallery.component';
import { PrimaryWingComponent } from './Admissions/admissions/primary-wing/primary-wing.component';


const routes: Routes = [

 { path: 'PrimaryWing', component: PrimaryWingComponent },
  {
    path: '', component: HomeInfoComponent
  },
  {
    path:'Gallery',component:GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
