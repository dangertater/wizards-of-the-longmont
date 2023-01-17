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
//TODO: update these functions to take string or number
//----export let monthSelector = (specificMonth: string | number) => {
export let monthSelector = (specificMonth?: number) => {
	let randomMonthNumber: number = Math.floor(Math.random() * 12)
	if (specificMonth === undefined) {
		//q4e: originally had randomMonthNumber() called on below line, but them red squigglies said nah
		return months[randomMonthNumber]
		//q4e: below in my else if, wtf replaces the string
		//----pseudocode this is what I'm shooting for: else if (typeof specificMonth === string) {
		// } else if ("how do i reference: if the argument type is a string") {
		// 	return specificMonth
		//if number is provided will match to array number
	} else {
		return months[specificMonth - 1]
	}
}
//will generate random month if no argument supplied, or the month correlating with the string or number provided

export let yearSelector = (specificYear?: number) => {
	let randomYearNumber = Math.floor(Math.random() * 14000)
	if (specificYear === undefined) {
		return Math.floor(randomYearNumber)
	} else {
		return specificYear
	}
}
//will generate random month if no argument supplied, or the month correlating with the string or number provided

// export let daySelector = (specificDay: string | number) => {
export let daySelector = (specificDay?: number) => {
	let randomDayNumber: number = Math.floor(Math.random() * 7)
	if (specificDay === undefined) {
		return randomDayNumber
		// pseudocode here for below line - } else if (typeof specificDay === string) {
		// } else if ("same problem as in the monthSelector") {
		// return specificDay
	} else {
		return days[specificDay - 1]
	}
}
//will create an object with a year, month, and day of the week
let timelineObjectConstructor = (
	year: number,
	month: number,
	dayOfTheWeek: number
) => {
	this.year = yearSelector(year)
	this.month = monthSelector(month)
	this.day = daySelector(dayOfTheWeek)
}
