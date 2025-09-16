import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInfoComponent } from './Home/home-info/home-info.component';
import { GalleryComponent } from './Gallery/gallery/gallery.component';
import { PrimaryWingComponent } from './Admissions/admissions/primary-wing/primary-wing.component';
import { AboutRMCPComponent } from './The-Academy/about-rmcp/about-rmcp.component';
import { MissionStatementComponent } from './The-Academy/mission-statement/mission-statement.component';
import { FounderMessageComponent } from './The-Academy/founder-message/founder-message.component';
import { ChairpersonMessagesComponent } from './The-Academy/chairperson-messages/chairperson-messages.component';
import { PrincipalMessageComponent } from './The-Academy/principal-message/principal-message.component';
import { AccreditationComponent } from './The-Academy/accreditation/accreditation.component';


const routes: Routes = [

 { path: 'PrimaryWing', component: PrimaryWingComponent },
  {
    path: '', component: HomeInfoComponent
  },
  {
    path:'Gallery',component:GalleryComponent
  },

   {
    path: 'TheAcademy',
    children: [
      { path: 'AboutRMCP', component: AboutRMCPComponent },
      { path: 'MissionStatement', component: MissionStatementComponent },
      { path: 'ChairpersonMessages', component: ChairpersonMessagesComponent },
       { path: 'PrincipalMessage', component: PrincipalMessageComponent },
        { path: 'Accreditation', component: AccreditationComponent },
        
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
