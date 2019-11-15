
mkelement = (name, type, classN, text)=>{
	name = document.createElement(type)
	name.classList.add(classN)
	name.innerHTML = text
	return name
}

var first = mkelement("header", "div", "header",
	"Js Clicker")
document.getElementById("main").append(first)

////////////////////////////////////////////////////////

 function Maker (name, type, text, fClass) {
	this.type = type
	this.text = text
	this.name = name
	this.fClass = fClass
}

Maker.prototype.deploy = function(){
	this.name = document.createElement(this.type)
	this.name.innerHTML = this.text
	this.name.classList.add(this.fClass)
	return this.name
}

var test = new Maker("test", "div", "this is a test", "header") 
document.getElementById("main").append(test.deploy())

var count = 0

Maker.prototype.suma = function(){
	
}