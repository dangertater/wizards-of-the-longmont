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
	let monthNum: number = Math.floor(Math.random() * 12)
	if (specificMonth === null) {
		//q4e: originally had monthNum() called on below line, but them red squigglies said nah
		return months[Math.floor(Math.random() * 12)]
		//q4e: below in my else if, wtf replaces the string
		//----pseudocode this is what I'm shooting for: else if (typeof specificMonth === string) {
	} else if ("how do i reference: if the argument type is a string") {
		return specificMonth
		//if number is provided will match to array number
	} else {
		return months[specificMonth - 1]
	}
}
//will generate random month if no argument supplied, or the month correlating with the string or number provided

export let yearSelector = (specificYear: number) => {
	let yearNum = Math.floor(Math.random() * 14000)
	if (specificYear === null) {
		return Math.floor(Math.random() * 14000)
	} else {
		return specificYear
	}
}
//will generate random month if no argument supplied, or the month correlating with the string or number provided

export let daySelector = (specificDay: string | number) => {
	let dayNum: number = Math.floor(Math.random() * 7)
	if (typeof specificDay === null) {
		return Math.floor(Math.random() * 7)
		// } else if (typeof specificDay === string) {
	} else if ("same problem as in the monthSelector") {
		return specificDay
	} else {
		return days[specificDay - 1]
	}
}
//will create an object with a year, month, and day of the week
function timelineObjectConstructor(
	year: number = yearSelector(),
	month: string = monthSelector(),
	dayOfTheWeek: string = randomDay()
) {
	this.year = yearSelector()
	this.month = monthSelector()
	this.day = daySelector()
}
