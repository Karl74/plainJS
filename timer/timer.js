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


function Component(unitName, parent){
	this.unitName = unitName
	this.parent = parent
	this.counter = 0
}

Component.prototype.box = function(){
	this.box = document.createElement("div")
	this.box.classList = "timeBox"
	this.parent.append(this.box)
}

Component.prototype.display = function(){
	this.display = document.createElement("div")
	this.display.classList = "timeDisplay"
	this.display.innerHTML = "00"
	this.box.append(this.display)
}

Component.prototype.controls = function(){
	this.add=this.add.bind(this)
	this.control = document.createElement("div")
	this.control.classList = "settingBox"
	this.box.append(this.control)

	this.minusControl =document.createElement("button")
	this.minusControl.classList = "ajustButton"
	this.minusControl.innerHTML = "-"
	this.control.append(this.minusControl)	

	this.plusControl =document.createElement("button")
	this.plusControl.classList = "ajustButton"
	this.plusControl.innerHTML = "+"
	this.plusControl.addEventListener("click", this.add)
	this.control.append(this.plusControl)
}

Component.prototype.add = function(e){
	e.preventDefault()
	var unit = e.target
	// e.target.display.innerHTML = this.counter
	console.log(unit)
}
/////////////////////////////////////////////////////
Component.prototype.deploy = function(){
	this.box()
	this.display()
	this.controls()
}


const hours = new Component("HOURS", timeControlBox)
hours.deploy()

const minutes = new Component("min", timeControlBox)
minutes.deploy()

const seconds = new Component ("sec", timeControlBox)
seconds.deploy()

