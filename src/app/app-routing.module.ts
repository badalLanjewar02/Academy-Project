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
import { HolisticDevelopmentComponent } from './Academics/holistic-development/holistic-development.component';
import { TechnologyIntegrationComponent } from './Academics/technology-integration/technology-integration.component';
import { GuidanceCouncellingComponent } from './Academics/guidance-councelling/guidance-councelling.component';
import { PressCoverageComponent } from './Pess Coverage/press-coverage/press-coverage.component';
import { EMagazineComponent } from './Pess Coverage/e-magazine/e-magazine.component';
import { AuditoriumComponent } from './Infrastructure/auditorium/auditorium.component';
import { MiddleWingComponent } from './Admissions/middle-wing/middle-wing.component';


const routes: Routes = [

  { path: 'PrimaryWing', component: PrimaryWingComponent },
  {
    path: '', component: HomeInfoComponent
  },
  {
    path: 'Gallery', component: GalleryComponent
  },

  {
    path: 'TheAcademy',
    children: [
      { path: 'AboutRMCP', component: AboutRMCPComponent },
      { path: 'MissionStatement', component: MissionStatementComponent },
      { path: 'FounderMessage', component: FounderMessageComponent },
      { path: 'ChairpersonMessages', component: ChairpersonMessagesComponent },
      { path: 'PrincipalMessage', component: PrincipalMessageComponent },
      { path: 'Accreditation', component: AccreditationComponent },
    ]
  },
  {
    path: 'Academics',
    children: [
      { path: 'HolisticDevelopment', component: HolisticDevelopmentComponent },
      { path: 'TechnologyIntegration', component: TechnologyIntegrationComponent },
      { path: 'GuidanceCouncelling', component: GuidanceCouncellingComponent },
    ]
  },

  {
    path: 'PressCoverage',
    children: [
      { path: 'PressCoverage', component: PressCoverageComponent },
      { path: 'EMagazine', component: AuditoriumComponent },
      //  { path: 'EMagazine', component: EMagazineComponent },
      { path: 'GuidanceCouncelling', component: GuidanceCouncellingComponent },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
