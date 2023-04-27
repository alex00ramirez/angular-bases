import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heros.module';


@NgModule({
  declarations: [
    AppComponent,
    // Debemos importar nuestros componentes para poder utilizarlos
  ],
  // Aqui importamos nuestros modulos
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
