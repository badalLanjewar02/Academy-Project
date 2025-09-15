import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Home/navigation/navigation.component';
import { AboutRMCPComponent } from './The-Academy/about-rmcp/about-rmcp.component';
import { MissionStatementComponent } from './The-Academy/mission-statement/mission-statement.component';
import { FounderMessageComponent } from './The-Academy/founder-message/founder-message.component';
import { ChairpersonMessagesComponent } from './The-Academy/chairperson-messages/chairperson-messages.component';
import { PrincipalMessageComponent } from './The-Academy/principal-message/principal-message.component';
import { AccreditationComponent } from './The-Academy/accreditation/accreditation.component';
import { PrimaryWingComponent } from './Academics/Methodology/primary-wing/primary-wing.component';
import { MiddleWingComponent } from './Academics/Methodology/middle-wing/middle-wing.component';
import { SeniorWingComponent } from './Academics/Methodology/senior-wing/senior-wing.component';
import { HolisticDevelopmentComponent } from './Academics/holistic-development/holistic-development.component';
import { TechnologyIntegrationComponent } from './Academics/technology-integration/technology-integration.component';
import { GuidanceCouncellingComponent } from './Academics/guidance-councelling/guidance-councelling.component';
import { AuditoriumComponent } from './Infrastructure/auditorium/auditorium.component';
import { SportFacilitiesComponent } from './Infrastructure/sport-facilities/sport-facilities.component';
import { SeniouWingComponent } from './Admissions/admissions/seniou-wing/seniou-wing.component';
import { TCRequestComponent } from './Admissions/tc-request/tc-request.component';
import { HomeInfoComponent } from './Home/home-info/home-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutRMCPComponent,
    MissionStatementComponent,
    FounderMessageComponent,
    ChairpersonMessagesComponent,
    PrincipalMessageComponent,
    AccreditationComponent,
    PrimaryWingComponent,
    MiddleWingComponent,
    SeniorWingComponent,
    HolisticDevelopmentComponent,
    TechnologyIntegrationComponent,
    GuidanceCouncellingComponent,
    AuditoriumComponent,
    SportFacilitiesComponent,
    SeniouWingComponent,
    TCRequestComponent,
    HomeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
