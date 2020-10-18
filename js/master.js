document.querySelectorAll(`[id^="routeline_"]`).forEach(function (routeLine) {
  routeLine.addEventListener("mouseover", function (event) {
    event.currentTarget.parentElement.append(event.currentTarget);
  })
})



document.querySelectorAll(`[id^="terminal_"]`).forEach(function(terminalElem) {
  console.log(terminalElem.id, terminalElem);
  console.log("popup_" + terminalElem.id.split("_")[1]); 

  const popupId = "popup_" + terminalElem.id.split("_")[1];

  const popupElem = document.getElementById(popupId)

  

  terminalElem.addEventListener("mouseover", function (event) {
    popupElem.classList.add("popup-open");
  })

  terminalElem.addEventListener("mouseout", function (event) {
    popupElem.classList.remove("popup-open");
  })

});


document.querySelectorAll(`[id^="stop_"]`).forEach(function(stopElem) {

  const routelineId = "routeline_" + stopElem.id.split("_")[1];

   const routelineElem = document.getElementById(routelineId);

   stopElem.addEventListener("mouseover", function (event) {
     stopElem.classList.add("toggled");
    routelineElem.classList.add("show-route");
    event.currentTarget.parentElement.append(routelineElem);
    
  })

  stopElem.addEventListener("mouseout", function (event) {
    stopElem.classList.remove("toggled");
    routelineElem.classList.remove("show-route");
  })

  
})