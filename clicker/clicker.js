// ////[VIEW]///////////////////////////////////////////

 let header = document.createElement("div")
 header.classList.add("header")
 header.innerHTML = "Js Clicker"
 document.getElementById("main").appendChild(header)

 let panelBox = document.createElement("div")
 panelBox.classList.add("panelBox")
 document.getElementById("main").appendChild(panelBox)

 let panel = document.createElement("div")
 panel.classList.add("panel")
 panelBox.append(panel)

 let screenHolder = document.createElement("div")
 screenHolder.classList.add("screenHolder")
 panel.append(screenHolder)

 let controlHolder = document.createElement("div")
 controlHolder.classList.add("controlHolder")
 panel.append(controlHolder)

 let screenDisplay = document.createElement("p")
 screenDisplay.classList.add("screenDisplay")
 screenDisplay.innerHTML = "0"
 screenHolder.append(screenDisplay)

 let minusButton = document.createElement("button")
 minusButton.classList.add("minus")
 minusButton.innerHTML = "-"
 controlHolder.append(minusButton)

 let refreshButton = document.createElement('button')
 refreshButton.classList.add("refresh")
 refreshButton.innerHTML = "&#x1f504"
 controlHolder.append(refreshButton)

 let plusButton = document.createElement("button")
 plusButton.classList.add("plus")
 plusButton.innerHTML = "+"
 controlHolder.append(plusButton)
 
 var count=0

 sum = ()=> {
 	count ++
 	screenDisplay.innerHTML = count
 }

 substract = ()=>{
 	count--
 	screenDisplay.innerHTML = count
 }
 
 zero = ()=>{
 	count = 0
 	screenDisplay.innerHTML = count
 }
 	
plusButton.addEventListener("click", sum)
minusButton.addEventListener("click", substract)
refreshButton.addEventListener("click",zero)
 