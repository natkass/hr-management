import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './src/app/app.component';
import { AppRoutingModule } from './src/app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { InMemoryDataService } from './core/services/in-memory-data.service';
import { CandidateListComponent } from './features/candidates/candidate-list/candidate-list.component';
import { CandidateFormComponent } from './features/candidates/candidate-form/candidate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    CandidateFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
