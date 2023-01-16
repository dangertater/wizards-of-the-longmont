import React from "react"
let months: string[] = [
	"january",
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december",
]
let days: string[] = [
	"sunday",
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
]
//will generate random month if no argument supplied, or the month correlating with the string or number provided
export let monthSelector = (specificMonth: string | number) => {
	let monthNum:number = Math.floor(Math.random() * 12)
	if (specificMonth === null) {
         //originally had monthNum() called on below line, but them red squigglies said nah
		return months[Math.floor(Math.random() * 12)]
	} else if (typeof specificMonth )
}
//will generate random month if no argument supplied, or the month correlating with the string or number provided

export let yearSelector = (specificYear: number) => {
	let yearNum = Math.floor(Math.random() * 14000)
}
//will generate random month if no argument supplied, or the month correlating with the string or number provided

export let daySelector = (specificDay: string | number) => {}
//will create an object with a year, month, and day of the week
function timelineObjectConstructor(
	year: number = yearSelector(),
	month: string = monthSelector(),
	dayOfTheWeek: string = randomDay()
	// location: string =
) {
	this.year = year
}
