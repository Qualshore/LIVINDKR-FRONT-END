import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserService } from './shared_service/user.service';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { InstitutionComponent } from './institution/institution.component';
import { EvenementComponent } from './evenement/evenement.component';
import { User } from 'app/classes/user';
import { EvenementService } from 'app/shared_service/evenement.service';
import { ListesInstitutionsComponent } from './listes-institutions/listes-institutions.component';
import { ListeEvenementsComponent } from './liste-evenements/liste-evenements.component';
import { DeleteInstitutionComponent } from './delete-institution/delete-institution.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';

export const appRoutes:Routes=[
  {path: '', redirectTo: '/institution',pathMatch: 'full'},
  {path:'institution', component:InstitutionComponent },
  {path:'evenement', component:EvenementComponent },
  {path:'listeInstitution', component:ListesInstitutionsComponent },
  {path:'listeEvent', component:ListeEvenementsComponent },
  {path:'deleteEvent/:id', component:DeleteEventComponent },
  {path:'deleteInstitution/:id', component:DeleteInstitutionComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    InstitutionComponent,
    EvenementComponent,
    ListesInstitutionsComponent,
    ListeEvenementsComponent,
    DeleteInstitutionComponent,
    DeleteEventComponent,
    // User
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: [UserService, EvenementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
