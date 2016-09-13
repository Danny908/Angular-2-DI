import { Component } from '@angular/core';
import { valueService } from './app.valueService';

@Component({
	selector: 'my-component2',
	template: `
	{{arrayVal}}
	<h1>Component 2</h1>
	<p>Random values</p>
	<button class="btn btn-default" (click)="getData()">Get!</button>
	<label>You get: {{data}}</label>
	<br>
	<input class="form-inline" placeholder="Add Items" #input>
	<button class="btn btn-default" (click)="addData(input.value)">Add</button>`,
	//Se crea una instancia para cada componente
	//providers: [valueService]
})

export class Componente2 {

	constructor(private values: valueService) {}

	data: string;

	getData() {

		this.data = this.values.getRandomValues();
	}

	addData(data: string) {
		this.values.insertValues(data);
	}

	get arrayVal() {return JSON.stringify(this.values.data)}

}