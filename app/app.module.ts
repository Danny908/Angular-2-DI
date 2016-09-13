import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Componente1 } 	 from './app.component1';
import { Componente2 } 	 from './app.component2';
import { valueService }	 from './app.valueService';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Componente1, Componente2 ],
  bootstrap:    [ AppComponent ],
  //Crea una instancia para todos los componentes
  providers:	[valueService]
})
export class AppModule { }
