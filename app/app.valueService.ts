import { Injectable } from '@angular/core';

@Injectable()
export class valueService {
	data = ['Chocolate', 'Cake', 'Soda', 'Chips', 'Bubblegum'];

	getRandomValues() {
		return this.data[Math.floor(Math.random()*this.data.length)];
	}

	insertValues(newData: string) {
		this.data.push(newData);
	}
}
