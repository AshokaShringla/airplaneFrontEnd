import { Time } from "@angular/common";

export class Flight {

	id: number;

	airline: string;

	aId: number;

	dDate: Date;

	aDate: Date;

	dTime: Time;

	aTime: Time;

	dAirport: string;

	aAirport: string;

	bPrice: number;

	status: string;

    constructor(){}
}
