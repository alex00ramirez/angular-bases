import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  // Exportamos los componentes que queramos para poder ser usados en el exterior
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
