
let header = document.createElement("div")
header.classList.add("header")
header.innerHTML = " &#128342 JS Clock"
document.getElementById("main").appendChild(header)

let controlPanel = document.createElement("div")
controlPanel.classList.add("controlPanel")
document.getElementById("main").appendChild(controlPanel)

/////  UNDER CONTROL PANEL
let sliderCont = document.createElement("div")
controlPanel.classList.add("sliderCont")
controlPanel.append(sliderCont)

let slider = document.createElement("div")
slider.classList.add("slider")

let sliderInput = document.createElement("input")
sliderInput.type = "checkbox"
sliderInput.checked = false

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
timeDisplay.innerHTML = "9:00"
circularCont.append(timeDisplay)

let dateDisplay = document.createElement("div")
dateDisplay.classList.add("dateDisplay")
dateDisplay.innerHTML = "Monday 13th, 2019"
circularCont.append(dateDisplay)
// ^^^ CLOCK PANEL^^^^^


