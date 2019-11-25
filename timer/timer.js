let header = document.createElement("div")
header.classList.add("header")
header.innerHTML = "Js Timer"
document.getElementById("main").append(header)

let panelCont = document.createElement("div")
panelCont.classList.add("panelCont")
document.getElementById("main").append(panelCont)

let panel = document.createElement("div")
panel.classList.add("panel")
panelCont.append(panel)

let timeControlBox = document.createElement("div")
timeControlBox.classList.add("timeControlBox")
panel.append(timeControlBox)

let hourBox = document.createElement("div")
hourBox.classList.add("timeBox")
timeControlBox.append(hourBox)

let hourDisplay = document.createElement("div")
hourDisplay.classList.add("timeDisplay")
hourDisplay.innerHTML = "00"
hourBox.append(hourDisplay)

let minBox = document.createElement("div")
minBox.classList.add("timeBox")
timeControlBox.append(minBox)

let minDisplay = document.createElement("div")
minDisplay.classList.add("timeDisplay")
minDisplay.innerHTML = "00"
minBox.append(minDisplay)

let secBox = document.createElement("div")
secBox.classList.add("timeBox")
timeControlBox.append(secBox)

let secDisplay = document.createElement("div")
secDisplay.classList.add("timeDisplay")
secDisplay.innerHTML = "00"
secBox.append(secDisplay)

