
let header = document.createElement("div")
header.classList.add("header")
header.innerHTML = " &#128342 JS Clock"
document.getElementById("main").appendChild(header)

let controlPanel = document.createElement("div")
controlPanel.classList.add("controlPanel")
document.getElementById("main").appendChild(controlPanel)

/////  UNDER CONTROL PANEL
// let sliderCont = document.createElement("div")
// controlPanel.classList.add("sliderCont")

let slider = document.createElement("div")
slider.classList.add("slider")
controlPanel.append(slider)

let sliderInput = document.createElement("input")
sliderInput.type = "checkbox"
sliderInput.checked = false
slider.append(sliderInput)

let sliderBttn = document.createElement("spam")
sliderBttn.classList.add("sliderBttn")
slider.append(sliderBttn)

let calendarIcon = document.createElement("div")
calendarIcon.classList.add("calendar")

//^^^^ CONTROL PANEL^^^^^
let clockPanel = document.createElement("div")
clockPanel.classList.add("clockPanel")
document.getElementById("main").appendChild(clockPanel)
///// UNDER CLOCK PANEL

let circularCont = document.createElement("div")
circularCont.classList.add("circular")
clockPanel.append(circularCont)

let timeDisplay = document.createElement("div")
timeDisplay.classList.add("timeDisplay")
circularCont.append(timeDisplay)

let dateDisplay = document.createElement("div")
dateDisplay.classList.add("dateDisplay")
dateDisplay.innerHTML = "Monday 13th, 2019"
circularCont.append(dateDisplay)
// ^^^ CLOCK PANEL^^^^^

var systemDate = new Date()
dateDisplay.innerHTML = systemDate.toString().slice(0, 15)


updateClock = ()=> {
	var current = new Date()
	var hours = current.getHours()
	var min = current.getMinutes()
	var sec = current.getSeconds()
	var dayTime = (hours > 12 ? "PM" : "AM")

	hours = (hours > 12 ? hours-12 : hours)
	min = (min < 10 ? "0" + min : min)
	sec = (sec < 10 ? "0" + sec : sec )
	timeDisplay.innerHTML= `${hours}:${min}:${sec} ${dayTime}`
}

updateClock()

var myClock = window.setInterval(updateClock, 1000)