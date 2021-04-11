import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {GameScreenComponent} from './game-screen/game-screen.component';
import {RouterModule} from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import {HttpClientModule} from '@angular/common/http';
import { FragenQuestionComponent } from './fragen-question/fragen-question.component';
import { BooleanQuestionComponent } from './boolean-question/boolean-question.component';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    GameScreenComponent,
    HomeScreenComponent,
    FragenQuestionComponent,
    BooleanQuestionComponent
  ],
  imports: [
    PanelModule,
    BrowserModule,
    ButtonModule,
    SliderModule,
    BrowserModule,
    DropdownModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MessageModule,
    DialogModule,
    MessagesModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeScreenComponent
      },
      {
        path: 'game/:questions/:difficulty',
        component: GameScreenComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
