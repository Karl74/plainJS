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
 screenHolder.classList.add("scrennHolder")
 panel.append(screenHolder)

 let controlHolder = document.createElement("div")
 controlHolder.classList.add("controlHolder")
 panel.append(controlHolder)

 let screenDisplay = document.createElement("p")
 screenDisplay.classList.add("screenDisplay")
 screenDisplay.innerHTML = "0"
 screenHolder.append(screenDisplay)

 let minusControl = document.createElement("div")
 minusControl.classList.add("minus")
 controlHolder.append(minusControl)

 let refreshButton = document.createElement('div')
 refreshButton.classList.add("refresh")
 controlHolder.append(refreshButton)

 let plusButton = document.createElement("div")
 plusButton.classList.add("plus")
 controlHolder.append(plusButton)
 